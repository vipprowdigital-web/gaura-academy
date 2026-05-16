"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// ── Brand Colors ──────────────────────────────────────────────
const BLACK = "#000000";
const GOLD  = "#dcad6a";
const YELLOW = "#ffd72e";

// ── Slides — replace src with your actual images ──────────────
const slides = [
  {
    src: "/assets/images/gaura/makeup_image_1080x1350.png",
    heading1: "GAURA MAKEUP ACADEMY",
    heading2: "IS ALL ABOUT YOU",
    sub: "Enhancing your natural beauty with Gaura Academy. Discover the perfect blend of elegance and individuality with our expertise.",
  },
  {
    src: "/assets/images/gaura/ChatGPT Image May 6, 2026, 04_52_24 PM.png",
    heading1: "GAURA MAKEUP ACADEMY",
    heading2: "PICTURE-PERFECT RADIANCE",
    sub: "Gaura Academy's signature makeup artistry — leaving you with a flawless and radiant look that lasts.",
  },
  {
    src: "/assets/images/gaura/third.png",
    heading1: "GAURA MAKEUP ACADEMY",
    heading2: "YOUR STORY, YOUR GLOW",
    sub: "From bridal to editorial — our certified artists craft looks that celebrate who you truly are.",
  },
];

// ── Animation variants ────────────────────────────────────────
const imgVariants = {
  enter: (dir) => ({ scale: 1.06, opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: {
    scale: 1, opacity: 1, x: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: (dir) => ({
    scale: 0.97, opacity: 0, x: dir < 0 ? 40 : -40,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  }),
};

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const textItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export default function HeroSection({ onContactClick, onCourseClick }) {
  const [[current, dir], setCurrent] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() =>
    setCurrent(([p]) => [(p + 1) % slides.length, 1]), []);
  const prev = useCallback(() =>
    setCurrent(([p]) => [(p - 1 + slides.length) % slides.length, -1]), []);
  const goTo = useCallback((i) =>
    setCurrent(([p]) => [i, i > p ? 1 : -1]), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "580px", background: BLACK }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@500;600;700;800&display=swap');
        .hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #ffffff;
          font-size: clamp(2rem, 10vw, 6rem);
        }
        @media (min-width: 1024px) {
          .hero-h1 { font-size: clamp(2rem, 4vw, 3.5rem); }
        }
        .hero-h2 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: ${GOLD};
          font-size: clamp(0.85rem, 4vw, 1.9rem);
          line-height: 1.2;
        }
        @media (min-width: 1024px) {
          .hero-h2 { font-size: clamp(1rem, 2.2vw, 1.9rem); }
        }
        .hero-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.72rem, 2.5vw, 0.9rem);
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          max-width: 440px;
        }
        @media (min-width: 1024px) {
          .hero-sub { font-size: clamp(0.75rem, 1vw, 0.9rem); }
        }
      `}</style>

      {/* ── BACKGROUND IMAGE ─────────────────────────────── */}
      <AnimatePresence custom={dir} mode="sync">
        <motion.div
          key={`img-${current}`}
          custom={dir}
          variants={imgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slide.src}
            alt={slide.heading2}
            fill
            className="object-contain object-right"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── GRADIENTS ────────────────────────────────────── */}
      {/* Mobile: strong bottom-to-top dark scrim for text */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      {/* Desktop: left-side scrim */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.05) 100%)",
        }}
      />
      {/* Bottom fade always */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "120px",
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      />

      {/* ── LOGO ─────────────────────────────────────────── */}
      <div className="absolute top-5 left-5 sm:top-7 sm:left-8 z-30">
        <Image
          src="/assets/images/gaura/GAURA.png"
          width={80}
          height={80}
          alt="Gaura Academy"
          priority
          className="w-14 h-14 sm:w-20 sm:h-20"
        />
      </div>

      {/* ── TEXT — Mobile: bottom-anchored | Desktop: center-left ─ */}
      <div
        className="absolute z-20 w-full px-6 sm:px-10 lg:px-16 xl:px-24
                   bottom-24 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2
                   flex flex-col items-start"
        style={{ maxWidth: "680px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-3 sm:gap-4"
          >
            {/* Big word */}
            <motion.h1 className="hero-h1" variants={textItem}>
              {slide.heading1}
            </motion.h1>

            {/* Bold sub-line */}
            <motion.h2 className="hero-h2" variants={textItem}>
              {slide.heading2}
            </motion.h2>

            {/* Yellow rule */}
            <motion.div
              variants={textItem}
              style={{ width: "48px", height: "2px",
                background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
                borderRadius: "2px" }}
            />

            {/* Body */}
            <motion.p className="hero-sub" variants={textItem}>
              {slide.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={textItem}
              className="flex flex-wrap gap-3 mt-1"
            >
              <button
                onClick={onCourseClick}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: YELLOW, color: BLACK,
                  fontWeight: 700, fontSize: "0.72rem",
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  padding: "12px 24px", borderRadius: "999px", border: "none",
                  cursor: "pointer", transition: "background 0.25s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = GOLD}
                onMouseLeave={(e) => e.currentTarget.style.background = YELLOW}
              >
                Join Our Academy
              </button>
              <button
                onClick={onContactClick}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: "transparent", color: GOLD,
                  fontWeight: 700, fontSize: "0.72rem",
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  padding: "12px 24px", borderRadius: "999px",
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
                Explore Courses
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CONTROLS — bottom left, always visible ────────── */}
      <div
        className="absolute z-30 flex items-center gap-3"
        style={{ bottom: "28px", left: "24px" }}
      >
        {/* Prev */}
        <button
          onClick={prev} aria-label="Previous"
          className="flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "34px", height: "34px",
            border: `1px solid ${GOLD}55`, color: GOLD, background: "transparent",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = `${GOLD}22`}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dots */}
        {slides.map((_, i) => (
          <button
            key={i} onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              height: "7px",
              width: i === current ? "28px" : "7px",
              borderRadius: "999px",
              background: i === current ? YELLOW : `${GOLD}44`,
              border: "none", cursor: "pointer",
              transition: "all 0.35s ease", padding: 0,
            }}
          />
        ))}

        {/* Next */}
        <button
          onClick={next} aria-label="Next"
          className="flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "34px", height: "34px",
            border: `1px solid ${GOLD}55`, color: GOLD, background: "transparent",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = `${GOLD}22`}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── PROGRESS BAR ─────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{ height: "2px", background: `${GOLD}18` }}
      >
        <motion.div
          key={`bar-${current}`}
          style={{ height: "100%", background: YELLOW }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>
    </section>
  );
}




// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function HeroSection({ onContactClick, onCourseClick }) {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };
//   return (
//     <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
//       {/* Left Side */}
//       <div className="absolute top-5 left-5 sm:left-10">
//         <Image
//           src="/assets/images/logos/gaura_logo.svg"
//           width={100}
//           height={100}
//           alt="gaura Logo"
//           priority
//           loading="eager"
//           className="w-20 h-20 sm:w-30 sm:h-30"
//         />
//       </div>
//       <motion.div
//         className="flex p-5 sm:p-10 items-start justify-center flex-col gap-5 h-screen w-full sm:rounded-br-[40%] bg-[#fef3c7]"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.p
//           className="text-left ml-2 px-3 border-l-4 border-[#1f2937] text-[#1f2937] text-sm font-semibold"
//           variants={itemVariants}
//         >
//           gaura Beauty School
//         </motion.p>
//         <motion.h1
//           className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-[#1f2937] "
//           variants={itemVariants}
//         >
//           Start Your Career in the Beauty Industry
//         </motion.h1>
//         <motion.p
//           className="text-[#1f2937] text-sm leading-tight"
//           variants={itemVariants}
//         >
//           Become a certified{" "}
//           <span className="font-bold">
//             Makeup Artist, Hair Expert, or Beauty Professional
//           </span>{" "}
//           with professional training and practical learning.
//         </motion.p>
//         <motion.div className="flex gap-4" variants={itemVariants}>
//           <button
//             className="bg-[#1f2937] text-[#fef3c7] font-bold py-2 px-4 rounded-full hover:bg-[#1f2937]/90 text-sm"
//             onClick={onCourseClick}
//           >
//             Explore Courses
//           </button>
//           <button
//             className="bg-transparent text-[#1f2937] font-bold py-2 px-4 rounded-full border border-[#1f2937] hover:bg-[#1f2937]/10 text-sm"
//             onClick={onContactClick}
//           >
//             Learn More
//           </button>
//         </motion.div>
//       </motion.div>
//       {/* Right Side */}
//       <div className="w-full h-screen"></div>
//     </div>
//   );
// }
