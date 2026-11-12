"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PiArrowLeftDuotone } from "react-icons/pi";
import { applyPlaceholders, fetchAppConfig } from "@/utils/placeholders";
import Footer from "@/components/Footer";

const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

export default function ArticleView({ id }) {
  const [article, setArticle] = useState(null);
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        const [res, appConfig] = await Promise.all([
          fetch(`${baseUrl}/api/v1/blog/${id}`, { cache: "no-store" }),
          fetchAppConfig(),
        ]);
        const result = await res.json();
        if (res.ok && result.data && result.data.isActive !== false) {
          setConfig(appConfig);
          setArticle(result.data);
          setStatus("ready");
        } else {
          setStatus("notfound");
        }
      } catch {
        setStatus("notfound");
      }
    };
    load();
  }, [id]);

  return (
    <>
      <main
        className="min-h-screen px-6 py-16 sm:px-10"
        style={{ background: "#050300" }}
      >
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/#articles"
            className="text-sm font-semibold"
            style={{ color: GOLD }}
          >
            <PiArrowLeftDuotone style={{ display: "inline", verticalAlign: "-2px" }} /> Back to home
          </Link>

          {status === "loading" && (
            <p className="mt-10" style={{ color: GOLD }}>
              Loading...
            </p>
          )}
          {status === "notfound" && (
            <p className="mt-10 text-white">Article not found.</p>
          )}

          {status === "ready" && article && (
            <article className="mt-8">
              {article.thumbnail && (
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="mb-8 w-full rounded-2xl object-cover"
                  style={{ border: `1px solid ${GOLD}33` }}
                />
              )}
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: `${GOLD}88` }}
              >
                {article.category?.name ? `${article.category.name} · ` : ""}
                {new Date(article.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h1
                className="mt-3 text-4xl text-white sm:text-5xl"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {applyPlaceholders(article.title, config)}
              </h1>
              <div
                className="mt-4"
                style={{
                  width: "52px",
                  height: "2px",
                  background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
                }}
              />
              <div
                className="rich-content mt-8"
                dangerouslySetInnerHTML={{
                  __html: applyPlaceholders(article.description || "", config),
                }}
              />
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
