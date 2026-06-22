import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: object | object[];
}

const BASE_URL = "https://oriapartners.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setSchema(schemas: object | object[]) {
  document.querySelectorAll('script[data-seo="dynamic"]').forEach((el) => el.remove());

  const items = Array.isArray(schemas) ? schemas : [schemas];
  items.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "dynamic");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  schema,
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    setLink("canonical", canonical ?? BASE_URL);
    setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, "property");
    setMeta("og:description", ogDescription ?? description, "property");
    setMeta("og:url", canonical ?? BASE_URL, "property");
    setMeta("og:image", DEFAULT_OG_IMAGE, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:image:alt", "Oria Partners — Reestruturação Financeira e Turnaround", "property");
    setMeta("twitter:title", ogTitle ?? title);
    setMeta("twitter:description", ogDescription ?? description);
    setMeta("twitter:image", DEFAULT_OG_IMAGE);
    setMeta("twitter:card", "summary_large_image");
    if (schema) setSchema(schema);
  }, [title, description, canonical, ogTitle, ogDescription, schema]);
}
