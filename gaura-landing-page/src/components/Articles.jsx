"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PiSparkleDuotone, PiArrowRightDuotone } from "react-icons/pi";
import Carousel from "./ui/Carousel";

const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const formatDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";


function ArticleCard({ article }) {
  const excerpt = article.short_description || stripHtml(article.description);

  return (
    <Link
      href={`/articles/${article._id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(145deg, #100d00, #0a0800)",
        border: `1px solid ${GOLD}33`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1a1400]">
        {article.thumbnail ? (
          <img
            src={article.thumbnail}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-4xl"
            style={{ color: `${GOLD}55` }}
          >
            <PiSparkleDuotone />
          </div>
        )}
        {article.category?.name && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
            style={{ background: YELLOW, color: "#000" }}
          >
            {article.category.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p
          className="text-[0.7rem] uppercase tracking-widest"
          style={{ color: `${GOLD}88` }}
        >
          {formatDate(article.createdAt)}
        </p>
        <h3
          className="line-clamp-2 text-xl font-semibold text-white"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {article.title}
        </h3>
        <p className="line-clamp-3 text-sm" style={{ color: `${GOLD}aa` }}>
          {excerpt}
        </p>
        <span
          className="mt-auto pt-2 text-sm font-semibold"
          style={{ color: GOLD }}
        >
          Read more <PiArrowRightDuotone style={{ display: "inline", verticalAlign: "-2px" }} />
        </span>
      </div>
    </Link>
  );
}


export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/v1/blog?limit=12`, {
          method: "GET",
          cache: "no-store",
        });
        const result = await response.json();
        if (response.ok && Array.isArray(result.data)) {
          setArticles(result.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);


  if (loading || !articles.length) return null;


  return (
    <section
      id="articles"
      className="relative w-full overflow-hidden"
      style={{ background: "#050300", padding: "80px 0 90px" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(to right, transparent, ${YELLOW}66, transparent)`,
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <div style={{ width: "28px", height: "1px", background: GOLD }} />
            <p
              style={{
                fontSize: "0.66rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: GOLD,
                textTransform: "uppercase",
              }}
            >
              Insights
            </p>
            <div style={{ width: "28px", height: "1px", background: GOLD }} />
          </div>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.08,
            }}
          >
            Latest{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>Articles</em>
          </h2>
          <div
            style={{
              width: "52px",
              height: "2px",
              background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
              borderRadius: "2px",
            }}
          />
        </div>


        <Carousel>
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
