// Proxy de téléchargement same-origin : contourne le CORS du serveur vidéo Agnes (streaming, sans limite de taille)
export default async (request) => {
  const target = new URL(request.url).searchParams.get("url");
  let u;
  try { u = new URL(target); } catch { return new Response("bad url", { status: 400 }); }
  if (u.protocol !== "https:") return new Response("https only", { status: 400 });
  const upstream = await fetch(u.toString(), { method: request.method === "HEAD" ? "HEAD" : "GET" });
  const h = new Headers();
  h.set("content-type", upstream.headers.get("content-type") || "video/mp4");
  const len = upstream.headers.get("content-length"); if (len) h.set("content-length", len);
  h.set("cache-control", "no-store");
  return new Response(upstream.body, { status: upstream.status, headers: h });
};
export const config = { path: "/api/download-proxy" };
