"use client";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK = "#000000";
const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

export default function AdminProcessTimeline() {
  const process = [
    { name: "Choose Course", desc: "Select the program that fits your career goals." },
    { name: "Add to Cart", desc: "Review course details & kit benefits." },
    { name: "Secure Payment", desc: "Safe & instant online transaction." },
    { name: "Welcome Call", desc: "Get personal counseling and guidance." },
    { name: "Batch Allocation", desc: "Get your schedule & start training!" },
  ];

  return (
    <section
      className="w-full flex flex-col items-center justify-center p-10 my-10"
      style={{ background: "#0a0700" }}
    >
      {/* ── Heading — same position, new colors ──────────────── */}
      <div className="flex flex-col items-center gap-2 text-center max-w-[580px]">
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
            Easy 5-step Process
          </p>
          <div style={{ width: "28px", height: "1px", background: GOLD }} />
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 300,
            color: "#dcad6a",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
          }}
        >
          Admission{" "}
          <em style={{ color: GOLD, fontStyle: "italic" }}>Process Timeline</em>
        </h2>

        <div
          style={{
            width: "48px",
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
            marginTop: "6px",
          }}
        >
          Start your professional journey with absolute clarity.
        </p>
      </div>

      {/* ── Timeline — exact same layout ─────────────────────── */}
      <div className="relative w-full max-w-6xl mt-10">
        {/* Connector line */}
        <div
          className="absolute 
            left-6.5 top-0 bottom-0 w-0.5
            md:left-0 md:top-7 md:w-full md:h-px
            z-0"
          style={{ background: `${GOLD}44` }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
          {process.map((p, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col items-start md:items-center flex-1"
            >
              {/* Step circle */}
              <div className="shrink-0">
                <div
                  className="rounded-full w-14 h-14 flex justify-center items-center text-lg font-bold shadow-lg"
                  style={{
                    background: YELLOW,
                    color: BLACK,
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: `0 0 20px ${YELLOW}44`,
                  }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Text */}
              <div className="ml-6 md:ml-0 md:mt-6 flex flex-col items-start md:items-center text-left md:text-center">
                <h4
                  className="font-bold text-lg leading-tight tracking-tight"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: GOLD,
                  }}
                >
                  {p.name}
                </h4>
                <p
                  className="text-sm mt-1 max-w-50 tracking-tight"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: `${GOLD}88`,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Montserrat:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
}


// import {
//   bgColor1,
//   bgColor3,
//   bgColor4,
//   color1,
//   textColor2,
//   textColor4,
// } from "@/utils/colors.utils";
// import Heading from "./ui/Heading";

// export default function AdminProcessTimeline() {
//   const process = [
//     {
//       name: "Choose Course",
//       desc: "Select the program that fits your career goals.",
//     },
//     { name: "Add to Cart", desc: "Review course details & kit benefits." },
//     { name: "Secure Payment", desc: "Safe & instant online transaction." },
//     { name: "Welcome Call", desc: "Get personal counseling and guidance." },
//     { name: "Batch Allocation", desc: "Get your schedule & start training!" },
//   ];

//   return (
//     <section
//       className={`w-full flex flex-col items-center justify-center p-10 my-10 ${bgColor3}`}
//     >
//       <Heading
//         title="Easy 5-step Process"
//         subtitle="Admission Process Timeline"
//         titleColor={color1}
//         subtitleColor={color1}
//         description="Start your professional journey with absolute clarity."
//       />

//       <div className="relative w-full max-w-6xl mt-10">
//         <div
//           className={`absolute 
//           left-6.5 top-0 bottom-0 w-0.5 ${bgColor4} 
//            md:left-0 md:top-7 md:w-full md:h-px 
//          z-0`}
//         />

//         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
//           {process.map((p, index) => (
//             <div
//               key={index}
//               className="flex flex-row md:flex-col items-start md:items-center flex-1"
//             >
//               <div className="shrink-0">
//                 <div
//                   className={`rounded-full w-14 h-14 ${bgColor1} flex justify-center items-center ${textColor4} text-lg font-bold shadow-lg  ring-white`}
//                 >
//                   {index + 1}
//                 </div>
//               </div>

//               <div className="ml-6 md:ml-0 md:mt-6 flex flex-col items-start md:items-center text-left md:text-center">
//                 <h4
//                   className={`font-bold text-lg leading-tight tracking-tight ${textColor2}`}
//                 >
//                   {p.name}
//                 </h4>
//                 <p
//                   className={`text-sm mt-1 max-w-50 ${textColor2} tracking-tight`}
//                 >
//                   {p.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
