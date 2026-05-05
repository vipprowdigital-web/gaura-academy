"use client";

import { useState } from "react";
import Heading from "./ui/Heading";
import { courses } from "@/seeds/courses";
import { IoStarSharp } from "react-icons/io5";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK = "#000000";
const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

export default function Courses({ onContactClick }) {
  const [active, setActive] = useState("offline");
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const typeMatch = course.type === active;
    const categoryMatch =
      activeSubCategory === "All" ||
      course.category === activeSubCategory.toLowerCase();
    return typeMatch && categoryMatch;
  });

  return (
    <section className="w-full" style={{ background: BLACK }}>
      {/* ── Online / Offline Toggle ─────────────────────────── */}
      <div
        className="grid grid-cols-2 mx-auto h-12 font-semibold text-xs sm:text-sm"
        style={{ borderBottom: `1px solid ${GOLD}` }}
      >
        <button
          onClick={() => setActive("offline")}
          className="w-full transition-all duration-300 tracking-widest uppercase"
          style={{
            background: active === "offline" ? YELLOW : "transparent",
            color: active === "offline" ? BLACK : GOLD,
            fontWeight: 700,
            letterSpacing: "0.12em",
            fontSize: "0.72rem",
          }}
        >
          Offline Courses
        </button>
        <button
          onClick={() => setActive("online")}
          className="w-full transition-all duration-300 tracking-widest uppercase"
          style={{
            background: active === "online" ? YELLOW : "transparent",
            color: active === "online" ? BLACK : GOLD,
            fontWeight: 700,
            letterSpacing: "0.12em",
            fontSize: "0.72rem",
            borderLeft: `1px solid ${GOLD}`,
          }}
        >
          Online Courses
        </button>
      </div>

      {/* ── Category Filter ──────────────────────────────────── */}
      <CourseCategories category={activeSubCategory} fn={setActiveSubCategory} />

      <div className="my-10" />

      {/* ── Section Heading ──────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        {/* Small tag line */}
        <p
          className="uppercase tracking-[0.25em] text-xs font-semibold flex items-center gap-2"
          style={{ color: GOLD }}
        >
          <span style={{ display: "inline-block", width: "28px", height: "1px", background: GOLD, verticalAlign: "middle" }} />
          Explore &amp; Enroll
          <span style={{ display: "inline-block", width: "28px", height: "1px", background: GOLD, verticalAlign: "middle" }} />
        </p>

        {/* Main title */}
        <h2
          className="font-bold leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            color: GOLD,
            letterSpacing: "-0.01em",
          }}
        >
         Our Professional Courses 
        </h2>

        {/* Description */}
        <p
          className="text-sm max-w-[560px] leading-relaxed mt-1"
          style={{ color: `${GOLD}aa`, fontFamily: "'Montserrat', sans-serif" }}
        >
          Our globally recognized curriculum and career-focused approach help students master beauty skills and confidently step into the professional industry.
        </p>
      </div>

      {/* ── Cards Grid ──────────────────────────────────────── */}
      <div className="px-7 lg:px-10 xl:px-30 py-10 w-full">
        {active === "offline" ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onContactClick={onContactClick}
              />
            ))}
          </div>
        ) : (
          <div className="w-full p-10 sm:p-20 flex justify-center items-center">
            <h2
              className="text-2xl sm:text-4xl tracking-tighter font-bold text-center"
              style={{ color: GOLD }}
            >
              Coming Soon!
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Course Card ───────────────────────────────────────────────
function CourseCard({ course, onContactClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col rounded-2xl w-full sm:w-3/4 md:w-full overflow-hidden"
      style={{
        background: hovered ? "#111111" : "#0a0a0a",
        border: `1px solid ${hovered ? YELLOW : GOLD + "55"}`,
        boxShadow: hovered
          ? `0 8px 32px rgba(255,215,46,0.18), 0 0 0 1px ${YELLOW}33`
          : "0 2px 16px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Card image placeholder */}
      <div
        className="h-48 w-full relative flex items-end p-4"
        style={{
          background: `linear-gradient(135deg, #1a1200 0%, #2d1f00 60%, #000000 100%)`,
          borderBottom: `1px solid ${GOLD}33`,
        }}
      >
        {/* Bright gold radial glow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at 60% 40%, ${YELLOW}35 0%, ${GOLD}22 40%, transparent 70%)`,
          }}
        />
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: `linear-gradient(to right, transparent, ${YELLOW}99, transparent)` }}
        />
        {/* Category badge */}
        <span
          className="relative z-10 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full"
          style={{
            background: `${YELLOW}22`,
            color: YELLOW,
            border: `1px solid ${YELLOW}55`,
          }}
        >
          {course.category}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5">
        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[2px]">
            {[...Array(4)].map((_, j) => (
              <IoStarSharp key={j} style={{ color: YELLOW, fontSize: "13px" }} />
            ))}
            <IoStarSharp style={{ color: GOLD + "66", fontSize: "13px" }} />
          </div>
          <span
            className="text-xs font-semibold"
            style={{ color: GOLD }}
          >
            (4/5)
          </span>
        </div>

        {/* Course name */}
        <h2
          className="font-bold tracking-tight text-lg leading-tight"
          style={{ color: hovered ? YELLOW : "#ffffff" , transition: "color 0.3s" }}
        >
          {course.name}
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: GOLD + "cc" }}>
          {course.desc}
        </p>

        {/* Thin gold divider */}
        <div style={{ height: "1px", background: `${GOLD}33`, margin: "2px 0" }} />

        {/* Summary bullets */}
        <ul className="pl-1 flex flex-col gap-1">
          {course.summary.map((sum) => (
            <li
              key={sum}
              className="text-xs font-semibold flex items-start gap-2"
              style={{ color: GOLD }}
            >
              <span style={{ color: YELLOW, marginTop: "2px", flexShrink: 0 }}>▸</span>
              {sum}
            </li>
          ))}
        </ul>

        {/* Enroll button */}
        <button
          onClick={onContactClick}
          className="mt-2 w-full py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            background: YELLOW,
            color: BLACK,
            letterSpacing: "0.12em",
            fontSize: "0.75rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = GOLD;
            e.currentTarget.style.color = BLACK;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = YELLOW;
            e.currentTarget.style.color = BLACK;
          }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

// ── Category Filter Bar ───────────────────────────────────────
const CourseCategories = ({ category, fn }) => {
  const courseCategories = ["All", "Combo", "Makeup", "Nails", "Hair", "Beauty"];
  const activeCategory = category ?? "All";

  return (
    <section
      className="w-full h-12 overflow-x-auto no-scrollbar flex justify-start min-[430px]:justify-center items-center px-4 gap-1 sm:gap-2"
      style={{ borderBottom: `1px solid ${GOLD}44` }}
    >
      {courseCategories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => fn(cat)}
            className="px-4 py-1.5 rounded-full font-semibold text-xs whitespace-nowrap transition-all duration-300"
            style={{
              background: isActive ? YELLOW : "transparent",
              color: isActive ? BLACK : GOLD,
              border: `1px solid ${isActive ? YELLOW : GOLD + "55"}`,
              fontWeight: isActive ? 700 : 500,
              letterSpacing: "0.05em",
            }}
          >
            {cat}
          </button>
        );
      })}
    </section>
  );
};




