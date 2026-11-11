import ArticleView from "@/components/ArticleView";
import { applyPlaceholders, fetchAppConfig } from "@/utils/placeholders";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

async function getArticle(id) {
  try {
    const res = await fetch(`${baseUrl}/api/v1/blog/${id}`, {
      cache: "no-store",
    });
    const result = await res.json();
    return res.ok && result.data && result.data.isActive !== false
      ? result.data
      : null;
  } catch {
    return null;
  }
}

// SEO title / description / keywords come from the console's SEO fields,
// falling back to the article's own title and description.
export async function generateMetadata({ params }) {
  const { id } = await params;
  const [article, config] = await Promise.all([
    getArticle(id),
    fetchAppConfig(),
  ]);

  if (!article) return { title: "Article not found" };

  const fill = (text) => applyPlaceholders(text || "", config);
  const seo = article.seo || {};

  const title = fill(seo.metaTitle?.trim() || article.title);
  const description = fill(
    seo.metaDescription?.trim() ||
      article.short_description ||
      stripHtml(article.description).slice(0, 160)
  );
  // The console may store keywords as a JSON-encoded string inside the array
  const parseKeyword = (k) => {
    try {
      const parsed = JSON.parse(k);
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch {}
    return String(k).split(",");
  };
  const keywords = [].concat(seo.metaKeywords || [])
    .flatMap(parseKeyword)
    .map((k) => k.trim())
    .filter(Boolean);

  return {
    title,
    description,
    ...(keywords.length ? { keywords } : {}),
    openGraph: {
      title,
      description,
      type: "article",
      ...(article.thumbnail ? { images: [article.thumbnail] } : {}),
    },
    twitter: {
      card: article.thumbnail ? "summary_large_image" : "summary",
      title,
      description,
      ...(article.thumbnail ? { images: [article.thumbnail] } : {}),
    },
  };
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  return <ArticleView id={id} />;
}
