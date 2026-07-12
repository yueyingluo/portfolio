# Portfolio Assistant Worker

Cloudflare Worker proxy for the public portfolio AI assistant.

- Stores the DeepSeek API key only as the encrypted `DEEPSEEK_API_KEY` secret.
- Restricts browser requests to the portfolio origin and local preview.
- Streams DeepSeek responses to the frontend.
- Keeps the public profile/project knowledge and anti-hallucination policy server-side.

The Worker defaults to `deepseek-v4-flash` with thinking disabled for lower-latency interview use.
