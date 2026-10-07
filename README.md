# mweb

React-based web frontend for the Mastodon Analytics Platform

How to launch?

1. npm install
2. npm run dev
3. Open the URL shown in terminal (usually http://localhost:5173)

## LLM settings

The app calls an OpenAI-compatible chat completions API through `/api/llm/v1/chat/completions`.

For Gemini, use these settings:

- `LLM_API_KEY`: your Gemini API key
- `LLM_BASE_URL`: `https://generativelanguage.googleapis.com/v1beta/openai`
- `LLM_MODEL`: `gemini-2.5-flash`
