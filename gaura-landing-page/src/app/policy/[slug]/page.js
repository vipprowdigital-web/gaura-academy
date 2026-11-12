"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PiArrowLeftDuotone } from "react-icons/pi";
import { useParams } from "next/navigation";
import { applyPlaceholders, fetchAppConfig } from "@/utils/placeholders";
import Footer from "@/components/Footer";

const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

export default function PolicyPage() {
  const { slug } = useParams();
  const [policy, setPolicy] = useState(null);
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!slug) return;
    const load = async () => {
      try {
        const [res, appConfig] = await Promise.all([
          fetch(`${baseUrl}/api/v1/policy/public/${slug}`, {
            cache: "no-store",
          }),
          fetchAppConfig(),
        ]);
        const result = await res.json();
        if (res.ok && result.data) {
          setConfig(appConfig);
          setPolicy(result.data);
          setStatus("ready");
        } else {
          setStatus("notfound");
        }
      } catch {
        setStatus("notfound");
      }
    };
    load();
  }, [slug]);

  return (
    <>
    <main className="min-h-screen px-6 py-16 sm:px-10" style={{ background: "#050300" }}>
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm font-semibold" style={{ color: GOLD }}>
          <PiArrowLeftDuotone style={{ display: "inline", verticalAlign: "-2px" }} /> Back to home
        </Link>

        {status === "loading" && (
          <p className="mt-10" style={{ color: GOLD }}>Loading...</p>
        )}
        {status === "notfound" && (
          <p className="mt-10 text-white">Policy not found.</p>
        )}

        {status === "ready" && policy && (
          <article className="mt-8">
            <h1
              className="text-4xl text-white sm:text-5xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {applyPlaceholders(policy.title, config)}
            </h1>
            {(policy.updatedAt || policy.createdAt) && (
              <p
                className="mt-3 text-sm"
                style={{ color: `${GOLD}99` }}
              >
                Last effective date:{" "}
                <span style={{ color: GOLD }}>
                  {new Date(
                    policy.updatedAt || policy.createdAt
                  ).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>
            )}
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
              dangerouslySetInnerHTML={{ __html: applyPlaceholders(policy.description || "", config),
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
