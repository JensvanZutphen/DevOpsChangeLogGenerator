import { json } from '@sveltejs/kit';
import axios from 'axios';
import { URL } from 'url';




interface RequestData {
    ApiKey: string;
    queryLink: string;
    patToken: string;
    model: string; // Add this line
}


interface WorkItem {
    url: string;
}

interface WorkItemDetails {
    id: string;
    fields: {
        'System.State': string;
        'System.Title': string;
    };
}

export async function POST({ request }) {
    const { ApiKey, queryLink, patToken, model }: RequestData = await request.json(); // Include model here

    // Extract organization, project, and id from the provided URL
    const url = new URL(queryLink);
    const pathParts = url.pathname.split('/').filter(Boolean);
    const organization = url.hostname.split('.')[0]; // Get the organization from the hostname
    const project = pathParts[0]; // Get the project as the first part of the path
    const id = pathParts[pathParts.length - 1]; // Get the last part of the path
    console.log('Organization:', organization);
    console.log('Project:', project);
    console.log('ID:', id);

    // Construct the Azure DevOps API URL
    const apiUrl = `https://dev.azure.com/${organization}/${project}/_apis/wit/wiql/${id}?api-version=6.0`;

    console.log('PAT Token:', patToken);
    console.log('Fetching from Azure DevOps API:', apiUrl);
    const response = await axios.get(apiUrl, {
        headers: {
            'Authorization': `Basic ${Buffer.from(`:${patToken}`).toString('base64')}`,
            'Content-Type': 'application/json'
        }
    });

    let data: { workItems: WorkItem[] } | null = null;

    if (response.headers['content-type']?.includes('application/json')) {
        data = response.data;
    }

    // Fetch work item details
    const workItemDetails: WorkItemDetails[] = await Promise.all(data['workItems'].map(async (item: WorkItem) => {
        const response = await axios.get(item['url'], {
            headers: {
                'Authorization': `Basic ${Buffer.from(`:${patToken}`).toString('base64')}`,
                'Content-Type': 'application/json'
            }
        });
        return { id: item['url'].split('/').pop(), ...response.data }; // Include the ID in the returned object
    }));

    // Filter closed work items
    const closedWorkItems: WorkItemDetails[] = workItemDetails.filter(item => 'fields' in item && item['fields']['System.State'] === 'Closed');

    // Create changelog
    const messages = [
        { "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": "Create a changelog from the following closed work items: " + closedWorkItems.map(item => `#${item.id} - ${item['fields']['System.Title']}`).join(', ') + ". Include the work item ID after each line. Make it a short comprehensive list in Dutch so the end user can see the improvement we made with this release" },
    ];
    console.log(model);

    // if model has Openai/gpt then use openai otherwise use openrouter 
    if (model.includes("OpenAI/gpt")) {
        console.log('Sending to OpenAI API...');
        const OpenAIModel = model.replace("OpenAI/", "");
        const openAiResponse = await axios.post(`https://api.openai.com/v1/chat/completions`, {
            model: OpenAIModel,
            messages: messages,
            temperature: 0.3
            // temperature: temperature, for later
        }, {
            headers: { 'Authorization': `Bearer ${ApiKey}`, 'Content-Type': 'application/json' }
        });
        console.log(OpenAIModel)
        console.log('Response from OpenAI API:');
        const openAiData: { choices: { message: { content: string } }[] } = openAiResponse.data;
        console.log(openAiData.choices[0].message.content);
        return json({
            message: openAiData.choices[0].message.content
        })
    } else {
        console.log('Sending to OpenRouter API...');

        //remove OpenRouter/ from model name
        const openRouterModel = model.replace("OpenRouter/", "");
        const openRouterResponse = await axios.post(`https://openrouter.ai/api/v1/chat/completions`, {
            model: openRouterModel,
            // temperature: temperature, for later
            messages: messages
        }, {
            headers: {
                'Authorization': `Bearer ${ApiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'http://google.com', // replace with your site URL
                'X-Title': 'Google' // replace with your site name
            }
        });
        console.log('Response from OpenRouter API:');
        const openRouterData: { choices: { message: { content: string } }[] } = openRouterResponse.data;
        console.log(openRouterData.choices[0].message.content);
        return json({
            message: openRouterData.choices[0].message.content
        })
    }
}