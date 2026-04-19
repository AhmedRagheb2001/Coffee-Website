import { useEffect } from "react";

function normalizeStructuredData(value, origin) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeStructuredData(item, origin));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => {
        if (
          (key === "url" || key === "image") &&
          typeof entryValue === "string" &&
          entryValue.startsWith("/")
        ) {
          return [key, `${origin}${entryValue}`];
        }

        return [key, normalizeStructuredData(entryValue, origin)];
      })
    );
  }

  return value;
}

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo({ description, image, jsonLd, path, title }) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path}`;
    const resolvedImage = image
      ? image.startsWith("http")
        ? image
        : `${origin}${image}`
      : undefined;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    if (resolvedImage) {
      upsertMeta("property", "og:image", resolvedImage);
      upsertMeta("name", "twitter:image", resolvedImage);
    }

    upsertLink("canonical", canonicalUrl);

    let structuredDataTag = document.head.querySelector('script[data-seo-structured="true"]');

    if (jsonLd) {
      if (!structuredDataTag) {
        structuredDataTag = document.createElement("script");
        structuredDataTag.setAttribute("type", "application/ld+json");
        structuredDataTag.setAttribute("data-seo-structured", "true");
        document.head.appendChild(structuredDataTag);
      }

      structuredDataTag.textContent = JSON.stringify(normalizeStructuredData(jsonLd, origin));
    } else if (structuredDataTag) {
      structuredDataTag.remove();
    }
  }, [description, image, jsonLd, path, title]);

  return null;
}
