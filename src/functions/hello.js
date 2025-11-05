export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const name = url.searchParams.get("name") || "гост";
  
  return new Response(`Здравей, ${name}!`, {
    headers: { "content-type": "text/plain" }
  });
}