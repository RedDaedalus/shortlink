export async function handleRequest(request: Request): Promise<Response> {
  const slug = new URL(request.url).pathname.substring(1);
  console.log(`Looking up url for ${slug}`);
  
  const url = await SHORTLINK_URLS.get(slug);
  if (!url) {
    return new Response("Not Found", { status: 404 });
  }

  return Response.redirect(url, 301);
}
