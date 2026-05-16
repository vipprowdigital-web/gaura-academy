
"use client";

import { useState } from "react";
import { academyFeatures } from "@/seeds/career-transformation";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK = "#000000";
const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

// Icon map — assign a relevant emoji/symbol per feature keyword
// You can swap these with actual SVG icons or react-icons
const featureIcons = [
  "✦", "◈", "❋", "⟡", "✧", "◉", "⬡", "✵",
  "◎", "⟢", "✴", "◇", "❂", "⬢", "✾", "◈",
];

export default function CareerTransformation() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ background: BLACK, padding: "80px 28px 100px" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ── Background decorative elements ───────────────────── */}
      {/* Central soft glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: `radial-gradient(ellipse, ${YELLOW}12 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      {/* Corner accent lines */}
      <div
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
        style={{
          borderTop: `1px solid ${GOLD}44`,
          borderLeft: `1px solid ${GOLD}44`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          borderTop: `1px solid ${GOLD}44`,
          borderRight: `1px solid ${GOLD}44`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none"
        style={{
          borderBottom: `1px solid ${GOLD}44`,
          borderLeft: `1px solid ${GOLD}44`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          borderBottom: `1px solid ${GOLD}44`,
          borderRight: `1px solid ${GOLD}44`,
        }}
      />

      {/* ── Heading ──────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-3 text-center max-w-[640px] relative z-10">
        {/* Tag */}
        <div className="flex items-center gap-3">
          <div style={{ width: "32px", height: "1px", background: GOLD }} />
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: GOLD,
              textTransform: "uppercase",
            }}
          >
            Empowering Beauty Through Excellence
          </p>
          <div style={{ width: "32px", height: "1px", background: GOLD }} />
        </div>

        {/* Main title */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          Discover the World of{" "}
          <em style={{ color: GOLD, fontStyle: "italic" }}>Gaura Academy</em>
        </h2>

        {/* Yellow underline */}
        <div
          style={{
            width: "64px",
            height: "2px",
            background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
            borderRadius: "2px",
            margin: "4px auto 0",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.85rem",
            color: `${GOLD}bb`,
            lineHeight: 1.8,
            marginTop: "8px",
            letterSpacing: "0.02em",
          }}
        >
          Welcome to Gaura Academy, your gateway to world-class beauty education
          guided by industry-certified trainers and global techniques.
        </p>
      </div>

      {/* ── Feature Cards Grid ────────────────────────────────── */}
      <div
        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10"
        style={{ marginTop: "56px", maxWidth: "1200px" }}
      >
        {academyFeatures.map((feature, i) => (
          <FeatureCard key={i} label={feature} icon={featureIcons[i % featureIcons.length]} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ label, icon, index }) {
  const [hovered, setHovered] = useState(false);

  // Alternate subtle tints for visual rhythm
  const isEven = index % 2 === 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-center text-center gap-3 rounded-2xl overflow-hidden cursor-default"
      style={{
        padding: "28px 16px 24px",
        background: hovered
          ? `linear-gradient(145deg, #1a1200, #120d00)`
          : `linear-gradient(145deg, #0d0900, #0a0700)`,
        border: hovered
          ? `1px solid ${YELLOW}88`
          : `1px solid ${GOLD}30`,
        boxShadow: hovered
          ? `0 0 28px ${YELLOW}22, inset 0 1px 0 ${YELLOW}33`
          : `0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 ${GOLD}18`,
        transform: hovered ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background: hovered
            ? `linear-gradient(to right, transparent, ${YELLOW}cc, transparent)`
            : `linear-gradient(to right, transparent, ${GOLD}44, transparent)`,
          transition: "all 0.4s ease",
        }}
      />

      {/* Icon circle */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: "44px",
          height: "44px",
          background: hovered
            ? `linear-gradient(135deg, ${YELLOW}33, ${GOLD}22)`
            : `linear-gradient(135deg, ${GOLD}18, transparent)`,
          border: `1px solid ${hovered ? YELLOW + "66" : GOLD + "33"}`,
          fontSize: "1.2rem",
          color: hovered ? YELLOW : GOLD,
          transition: "all 0.4s ease",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(0.72rem, 1.5vw, 0.85rem)",
          fontWeight: 600,
          color: hovered ? "#ffffff" : GOLD,
          lineHeight: 1.4,
          letterSpacing: "0.02em",
          transition: "color 0.35s ease",
        }}
      >
        {label}
      </p>

      {/* Bottom accent dot */}
      <div
        style={{
          width: "20px",
          height: "2px",
          borderRadius: "2px",
          background: hovered ? YELLOW : `${GOLD}44`,
          transition: "all 0.4s ease",
        }}
      />
    </div>
  );
}


// import {
//   bgColor1,
//   bgColor2,
//   bgColor3,
//   bgColor4,
//   color3,
//   textColor2,
//   textColor4,
// } from "@/utils/colors.utils";
// import Heading from "./ui/Heading";
// import { academyFeatures } from "@/seeds/career-transformation";

// export default function CareerTransformation() {
//   return (
//     <section
//       className={`w-full ${bgColor1} flex flex-col items-center justify-center p-7 sm:p-20 gap-3`}
//     >
//       <Heading
//         title="Empowering Beauty Through Excellence"
//         subtitle="Discover the World of gaura"
//         titleColor={color3}
//         subtitleColor={color3}
//         description="Welcome to gaura Beauty School, your gateway to world-class beauty education
// guided by industry-certified trainers and global techniques."
//       />
//       <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
//         {academyFeatures.map((t) => {
//           return (
//             <div
//               key={t}
//               className={`w-full ${bgColor3} flex flex-col justify-center items-center text-center gap-1 sm:gap-3 px-2 md:p-5 py-5 sm:py-8 rounded-2xl transition-all duartion-600 hover:scale-105`}
//             >
//               <h6
//                 className={`${textColor2} font-bold leading-tight text-center text-sm sm:text-md`}
//               >
//                 {t}
//               </h6>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
