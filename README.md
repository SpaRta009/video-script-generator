# Video Script Generator

> From script to AI video in a few clicks: write your idea, pick a style, start the generation and download the result. Runs entirely in the browser, no installation required.

[![Live Demo](https://img.shields.io/badge/Live-Demo-ff6b00?style=for-the-badge&logo=netlify&logoColor=white)](https://charming-ganache-8c1392.netlify.app/)
![Status](https://img.shields.io/badge/status-active-2d8a4e?style=for-the-badge)
![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20Vanilla%20JS-d4a017?style=for-the-badge)

## Demo

**[https://charming-ganache-8c1392.netlify.app/](https://charming-ganache-8c1392.netlify.app/)**

## Features

- **Guided scenario builder**: event, moment, action, finale and free-form details
- **Video styles, categories and effects** to choose from
- **Characters and references**: inspiration images, character, outfit
- **Generation controls**: number of shots, duration, resolution, aspect ratio (9:16 / 16:9), quality, audio
- **Queue** to launch and track multiple generations
- **Gallery** of your generated videos
- **Direct download** through a same-origin proxy (bypasses CORS, streamed, no size limit)
- **Multilingual interface**
- **Built-in diagnostics panel** to understand errors in real time
- **Mobile-first**: dark, responsive, touch-friendly interface

## Architecture

```
.
├── index.html                          # Full application (HTML + CSS + JS, single file)
└── netlify/
    └── edge-functions/
        └── download-proxy.js           # Download proxy -> /api/download-proxy?url=...
```

| Component | Role |
|---|---|
| `index.html` | UI and client-side logic, calls the Agnes API from the browser |
| `download-proxy.js` | Fetches the video server-side and streams it back to avoid CORS restrictions |

## Configuration

The application uses the **Agnes AI** API.

1. Create an account and get your key at [platform.agnes-ai.com](https://platform.agnes-ai.com)
2. Open the application and paste your key into the **API** panel
3. The key is stored **only in your browser** (localStorage). It is never sent anywhere except the Agnes API and is not part of this repository.

## Run Locally

```bash
git clone https://github.com/<your-username>/video-script-generator.git
cd video-script-generator
npm install -g netlify-cli
netlify dev
```

Then open `http://localhost:8888`.

> Opening `index.html` directly via `file://` works for the interface, but the proxy download and some API calls require a real server.

## Deployment

The project is ready for **Netlify**:

1. Connect the GitHub repository to Netlify (*Add new site -> Import from Git*)
2. Leave the build command empty and set the publish directory to `.`
3. Every `git push` triggers an automatic redeploy

## Security

- No API key in the source code
- The proxy only accepts **HTTPS** URLs
- Recommended for production: restrict the proxy to the Agnes video server domain so it cannot be used as an open proxy

## Roadmap

- [ ] Scenario export / import
- [ ] Ready-to-use scenario templates
- [ ] Synced history

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT. See the `LICENSE` file.
