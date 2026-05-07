"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK  = "#000000";
const GOLD   = "#dcad6a";
const YELLOW = "#ffd72e";

// Stats shown in the about section
const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "8+",   label: "Years of Excellence" },
  { number: "40+",  label: "Expert Instructors" },
  { number: "96%",  label: "Placement Rate" },
];

// Key pillars / why us points
const pillars = [
  { icon: "◈", text: "Hands-on practical training from day one" },
  { icon: "◈", text: "Modern techniques & global curriculum" },
  { icon: "◈", text: "Real-world skills for confident artists" },
  { icon: "◈", text: "Career-focused mentorship & placement support" },
];

// ── Simple scroll-reveal hook ─────────────────────────────────
function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Animated counter ─────────────────────────────────────────
function Counter({ target, inView }) {
  const [count, setCount] = useState(0);
  const numeric = parseInt(target.replace(/\D/g, ""));
  const suffix  = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(numeric / 50);
    const t = setInterval(() => {
      start += step;
      if (start >= numeric) { setCount(numeric); clearInterval(t); }
      else setCount(start);
    }, 28);
    return () => clearInterval(t);
  }, [inView, numeric]);

  return <>{count}{suffix}</>;
}

export default function AboutAcademy({ onCourseClick }) {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [statsRef,   statsInView]   = useInView(0.3);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: BLACK }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@400;500;600;700;800&display=swap');

        .about-reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .about-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about-reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .about-reveal-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .about-reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .about-reveal-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .pillar-row:hover .pillar-icon { color: ${YELLOW}; transform: rotate(45deg) scale(1.2); }
        .pillar-row:hover .pillar-text { color: #ffffff; }
        .pillar-icon { transition: color 0.3s, transform 0.35s; }
        .pillar-text { transition: color 0.3s; }
        .stat-card:hover { border-color: ${YELLOW}88 !important; box-shadow: 0 0 28px ${YELLOW}18 !important; }
        .stat-card:hover .stat-num { color: ${YELLOW} !important; }
      `}</style>

      {/* ── Decorative top shimmer ──────────────────────────── */}
      <div style={{
        height: "1px",
        background: `linear-gradient(to right, transparent, ${YELLOW}66, transparent)`,
      }} />

      {/* ════════════════════════════════════════════════════════
          MAIN CONTENT — 2 col on desktop, stacked on mobile
      ════════════════════════════════════════════════════════ */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">

        {/* ── LEFT — Image panel ───────────────────────────── */}
        <div
          className={`relative w-full about-reveal-left ${sectionInView ? "visible" : ""}`}
          style={{
            minHeight: "380px",
            transitionDelay: "0.05s",
          }}
        >
          {/* Main image */}
          <Image
            src="/assets/images/gaura/93.png"
            alt="Gaura Makeup Academy"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Dark overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)",
          }} />

          {/* Floating badge — years of excellence */}
          {/* <div
            className="absolute"
            style={{
              bottom: "32px", right: "28px",
              background: YELLOW,
              color: BLACK,
              borderRadius: "16px",
              padding: "18px 24px",
              textAlign: "center",
              boxShadow: `0 8px 32px ${YELLOW}44`,
            }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.8rem", fontWeight: 300,
              lineHeight: 1, color: BLACK,
            }}>8+</p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.65rem", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: BLACK, marginTop: "4px",
            }}>Years of<br />Excellence</p>
          </div> */}

          {/* Corner bracket decoration */}
          <div style={{
            position: "absolute", top: "20px", left: "20px",
            width: "40px", height: "40px",
            borderTop: `2px solid ${YELLOW}`,
            borderLeft: `2px solid ${YELLOW}`,
          }} />
        </div>

        {/* ── RIGHT — Text content ─────────────────────────── */}
        <div
          className={`flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-20 about-reveal-right ${sectionInView ? "visible" : ""}`}
          style={{
            transitionDelay: "0.15s",
            background: "linear-gradient(135deg, #0a0700 0%, #050300 100%)",
          }}
        >
          {/* Tag */}
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "32px", height: "1px", background: GOLD }} />
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.66rem", fontWeight: 700,
              letterSpacing: "0.28em", color: GOLD,
              textTransform: "uppercase",
            }}>
              Trust &amp; Excellence
            </p>
          </div>

          {/* Main heading */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            fontWeight: 300, lineHeight: 1.1,
            color: "#ffffff", marginBottom: "6px",
          }}>
            About{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>
              Gaura Makeup
            </em>
            <br />Academy
          </h2>

          {/* Gold rule */}
          <div style={{
            width: "52px", height: "2px",
            background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
            borderRadius: "2px", margin: "14px 0 20px",
          }} />

          {/* Body text */}
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
            color: `${GOLD}bb`, lineHeight: 1.85,
            marginBottom: "28px",
          }}>
            Gaura Makeup Academy is a professional beauty training institute
            dedicated to providing high-quality makeup education. We focus on
            hands-on training, modern techniques, and real-world skills that
            help students become confident makeup artists.
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            fontWeight: 400, fontStyle: "italic",
            color: GOLD, lineHeight: 1.5,
            marginBottom: "28px",
            borderLeft: `3px solid ${YELLOW}`,
            paddingLeft: "16px",
          }}>
            "Not just teaching makeup — but building successful careers."
          </p>

          {/* Pillars */}
          <div className="flex flex-col gap-3 mb-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="pillar-row flex items-center gap-3 cursor-default"
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: `1px solid ${GOLD}18`,
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${GOLD}44`;
                  e.currentTarget.style.background = `${YELLOW}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${GOLD}18`;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span className="pillar-icon" style={{ color: GOLD, fontSize: "0.9rem", flexShrink: 0 }}>
                  {p.icon}
                </span>
                <span
                  className="pillar-text"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.8rem", fontWeight: 600,
                    color: `${GOLD}cc`, letterSpacing: "0.02em",
                  }}
                >
                  {p.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onCourseClick}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: YELLOW, color: BLACK,
                fontWeight: 700, fontSize: "0.72rem",
                letterSpacing: "0.16em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: "999px",
                border: "none", cursor: "pointer",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = GOLD}
              onMouseLeave={(e) => e.currentTarget.style.background = YELLOW}
            >
              Explore Courses
            </button>
            <button
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: "transparent", color: GOLD,
                fontWeight: 700, fontSize: "0.72rem",
                letterSpacing: "0.16em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: "999px",
                border: `2px solid ${GOLD}`, cursor: "pointer",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = GOLD;
                e.currentTarget.style.color = BLACK;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = GOLD;
              }}
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          STATS ROW
      ════════════════════════════════════════════════════════ */}
      <div
        ref={statsRef}
        className="w-full grid grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: `1px solid ${GOLD}22` }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`stat-card about-reveal ${statsInView ? "visible" : ""}`}
            style={{
              padding: "36px 20px",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? `1px solid ${GOLD}18` : "none",
              borderBottom: i < 2 ? `1px solid ${GOLD}18` : "none",
              transition: "border-color 0.35s, box-shadow 0.35s",
              transitionDelay: `${i * 0.1}s`,
              cursor: "default",
            }}
          >
            <p
              className="stat-num"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                fontWeight: 300, color: GOLD,
                lineHeight: 1, letterSpacing: "-0.02em",
                transition: "color 0.35s",
              }}
            >
              <Counter target={stat.number} inView={statsInView} />
            </p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: `${GOLD}66`, marginTop: "8px",
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative bottom shimmer */}
      <div style={{
        height: "1px",
        background: `linear-gradient(to right, transparent, ${YELLOW}44, transparent)`,
      }} />
    </section>
  );
}
