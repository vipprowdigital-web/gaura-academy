
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

// ── Brand Colors ──────────────────────────────────────────────
const BLACK  = "#000000";
const GOLD   = "#dcad6a";
const YELLOW = "#ffd72e";

// ── Testimonial Data — replace photos with real ones ─────────
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bridal Makeup Artist",
    photo: "/assets/images/gaura/images.png",
    rating: 5,
    review: "Best academy for learning makeup professionally. Practical training helped me gain confidence. I got placed within 2 months of completing the course!",
  },
  {
    name: "Anjali Verma",
    role: "Freelance MUA",
    photo: "/assets/images/gaura/images.png",
    rating: 5,
    review: "The trainers at Gaura Academy are incredibly skilled and patient. The hands-on approach made all the difference. I now run my own studio!",
  },
  {
    name: "Ritu Agarwal",
    role: "Salon Owner",
    photo: "/assets/images/gaura/images.png",
    rating: 5,
    review: "I was a complete beginner. After joining the advanced course, I started getting bridal bookings within weeks. Truly life-changing experience.",
  },
  {
    name: "Sneha Patel",
    role: "Beauty Educator",
    photo: "/assets/images/gaura/images.png",
    rating: 5,
    review: "World-class curriculum, modern techniques, and amazing mentorship. Gaura Academy turned my passion into a profitable career.",
  },
  {
    name: "Kavya Singh",
    role: "Makeup & Hair Artist",
    photo: "/assets/images/gaura/images.png",
    rating: 5,
    review: "The practical training sessions were phenomenal. Real clients, real experience. I felt job-ready from day one of graduating.",
  },
];

