# Shortlink
This is a dynamic URL shortener that is hosted on [CloudFlare workers](https://cloudflare.dev). It pulls from a KV namespace, redirecting the user to the matching URL.

## Self hosting
If you want to deploy this yourself, you need to create a KV namespace, copy its ID, then deploy to CloudFlare with `wrangler publish`.