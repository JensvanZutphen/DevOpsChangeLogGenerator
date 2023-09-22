DevOps Change Log Generator

Welcome to the DevOps Change Log Generator! This is a Svelte application designed to streamline your workflow by automatically generating a changelog from closed work items in Azure DevOps. The application leverages the power of either the OpenAI or OpenRouter API to create a comprehensive list in Dutch, enabling end users to easily track the improvements made with each release.
Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Node.js
- npm
Installation

1. Clone the repository:
```git clone https://github.com/JensvanZutphen/DevOpsChangeLogGenerator```
2. Navigate into the cloned repository and install the dependencies:
```npm install```
3. Start the development server:
```npm run dev```

Usage

The application features a user-friendly form where you can select a model, and input your API Key, Query Link, and PAT Token. Upon form submission, the application fetches the work items from the Azure DevOps API, filters out the closed work items, and sends a request to either the OpenAI or OpenRouter API to generate a changelog. You can then download the changelog or view it in raw format.
Built With

This application is built with the following technologies:
- Sveltekit - The web framework used
- Axios - Promise based HTTP client for the browser and node.js
- OpenAI API - Used to generate the changelog
- OpenRouter API - Used to generate the changelog

License

This project is licensed under the MIT License - see the LICENSE.md file for more details.
Acknowledgments

We would like to express our gratitude to the open-source community for making their code available for use. Your contributions make projects like this possible.