// ── Scroll-reveal hook ────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Testimonials() {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [sectionRef, inView]  = useInView(0.1);

  const goTo = useCallback((i) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + testimonials.length) % testimonials.length), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#050300", padding: "80px 0 90px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@400;500;600;700;800&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .t-animate { animation: fadeSlideUp 0.55s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes revealSection {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .section-reveal { opacity: 0; }
        .section-reveal.visible { animation: revealSection 0.8s ease forwards; }

        .thumb-btn { transition: all 0.3s ease; }
        .thumb-btn:hover { border-color: ${YELLOW} !important; transform: scale(1.08); }
        .thumb-btn.active-thumb { border-color: ${YELLOW} !important; box-shadow: 0 0 16px ${YELLOW}55; }

        /* Big decorative quote mark */
        .big-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12rem;
          line-height: 0.6;
          color: ${YELLOW}14;
          position: absolute;
          top: -10px;
          left: -10px;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      {/* ── Ambient glow ──────────────────────────────────── */}
      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "500px", height: "200px",
        background: `radial-gradient(ellipse, ${YELLOW}0d 0%, transparent 70%)`,
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      {/* ── Top shimmer line ──────────────────────────────── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(to right, transparent, ${YELLOW}66, transparent)`,
      }} />

      <div className={`section-reveal ${inView ? "visible" : ""} w-full max-w-6xl mx-auto px-6 sm:px-10`}>

        {/* ── Heading ───────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <div className="flex items-center gap-3">
            <div style={{ width: "28px", height: "1px", background: GOLD }} />
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.66rem", fontWeight: 700,
              letterSpacing: "0.28em", color: GOLD, textTransform: "uppercase",
            }}>Student Stories</p>
            <div style={{ width: "28px", height: "1px", background: GOLD }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
            fontWeight: 300, color: "#ffffff", lineHeight: 1.08,
          }}>
            What Our{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>Students</em>{" "}Say
          </h2>
          <div style={{
            width: "52px", height: "2px",
            background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
            borderRadius: "2px",
          }} />
        </div>

        {/* ── Main testimonial card ─────────────────────────── */}
        <div
          className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #100d00, #0a0800)",
            border: `1px solid ${GOLD}33`,
            boxShadow: `0 8px 48px rgba(0,0,0,0.6), inset 0 1px 0 ${GOLD}22`,
            padding: "clamp(28px, 5vw, 52px)",
          }}
        >
          {/* Decorative big quote */}
          <span className="big-quote" aria-hidden>"</span>

          {/* Top shimmer */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: `linear-gradient(to right, transparent, ${YELLOW}88, transparent)`,
          }} />

          <div
            key={animKey}
            className="t-animate relative z-10 flex flex-col items-center text-center gap-5"
          >
            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  overflow: "hidden",
                  border: `2px solid ${YELLOW}`,
                  boxShadow: `0 0 0 4px ${GOLD}22, 0 4px 20px ${YELLOW}33`,
                }}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={80} height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Verified badge */}
              <div style={{
                position: "absolute", bottom: "-2px", right: "-2px",
                width: "22px", height: "22px", borderRadius: "50%",
                background: YELLOW, display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "11px",
              }}>✓</div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <IoStarSharp key={i} style={{ color: YELLOW, fontSize: "15px" }} />
              ))}
            </div>

            {/* Review text */}
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
              fontWeight: 400, fontStyle: "italic",
              color: "#ffffff", lineHeight: 1.7,
              maxWidth: "560px",
            }}>
              "{t.review}"
            </p>

            {/* Name + role */}
            <div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.88rem", fontWeight: 700,
                color: GOLD, letterSpacing: "0.05em",
              }}>
                {t.name}
              </p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.7rem", fontWeight: 500,
                color: `${GOLD}66`, letterSpacing: "0.12em",
                textTransform: "uppercase", marginTop: "2px",
              }}>
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* ── Thumbnail strip ───────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
          {testimonials.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={s.name}
              className={`thumb-btn rounded-full overflow-hidden ${i === active ? "active-thumb" : ""}`}
              style={{
                width: "44px", height: "44px",
                border: `2px solid ${i === active ? YELLOW : GOLD + "33"}`,
                flexShrink: 0, background: "transparent", padding: 0,
                cursor: "pointer",
              }}
            >
              <Image
                src={s.photo}
                alt={s.name}
                width={44} height={44}
                className="object-cover w-full h-full"
                style={{ opacity: i === active ? 1 : 0.45 }}
              />
            </button>
          ))}
        </div>

        {/* ── Prev / Next arrows ────────────────────────────── */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev} aria-label="Previous"
            style={{
              width: "38px", height: "38px", borderRadius: "50%",
              border: `1px solid ${GOLD}44`, color: GOLD,
              background: "transparent", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${GOLD}22`;
              e.currentTarget.style.borderColor = GOLD;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = `${GOLD}44`;
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          {testimonials.map((_, i) => (
            <button
              key={i} onClick={() => goTo(i)}
              style={{
                height: "7px",
                width: i === active ? "28px" : "7px",
                borderRadius: "999px",
                background: i === active ? YELLOW : `${GOLD}44`,
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}

          <button
            onClick={next} aria-label="Next"
            style={{
              width: "38px", height: "38px", borderRadius: "50%",
              border: `1px solid ${GOLD}44`, color: GOLD,
              background: "transparent", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${GOLD}22`;
              e.currentTarget.style.borderColor = GOLD;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = `${GOLD}44`;
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>

      {/* Bottom shimmer */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(to right, transparent, ${GOLD}44, transparent)`,
      }} />
    </section>
  );
}


// import {
//   bgColor1,
//   color1,
//   color2,
//   textColor1,
//   textColor2,
//   textColor3,
// } from "@/utils/colors.utils";
// import Heading from "./ui/Heading";
// import { IoStarSharp } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { testimonials } from "@/seeds/testimonials";

// export default function Testimonials() {
//   return (
//     <section className="w-full">
//       <Heading
//         title="Testimonials"
//         subtitle="Stories of Unforgettable Experiences"
//         titleColor={color2}
//         subtitleColor={color2}
//         description="Our Students Consistently Praise."
//       />
//       <div
//         className={`overflow-hidden w-full py-10 ${!(testimonials.length > 5) && "px-10"}`}
//       >
//         <div
//           className={`flex ${testimonials.length > 5 ? "animate-conveyor" : "w-full justify-center items-center"} gap-6 w-max`}
//         >
//           {[...testimonials, ...testimonials].map((testimonial, i) => (
//             <div
//               key={i}
//               className={`shrink-0 w-80 p-5 md:p-7 bg-white rounded-2xl shadow-md border border-[${color1}] flex flex-col gap-7`}
//             >
//               <div className="flex items-start gap-3">
//                 <div
//                   className={`w-13 h-13 ${bgColor1} rounded-full flex items-center justify-center`}
//                 >
//                   <FaUser size={20} className={`${textColor3}`} />
//                 </div>
//                 <h3
//                   className={`text-lg font-bold ${textColor1} uppercase tracking-tighter`}
//                 >
//                   {testimonial.name}
//                 </h3>
//               </div>
//               <div>
//                 <div className="flex gap-1">
//                   {[...Array(testimonial.rating)].map((_, j) => (
//                     <IoStarSharp key={j} className="text-yellow-500" />
//                   ))}
//                 </div>
//                 <p className={`pt-2 text-sm ${textColor2}`}>
//                   {testimonial.review}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
