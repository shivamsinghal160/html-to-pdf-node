# HTML-TO-PDF-NODE

_Transform HTML into Perfect PDFs Instantly_

![last-commit](https://img.shields.io/github/last-commit/shivamsinghal160/html-to-pdf-node?style=flat&logo=git&logoColor=white&color=0080ff)
![repo-top-language](https://img.shields.io/github/languages/top/shivamsinghal160/html-to-pdf-node?style=flat&color=0080ff)
![repo-language-count](https://img.shields.io/github/languages/count/shivamsinghal160/html-to-pdf-node?style=flat&color=0080ff)

### Built with:

![Express](https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![Puppeteer](https://img.shields.io/badge/Puppeteer-40B5A4.svg?style=flat&logo=Puppeteer&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

## Overview

**html-to-pdf-node** is a versatile Node.js library designed to convert HTML content and web URLs into high-quality PDFs efficiently. It provides a core server that manages client requests, handles content rendering with Puppeteer, and ensures smooth file management and cleanup.

This tool simplifies integrating PDF generation into your workflows—whether for report creation, content sharing, or automated document processing.

### Why html-to-pdf-node?

This project streamlines PDF creation and management within your applications. Key features include:

- 🖥️ **Puppeteer Integration**: Renders web pages and HTML content into professional PDFs with ease.
- 🔍 **Content Retrieval**: Fetches HTML from URLs for dynamic processing.
- 🧹 **File Cleanup Utility**: Automates deletion of temporary or redundant files to keep your storage organized.
- 🔑 **Secure Request Handling**: Manages authorization and cross-origin requests seamlessly.
- 📁 **Custom PDF Generation**: Converts HTML snippets into downloadable documents, supporting flexible workflows.
- 🗑️ **Auto-Delete Feature**: Automatically removes generated PDFs after a specified time, ensuring efficient storage management.

---

## Getting Started

### Prerequisites

- **Programming Language**: JavaScript
- **Package Manager**: npm

## Environment Variables (.env)

- **PORT**: The port on which the server will run (default: 3000).
- **AUTH_TOKEN**: A token for authorizing requests (default: my-secret-token).

### Installation

Build the project from source and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/shivamsinghal160/html-to-pdf-node.git

# Navigate to the project directory
cd html-to-pdf-node

# Install dependencies
npm install

# Run the build script
node index.js

```

# API Endpoints

- POST /generate-pdf: Convert HTML to PDF with body content.
- DELETE /delete-pdf: Delete a specified pdf.

## Body Content Example for POST /generate-pdf

```json
{
  "html": "<h1>Hello, World!</h1>"
}

------------- OR -------------

{
  "url": "https://example.com"
}

# For Stopping Auto Delete
{
  "html": "<h1>Hello, World!</h1>",
  "autoDelete": false
}

```

## Body Content Example for DELETE /delete-pdf

```json
{
  "uuid": "example"
}
```