// "use client";

// import { useEffect, useState } from "react";
// import Heading from "./ui/Heading";
// import {
//   bgColor1,
//   color1,
//   color2,
//   textColor1,
//   textColor2,
//   textColor3,
//   textColor4,
// } from "@/utils/colors.utils";
// import { courses } from "@/seeds/courses";
// import { IoStarSharp } from "react-icons/io5";

// export default function Courses({ onContactClick }) {
//   const [active, setActive] = useState("offline");
//   const [activeSubCategory, setActiveSubCategory] = useState("All");

//   const filteredCourses = courses.filter((course) => {
//     const typeMatch = course.type === active;
//     const categoryMatch =
//       activeSubCategory === "All" ||
//       course.category === activeSubCategory.toLowerCase();
//     return typeMatch && categoryMatch;
//   });

//   return (
//     <section className="w-full">
//       <div
//         className={`border border-[${color1}] grid grid-cols-2 mx-auto h-10 font-semibold ${textColor2} sm:text-sm text-xs`}
//       >
//         <button
//           className={`${active === "offline" && `${bgColor1} ${textColor3}`} w-full transition-colors duration-300`}
//           onClick={() => setActive("offline")}
//         >
//           Offline Courses
//         </button>
//         <button
//           className={`${active === "online" && `${bgColor1} ${textColor3}`} w-full transition-colors duration-300`}
//           onClick={() => setActive("online")}
//         >
//           Online Courses
//         </button>
//       </div>
//       <CourseCategories
//         category={activeSubCategory}
//         fn={setActiveSubCategory}
//       />
//       <div className="my-10"></div>
//       <Heading
//         title="Explore & Enroll"
//         subtitle="Featured Courses"
//         titleColor={color2}
//         subtitleColor={color2}
//         description="Our globally recognized curriculum and career-focused approach help students master beauty skills and confidently step into the professional industry."
//       />
//       <div className="px-7 lg:px-10 xl:px-30 py-10 w-full">
//         {active === "offline" ? (
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
//             {filteredCourses.map((course) => {
//               return (
//                 <div
//                   key={course.id}
//                   className={`bg-white flex flex-col rounded-3xl shadow-lg w-full sm:w-3/4 md:w-full transform transition duration-300 ease-in-out 
//               hover:scale-105 hover:shadow-[0_8px_20px_rgba(121,21,53,0.4)]`}
//                 >
//                   <div className={`h-50 ${bgColor1} rounded-t-3xl`}></div>
//                   <div className="sm:py-7 bg-pink flex flex-col gap-2 sm:p-7 p-4">
//                     <div
//                       className={`font-semibold text-sm ${textColor2} flex items-center gap-2`}
//                     >
//                       <div className="flex items-center gap-1">
//                         {[...Array(4)].map((_, j) => (
//                           <IoStarSharp key={j} className="text-yellow-500" />
//                         ))}
//                       </div>
//                       <span className={`${textColor2}`}>(4/5)</span>
//                     </div>
//                     <div className="flex flex-col">
//                       <h2
//                         className={`font-bold tracking-tighter text-xl ${textColor2} hover:text-[#fef3c7]`}
//                       >
//                         {course.name}
//                       </h2>
//                       <p className={`text-sm ${textColor2}`}>{course.desc}</p>
//                     </div>
//                     <div className="pl-4 py-3">
//                       {course.summary.map((sum) => (
//                         <div
//                           className={`${textColor2}`}
//                           key={sum}
//                           type="circle"
//                         >
//                           <li
//                             className={`text-sm tracking-tight ${textColor2} font-semibold`}
//                           >
//                             {sum}
//                           </li>
//                         </div>
//                       ))}
//                     </div>
//                     {/* <hr className="text-gray-300" /> */}
//                     {/* <div className="flex items-center justify-between">
//                       <div className="flex flex-col">
//                         <span className="font-semibold text-xs text-gray-500">
//                           FEE
//                         </span>
//                         <span className={`font-bold text-xl ${textColor1}`}>
//                           &#8377;{course.price}
//                         </span>
//                       </div>
//                       <div className="flex flex-col">
//                         <span className="font-semibold text-xs text-gray-500">
//                           DURATION
//                         </span>
//                         <span className="font-semibold text-md">
//                           {course.duration}
//                         </span>
//                       </div>
//                     </div> */}
//                     <button
//                       className={`${bgColor1} ${textColor4} py-2 px-4 rounded-md hover:bg-[${color1}] transition-colors duration-300`}
//                       onClick={onContactClick}
//                     >
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="w-full p-10 sm:p-20 flex justify-center items-center">
//             <h2
//               className={`text-2xl sm:text-4xl tracking-tighter font-bold ${textColor1} text-center`}
//             >
//               Coming Soon!
//             </h2>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// const CourseCategories = ({ category, fn }) => {
//   const courseCategories = [
//     "All",
//     "Combo",
//     "Makeup",
//     "Nails",
//     "Hair",
//     "Beauty",
//   ];
//   const activeCategory = category ?? "All";
//   return (
//     <section
//       // className={`w-full h-10 overflow-x-auto no-scrollbar sm:overflow-hidden sm:h-20 flex justify-center items-center md:gap-10 border-b border-[${color1}]`}
//       className={`w-full h-10 overflow-x-auto no-scrollbar sm:overflow-hidden sm:h-20 flex justify-start min-[430px]:justify-center items-center md:gap-10 px-4 scroll-px-10 border-b border-[${color1}]`}
//     >
//       {courseCategories.map((category) => {
//         return (
//           <div
//             onClick={() => fn(category)}
//             key={category}
//             className={`${activeCategory === `${category}` && `${bgColor1} ${textColor3}`} ${textColor2} px-5 py-2 rounded-full`}
//           >
//             <h5 className="font-semibold sm:text-sm text-xs">{category}</h5>
//           </div>
//         );
//       })}
//     </section>
//   );
// };
