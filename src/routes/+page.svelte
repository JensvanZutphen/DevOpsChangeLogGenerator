<script>
    import {
        Input,
        Label,
        Helper,
        Select,
        Button,
        Textarea,
    } from "flowbite-svelte";
    import { writable } from "svelte/store";

    let selected;

    let models = [
        {
            value: "openai/gpt-3.5-turbo",
            name: "OpenRouter/OpenAI: GPT-3.5 Turbo",
        },
        {
            value: "openai/gpt-3.5-16k",
            name: "OpenRouter/OpenAI: GPT-3.5 Turbo 16k",
        },
        { value: "openai/gpt-4", name: "OpenRouter/OpenAI: GPT-4" },
        { value: "openai/gpt-4-32k", name: "OpenRouter/OpenAI: GPT-4 32k" },
        {
            value: "anthropic/claude-2",
            name: "OpenRouter/Anthropic: Claude v2",
        },
        {
            value: "anthropic/claude-instant-v1",
            name: "OpenRouter/Anthropic: Claude Instant v1",
        },
        {
            value: "google/palm-2-chat-bison",
            name: "OpenRouter/Google: PaLM 2 Bison",
        },
        { value: "OpenAI/gpt-3.5-turbo", name: "OpenAI/GPT-3.5 Turbo" },
        { value: "OpenAI/gpt-3.5-16k", name: "OpenAI/GPT-3.5 Turbo 16k" },
        { value: "OpenAI/gpt-4", name: "OpenAI/GPT-4" },
        { value: "OpenAI/gpt-4-32k", name: "OpenAI/GPT-4 32k" },
    ];

    let openaiUrl = "";
    let ApiKey = "";
    let queryLink = "";
    let patToken = "";
    let message = "";
    let messageStore = writable(""); // Use a Svelte store for message
    let isLoading = false; 


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
            "data:text/plain;charset=utf-8," + encodeURIComponent($messageStore)
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
                (screen.width - 840)
        );
        win.document.body.innerHTML = $messageStore;
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
