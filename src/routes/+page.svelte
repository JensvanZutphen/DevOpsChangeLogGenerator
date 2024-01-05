<script lang="ts">
    import {
        Input,
        Label,
        Helper,
        Select,
        Button,
        Textarea,
        Checkbox,
    } from "flowbite-svelte";

    import { writable } from "svelte/store";

    let selected: any;

    let models = [
        {
            value: "openai/gpt-3.5-turbo",
            name: "OpenAI: GPT-3.5 Turbo (Latest)",
        },
        {
            value: "openai/gpt-4",
            name: "OpenAI: GPT-4 (Latest)",
        },
        {
            value: "openai/gpt-4-32k",
            name: "OpenAI: GPT-4 32k (Latest)",
        },
        {
            value: "openai/gpt-3.5-turbo-0613",
            name: "OpenAI: GPT-3.5 Turbo 0613 (Deprecates Jun 13, 2024)",
        },
        {
            value: "openai/gpt-3.5-turbo-0301",
            name: "OpenAI: GPT-3.5 Turbo 0301 (Deprecates Jun 13, 2024)",
        },
        {
            value: "openai/gpt-4-0613",
            name: "OpenAI: GPT-4 0613 (Latest Snapshot)",
        },
        {
            value: "openai/gpt-4-32k-0613",
            name: "OpenAI: GPT-4 32k 0613 (Latest Snapshot)",
        },
        {
            value: "openai/gpt-4-0314",
            name: "OpenAI: GPT-4 0314 (Legacy, Deprecates Jun 13, 2024)",
        },
        {
            value: "openai/gpt-4-32k-0314",
            name: "OpenAI: GPT-4 32k 0314 (Legacy, Deprecates Jun 13, 2024)",
        },
        {
            value: "openai/gpt-4-1106-preview",
            name: "OpenAI: GPT-4 1106 Preview (Turbo)",
        },
        {
            value: "openai/gpt-4-vision-preview",
            name: "OpenAI: GPT-4 Vision Preview (Turbo with Vision)",
        },
        {
            value: "anthropic/claude-2",
            name: "OpenRouter/Anthropic: Claude v2",
        },
        {
            value: "anthropic/claude-instant-v1",
            name: "OpenRouter/Anthropic: Claude Instant v1",
        },
    ];

    let openaiUrl = "";
    let ApiKey = "";
    let queryLink = "";
    let patToken = "";
    let message = "";
    let messageStore = writable(""); // Use a Svelte store for message
    let isLoading = false;
    let descriptionChecked = false;
    let historyChecked = false;

    async function handleSubmit() {
        isLoading = true; // Set loading state to true when form is submitted

        const response = await fetch("/api/changelog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ApiKey,
                queryLink,
                patToken,
                model: selected,
                includeDescription: descriptionChecked,
                includeHistory: historyChecked,
            }),
        });
        const data = await response.json();
        messageStore.set(data.message); // Update the store
        isLoading = false; // Set loading state to false when response is received
    }

    // Function to download the changelog
    function downloadChangelog() {
        const element = document.createElement("a");
        element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," +
                encodeURIComponent($messageStore),
        );
        element.setAttribute("download", "changelog.txt");

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    // Function to view the raw changelog
    function viewRawChangelog() {
        const win = window.open(
            "",
            "Title",
            "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" +
                (screen.height - 400) +
                ",left=" +
                (screen.width - 840),
        );
        if (win) {
            win.document.body.innerHTML = $messageStore;
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <Label>
        Select a model:
        <Select class="mt-2" items={models} bind:value={selected} required />
    </Label>

    <div>
        <Label for="ApiKey" class="mb-2">Api Key:</Label>
        <Input id="ApiKey" bind:value={ApiKey} placeholder="ApiKey:" required />
    </div>
    <div>
        <Label for="queryLink" class="mb-2">Query Link:</Label>
        <Input
            id="queryLink"
            bind:value={queryLink}
            placeholder="Query Link"
            required
        />
    </div>
    <div>
        <Label for="patToken" class="mb-2">PAT Token:</Label>
        <Input
            id="patToken"
            bind:value={patToken}
            placeholder="PAT Token"
            required
        />
    </div>
    <Checkbox
        bind:checked={descriptionChecked}
        aria-describedby="helper-checkbox-description">Description</Checkbox
    >
    <Helper id="helper-checkbox-description" class="pl-6"
        >Add the description of the work items (This may use more tokens)</Helper
    >

    <Checkbox
        bind:checked={historyChecked}
        aria-describedby="helper-checkbox-history">History</Checkbox
    >
    <Helper id="helper-checkbox-history" class="pl-6"
        >Add the History of the work items (This may use more tokens)</Helper
    >

    <br />
    <!-- Add the new buttons -->
    <Button on:click={downloadChangelog} variant="secondary"
        >Download Changelog</Button
    >
    <Button on:click={viewRawChangelog} variant="secondary"
        >View Raw Changelog</Button
    >
    <Button type="submit" variant="primary">Generate Changelog</Button>
</form>

{#if isLoading}
    <Label>Loading...</Label>
{/if}

{#if $messageStore}
    <!-- Use the reactive variable in the if statement -->
    <div>
        <Label class="text-2xl font-bold">Changelog:</Label>
        <br />
        {#each $messageStore.split("\n") as line (line)}
            <Label class="mb-2">{line}</Label>
            <br />
        {/each}
    </div>
{/if}
