
"use client";
import {
  PiBookOpenTextDuotone,
  PiWhatsappLogoDuotone,
  PiEnvelopeSimpleDuotone,
} from "react-icons/pi";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK  = "#000000";
const GOLD   = "#dcad6a";
const YELLOW = "#ffd72e";

export default function BottomNavbar({ onContactClick, onCourseClick }) {
  const handleWhatsAppClick = () => {
    // Only NEXT_PUBLIC_* variables are available in the browser.
    // wa.me needs digits only, with country code (e.g. 917078332794).
    const phoneNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
    if (!phoneNumber) {
      console.error("NEXT_PUBLIC_WHATSAPP_NUMBER is not set");
      return;
    }
    const message = "Hello! I would like to know more about Gaura Academy Courses.";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="w-full sm:hidden fixed bottom-0 left-0 right-0 z-50 h-14 flex items-center justify-around"
      style={{
        background: "#0a0700",
        borderTop: `1px solid ${GOLD}33`,
        boxShadow: `0 -4px 24px rgba(0,0,0,0.6)`,
      }}
    >
      {/* ── Courses ─────────────────────────────────────── */}
      <div
        className="flex flex-col items-center gap-[3px] cursor-pointer active:scale-95 transition-transform"
        onClick={onCourseClick}
      >
        <PiBookOpenTextDuotone size={22} style={{ color: YELLOW, filter: "drop-shadow(0 0 5px rgba(255,215,46,0.5))" }} />
        <p style={{
          fontSize: "9px", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: GOLD, fontFamily: "'DM Sans', sans-serif",
        }}>
          Courses
        </p>
      </div>

      {/* ── Center FAB — Contact ─────────────────────────── */}
      <div
        className="relative flex flex-col items-center cursor-pointer"
        style={{ marginBottom: "22px" }}
        onClick={onContactClick}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center active:scale-95 transition-transform"
          style={{
            background: YELLOW,
            boxShadow: `0 4px 20px ${YELLOW}66, 0 0 0 3px #0a0700, 0 0 0 4px ${GOLD}55`,
          }}
        >
          <PiEnvelopeSimpleDuotone size={28} style={{ color: BLACK }} />
        </div>
      </div>

      {/* ── WhatsApp ─────────────────────────────────────── */}
      <div
        className="flex flex-col items-center gap-[3px] cursor-pointer active:scale-95 transition-transform"
        onClick={handleWhatsAppClick}
      >
        <PiWhatsappLogoDuotone size={22} style={{ color: YELLOW, filter: "drop-shadow(0 0 5px rgba(255,215,46,0.5))" }} />
        <p style={{
          fontSize: "9px", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: GOLD, fontFamily: "'DM Sans', sans-serif",
        }}>
          Whatsapp
        </p>
      </div>
    </section>
  );
}


// "use client";
// import { FaBookOpenReader } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";

// export default function BottomNavbar({ onContactClick, onCourseClick }) {
//   const links = [
//     { name: "Courses", href: "#" },
//     { name: "Contact", href: "#" },
//     { name: "Whatsapp", href: "#" },
//   ];
//   const handleWhatsAppClick = () => {
//     const phoneNumber = process.env.WHATSAPP_NUMBER;
//     const message = "Hello! I would like to know more about gaura Courses.";
//     const encodedMessage = encodeURIComponent(message);
//     window.open(
//       `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
//       "_blank",
//     );
//   };
//   return (
//     <section className="w-full sm:hidden fixed bottom-0 left-0 right-0 bg-[#1f2937] z-50 h-13 flex items-center justify-around">
//       <div className="flex gap-8" onClick={onCourseClick}>
//         <div key={links[0].name} className="flex flex-col items-center">
//           <FaBookOpenReader className="text-[#826955] text-lg" size={20} />
//           <p className="text-[10px] font-bold uppercase tracking-tighter text-[#826955]">
//             {links[0].name}
//           </p>
//         </div>
//       </div>

//       <div
//         className="relative flex flex-col items-center mb-6 cursor-pointer"
//         onClick={onContactClick}
//       >
//         <div className="w-14 h-14 rounded-full bg-[#fef3c7] text-[#F7F7EE] flex items-center justify-center shadow-lg ring-4 ring-[#1f2937] active:scale-95 transition-transform">
//           <CiMail size={25} className="text-[#F7F7EE]" />
//         </div>
//         {/* <p className="absolute -bottom-5 text-[10px] font-bold uppercase text-[#826955]">
//             {links[1].name}
//           </p> */}
//       </div>

//       <div className="flex gap-8" onClick={handleWhatsAppClick}>
//         <div key={links[2].name} className="flex flex-col items-center">
//           <FaWhatsapp className="text-[#826955]" size={20} />
//           <p className="text-[10px] font-bold uppercase tracking-tighter text-[#826955]">
//             {links[2].name}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
