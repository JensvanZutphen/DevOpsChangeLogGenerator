import { j as json } from './index-2b68e648.js';
import axios from 'axios';
import { URL } from 'url';

async function POST({ request }) {
  const { ApiKey, queryLink, patToken, model } = await request.json();
  const url = new URL(queryLink);
  const pathParts = url.pathname.split("/").filter(Boolean);
  const organization = url.hostname.split(".")[0];
  const project = pathParts[0];
  const id = pathParts[pathParts.length - 1];
  console.log("Organization:", organization);
  console.log("Project:", project);
  console.log("ID:", id);
  const apiUrl = `https://dev.azure.com/${organization}/${project}/_apis/wit/wiql/${id}?api-version=6.0`;
  console.log("PAT Token:", patToken);
  console.log("Fetching from Azure DevOps API:", apiUrl);
  const response = await axios.get(apiUrl, {
    headers: {
      "Authorization": `Basic ${Buffer.from(`:${patToken}`).toString("base64")}`,
      "Content-Type": "application/json"
    }
  });
  let data = null;
  if (response.headers["content-type"]?.includes("application/json")) {
    data = response.data;
  }
  const workItemDetails = await Promise.all(data["workItems"].map(async (item) => {
    const response2 = await axios.get(item["url"], {
      headers: {
        "Authorization": `Basic ${Buffer.from(`:${patToken}`).toString("base64")}`,
        "Content-Type": "application/json"
      }
    });
    return { id: item["url"].split("/").pop(), ...response2.data };
  }));
  const closedWorkItems = workItemDetails.filter((item) => "fields" in item && item["fields"]["System.State"] === "Closed");
  const messages = [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Create a changelog from the following closed work items: " + closedWorkItems.map((item) => `#${item.id} - ${item["fields"]["System.Title"]}`).join(", ") + ". Make it a short comprehensive list in dutish so the end user can see the improvement we made with this release" }
  ];
  console.log(model);
  if (model.includes("OpenAI/gpt")) {
    console.log("Sending to OpenAI API...");
    const OpenAIModel = model.replace("OpenAI/", "");
    const openAiResponse = await axios.post(`https://api.openai.com/v1/chat/completions`, {
      model: OpenAIModel,
      messages,
      temperature: 0.3
      // temperature: temperature, for later
    }, {
      headers: { "Authorization": `Bearer ${ApiKey}`, "Content-Type": "application/json" }
    });
    console.log(OpenAIModel);
    console.log("Response from OpenAI API:");
    const openAiData = openAiResponse.data;
    console.log(openAiData.choices[0].message.content);
    return json({
      message: openAiData.choices[0].message.content
    });
  } else {
    console.log("Sending to OpenRouter API...");
    const openRouterModel = model.replace("OpenRouter/", "");
    const openRouterResponse = await axios.post(`https://openrouter.ai/api/v1/chat/completions`, {
      model: openRouterModel,
      // temperature: temperature, for later
      messages
    }, {
      headers: {
        "Authorization": `Bearer ${ApiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://google.com",
        // replace with your site URL
        "X-Title": "Google"
        // replace with your site name
      }
    });
    console.log("Response from OpenRouter API:");
    const openRouterData = openRouterResponse.data;
    console.log(openRouterData.choices[0].message.content);
    return json({
      message: openRouterData.choices[0].message.content
    });
  }
}

export { POST };
//# sourceMappingURL=_server.ts-840dbaa6.js.map
