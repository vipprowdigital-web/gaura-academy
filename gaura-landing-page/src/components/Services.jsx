"use client";

import { services } from "@/seeds/services";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK = "#000000";
const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

export default function Services() {
  return (
    <section
      className="w-full p-10 flex flex-col justify-center items-center"
      style={{ background: BLACK }}
    >
      {/* ── Heading ──────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2 text-center max-w-[640px]">
        <div className="flex items-center gap-3">
          <div style={{ width: "28px", height: "1px", background: GOLD }} />
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.26em",
              color: GOLD,
              textTransform: "uppercase",
            }}
          >
            The Gaura Advantage
          </p>
          <div style={{ width: "28px", height: "1px", background: GOLD }} />
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
          }}
        >
          Why Choose{" "}
          <em style={{ color: GOLD, fontStyle: "italic" }}>Gaura Academy?</em>
        </h2>

        <div
          style={{
            width: "56px",
            height: "2px",
            background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
            borderRadius: "2px",
            margin: "4px auto 0",
          }}
        />

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.83rem",
            color: `${GOLD}bb`,
            lineHeight: 1.8,
            marginTop: "8px",
          }}
        >
          Gaura Academy offers a world-class learning experience with expert trainers,
          luxury classrooms, and hands-on training. Our globally recognized curriculum
          and career-focused approach help students master beauty skills and confidently
          step into the professional industry.
        </p>
      </div>

      {/* ── Service Cards — same layout, new colors ───────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 sm:px-0 lg:px-20 py-5 sm:py-10 w-full">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Montserrat:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div
      className="group flex flex-col items-start gap-1 sm:gap-3 py-5 sm:py-7 px-5 rounded-lg relative transition-all duration-500 hover:-translate-y-5"
      style={{
        background: "#0a0700",
        border: `1px solid ${GOLD}30`,
        boxShadow: `0 2px 16px rgba(0,0,0,0.5), inset 0 1px 0 ${GOLD}18`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${YELLOW}77`;
        e.currentTarget.style.boxShadow = `0 12px 36px ${YELLOW}18, inset 0 1px 0 ${YELLOW}33`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${GOLD}30`;
        e.currentTarget.style.boxShadow = `0 2px 16px rgba(0,0,0,0.5), inset 0 1px 0 ${GOLD}18`;
      }}
    >
      {/* Top shimmer line on hover */}
      <div
        className="absolute top-0 left-0 right-0 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          height: "1px",
          background: `linear-gradient(to right, transparent, ${YELLOW}cc, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="rounded-lg mb-2 flex items-center justify-center"
        style={{ color: YELLOW }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-extrabold text-lg sm:text-2xl"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: GOLD,
        }}
      >
        {service.title}
      </h3>

      {/* Thin accent line under title */}
      <div
        style={{
          width: "32px",
          height: "1px",
          background: `${YELLOW}88`,
          marginBottom: "2px",
        }}
      />

      {/* Description */}
      <p
        className="tracking-tight leading-relaxed text-sm"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: `${GOLD}99`,
        }}
      >
        {service.description}
      </p>
    </div>
  );
}


// import { bgColor3, color2, textColor1 } from "@/utils/colors.utils";
// import Heading from "./ui/Heading";
// import { services } from "@/seeds/services";

// export default function Services() {
//   return (
//     <section className="w-full p-10 flex-col justify-center items-center">
//       <Heading
//         title="The Belleza Advantage"
//         subtitle="Why Choose Belleza?"
//         titleColor={color2}
//         subtitleColor={color2}
//         description="Belleza Beauty School offers a world-class learning experience with expert trainers, luxury classrooms, and hands-on training. Our globally recognized curriculum and career-focused approach help students master beauty skills and confidently step into the professional industry."
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10 sm:px-0 lg:px-20 py-5 sm:py-10">
//         {services.map((service) => (
//           <div
//             key={service.title}
//             className={`flex flex-col items-start gap-1 sm:gap-3 py-5 sm:py-7 px-5 ${bgColor3} rounded-lg shadow-md relative transition-all duration-500 hover:-translate-y-5`}
//           >
//             <div
//               className={`rounded-lg ${bgColor3} mb-2 flex items-center justify-center`}
//             >
//               {service.icon}
//             </div>
//             <h3 className={`font-extrabold text-lg sm:text-2xl ${textColor1}`}>
//               {service.title}
//             </h3>
//             <p className={`${textColor1} tracking-tight leading-tight text-sm`}>
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
