
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube,   FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const BLACK = "#000000";
const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

export default function Footer() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppConfig = async () => {
      const apiUrl = `${baseUrl}/api/v1/app-config/public`;

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          cache: "no-store",
        });

        const result = await response.json();
        console.log("APP CONFIG RESULT:", result);

        if (response.ok && result.data) {
          setConfig(result.data);
        } else {
          setConfig(null);
        }
      } catch (error) {
        console.error("Error fetching app config:", error);
        setConfig(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAppConfig();
  }, []);

  const appName = config?.appName || "Gaura Academy";
  const phoneNumber = config?.phoneNumber || "+91 70783 32794";
  const email = config?.email || "gauramakeupstudioandacademy@gmail.com";

  const addresses =
    Array.isArray(config?.companyAddress) && config.companyAddress.length > 0
      ? config.companyAddress
      : [
          {
            address:
              "32/6, Laxmi Road, Near Doon International School, Dalanwala, Dehradun",
            googleMapLocation: "",
          },
        ];

  const details = [
    {
      name: "Address",
      value: addresses[0]?.address || "",
      link: addresses[0]?.googleMapLocation || "#",
      icon: <FaLocationDot size={20} style={{ color: GOLD }} />,
    },
    {
      name: "Phone",
      value: phoneNumber,
      link: `tel:${phoneNumber}`,
      icon: <FaPhoneAlt size={20} style={{ color: GOLD }} />,
    },
    {
      name: "Email",
      value: email,
      link: `mailto:${email}`,
      icon: <SiGmail size={20} style={{ color: GOLD }} />,
    },
  ];

  const socials = [
    {
      name: "Facebook",
      link: config?.facebookLink,
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      link: config?.instagramLink,
      icon: <FaInstagram />,
    },
      {
    name: "Google",
    link: config?.googleFormLink,
    icon: <FaGoogle />,
  },
    {
      name: "Twitter",
      link: config?.twitterLink,
      icon: <FaXTwitter />,
    },
    {
      name: "YouTube",
      link: config?.youtubeLink,
      icon: <FaYoutube />,
    },
    {
      name: "WhatsApp",
      link: config?.whatsAppLink,
      icon: <IoLogoWhatsapp />,
    },
    {
      name: "LinkedIn",
      link: config?.linkedinLink,
      icon: <FaLinkedinIn />,
    },
  ].filter((social) => social.link);

  return (
    <section
      className="w-full px-5 py-10 sm:p-10 pb-5 flex flex-col justify-center items-center gap-5"
      style={{ background: "#0a0700" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 w-full">
        {/* LEFT */}
        <div className="flex flex-col justify-start items-start gap-5">
          <Image
            src="/assets/images/gaura/GAURA.png"
            alt={`${appName} Logo`}
            width={150}
            height={150}
            loading="eager"
            priority
            className="w-32"
          />

          <p className="text-sm mt-3" style={{ color: `${GOLD}99` }}>
            {appName} is a luxury beauty academy empowering aspiring artists
            through practical training, global curriculum, and expert mentorship.
          </p>

          {socials.length > 0 && (
            <div className="flex justify-start items-center flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-full text-lg transition-all duration-300"
                  style={{
                    background: `${GOLD}22`,
                    color: GOLD,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = YELLOW;
                    e.currentTarget.style.color = BLACK;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${GOLD}22`;
                    e.currentTarget.style.color = GOLD;
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex justify-start md:justify-center items-center">
          <div className="flex-col justify-center items-start gap-7 md:gap-4 flex">
            {details.map((detail) => (
              <a
                key={detail.name}
                href={detail.link}
                target={detail.name === "Address" ? "_blank" : "_self"}
                rel={detail.name === "Address" ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-2 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${YELLOW}18`,
                      border: `1px solid ${GOLD}44`,
                    }}
                  >
                    {detail.icon}
                  </div>

                  <h4 className="text-md font-semibold" style={{ color: GOLD }}>
                    {detail.name}
                  </h4>
                </div>

                <p
                  className="text-sm transition-colors duration-300 group-hover:text-white"
                  style={{ color: `${GOLD}77` }}
                >
                  {detail.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="w-full flex flex-col md:flex-row justify-between items-center"
        style={{
          borderTop: `1px solid ${GOLD}22`,
          paddingTop: "16px",
          marginTop: "8px",
        }}
      >
        <p className="text-md pt-10 md:pb-10 text-center" style={{ color: `${GOLD}66` }}>
          &copy; {new Date().getFullYear()}{" "}
          <span className="capitalize" style={{ color: GOLD }}>
            {appName}.{" "}
          </span>
          All Rights Reserved.
        </p>

        <a
          href="https://vipprow.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md pb-15 sm:pb-0 pt-3 transition-colors duration-300"
          style={{ color: `${GOLD}66` }}
          onMouseEnter={(e) => (e.currentTarget.style.color = YELLOW)}
          onMouseLeave={(e) => (e.currentTarget.style.color = `${GOLD}66`)}
        >
          Developed By{" "}
          <span style={{ color: YELLOW, fontWeight: 700 }}>Vipprow</span>
        </a>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { FaPhoneAlt } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaLocationDot } from "react-icons/fa6";
// import { socials } from "@/seeds/socials";

// // ── Gaura Academy Brand Colors ────────────────────────────────
// const BLACK = "#000000";
// const GOLD = "#dcad6a";
// const YELLOW = "#ffd72e";

// export default function Footer() {
//   const details = [
//     {
//       name: "Address",
//       value: "32/6, Laxmi Road, Near Doon International School, Dalanwala, Dehradun",
//       icon: <FaLocationDot size={20} style={{ color: GOLD }} />,
//     },
//     {
//       name: "Phone",
//       value: "+91 70783 32794",
//       icon: <FaPhoneAlt size={20} style={{ color: GOLD }} />,
//     },
//     {
//       name: "Email",
//       value: "gauramakeupstudioandacademy@gmail.com",
//       icon: <SiGmail size={20} style={{ color: GOLD }} />,
//     },
//   ];

//   return (
//     <section
//       className="w-full px-5 py-10 sm:p-10 pb-5 flex flex-col justify-center items-center gap-5"
//       style={{ background: "#0a0700" }}
//     >
//       {/* ── Same 2-col grid as original ──────────────────────── */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 w-full">

//         {/* LEFT — Logo + tagline + socials (exact same structure) */}
//         <div className="flex flex-col justify-start items-start gap-5">
//           <Image
//             src="/assets/images/gaura/GAURA.png"
//             alt="Gaura Academy Logo"
//             width={150}
//             height={150}
//             loading="eager"
//             priority
//             className="w-32"
//           />

//           <p
//             className="text-sm mt-3"
//             style={{ color: `${GOLD}99` }}
//           >
//             Gaura Academy is a luxury beauty school empowering aspiring artists
//             through practical training, global curriculum, and expert mentorship.
//           </p>

//           {/* Social icons — same structure, new colors */}
//           <div className="flex justify-start items-center">
//             {socials.map((social) => (
//               <div
//                 key={social.name}
//                 className="mr-4 p-2 rounded-full text-lg transition-all duration-300"
//                 style={{
//                   background: `${GOLD}22`,
//                   color: GOLD,
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = YELLOW;
//                   e.currentTarget.style.color = BLACK;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = `${GOLD}22`;
//                   e.currentTarget.style.color = GOLD;
//                 }}
//               >
//                 <a href={social.link} target="_blank" rel="noopener noreferrer">
//                   {social.icon}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT — Contact details (exact same structure) */}
//         <div className="flex justify-start md:justify-center items-center">
//           <div className="flex-col justify-center items-start gap-7 md:gap-4 flex">
//             {details.map((detail) => (
//               <a
//                 key={detail.name}
//                 href={
//                   detail.name.toLowerCase() === "email"
//                     ? `mailto:${detail.value}`
//                     : detail.name.toLowerCase() === "phone"
//                     ? `tel:${detail.value}`
//                     : "#"
//                 }
//                 target="_blank"
//                 className="flex flex-col gap-2 cursor-pointer group"
//               >
//                 <div className="flex items-center gap-3">
//                   {/* Icon circle — same structure */}
//                   <div
//                     className="p-2 rounded-full transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       background: `${YELLOW}18`,
//                       border: `1px solid ${GOLD}44`,
//                     }}
//                   >
//                     {detail.icon}
//                   </div>
//                   <h4
//                     className="text-md font-semibold"
//                     style={{ color: GOLD }}
//                   >
//                     {detail.name}
//                   </h4>
//                 </div>
//                 <p
//                   className="text-sm transition-colors duration-300 group-hover:text-white"
//                   style={{ color: `${GOLD}77` }}
//                 >
//                   {detail.value}
//                 </p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Copyright row — exact same structure ─────────────── */}
//       <div className="w-full flex flex-col md:flex-row justify-between items-center"
//         style={{ borderTop: `1px solid ${GOLD}22`, paddingTop: "16px", marginTop: "8px" }}
//       >
//         <p
//           className="text-md pt-10 md:pb-10 text-center"
//           style={{ color: `${GOLD}66` }}
//         >
//           &copy; {new Date().getFullYear()}{" "}
//           <span className="capitalize" style={{ color: GOLD }}>
//             Gaura Academy.{" "}
//           </span>
//           All Rights Reserved.
//         </p>
//         <a
//           href="https://vipprow.com/"
//           className="text-md pb-15 sm:pb-0 pt-3 transition-colors duration-300"
//           style={{ color: `${GOLD}66` }}
//           onMouseEnter={(e) => (e.currentTarget.style.color = YELLOW)}
//           onMouseLeave={(e) => (e.currentTarget.style.color = `${GOLD}66`)}
//         >
//           Developed By{" "}
//           <span style={{ color: YELLOW, fontWeight: 700 }}>Vipprow</span>
//         </a>
//       </div>
//     </section>
//   );
// }



// import Image from "next/image";

// import { FaPhoneAlt } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaLocationDot } from "react-icons/fa6";
// import {
//   bgColor1,
//   bgColor4,
//   textColor2,
//   textColor3,
//   textColor4,
// } from "@/utils/colors.utils";
// import { socials } from "@/seeds/socials";

// export default function Footer() {
//   const details = [
//     {
//       name: "Address",
//       value:
//         "Plot No. M-10 C.A, Veer Haqiqat Ray Marg, Rudrapur, Uttarakhand - 263153",
//       icon: <FaLocationDot size={20} className={`${textColor2}`} />,
//     },
//     {
//       name: "Phone",
//       value: "+1 (123) 456-7890",
//       icon: <FaPhoneAlt size={20} className={`${textColor2}`} />,
//     },
//     {
//       name: "Email",
//       value: "schoolgaura@gmail.com",
//       icon: <SiGmail size={20} className={`${textColor2}`} />,
//     },
//   ];
//   return (
//     <section
//       className={`w-full ${bgColor1} px-5 py-10 sm:p-10 pb-5 flex flex-col justify-center items-center gap-5`}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
//         <div className="flex flex-col justify-start items-start gap-5">
//           <Image
//             src="/assets/images/logos/gaura_logo.svg"
//             alt="gaura Logo"
//             width={150}
//             height={150}
//             loading="eager"
//             priority
//             className="w-32"
//           />
//           <p className={`text-sm ${textColor4} mt-3`}>
//             gaura Beauty School is a luxury academy empowering aspiring
//             artists through practical training, global curriculum, and expert
//             mentorship.
//           </p>
//           <div className="flex justify-start items-center">
//             {socials.map((social) => (
//               <div
//                 key={social.name}
//                 className={`mr-4 p-2 ${bgColor4} rounded-full text-[#1f2937] text-lg`}
//               >
//                 <a href={social.link} target="_blank" rel="noopener noreferrer">
//                   {social.icon}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-start md:justify-center items-center">
//           <div className="flex-col justify-center items-start gap-7 md:gap-4 flex">
//             {details.map((detail) => (
//               <a
//                 key={detail.name}
//                 href={`${detail.name.toLowerCase() === "email" ? `mailto:${detail.value}` : detail.value}`}
//                 target="_blank"
//                 className="flex flex-col gap-2 cursor-pointer"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2 ${bgColor4} rounded-full ${textColor2}`}>
//                     {detail.icon}
//                   </div>
//                   <h4 className={`text-md font-semibold ${textColor4}`}>
//                     {detail.name}
//                   </h4>
//                 </div>
//                 <p className={`text-sm ${textColor4}`}>{detail.value}</p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="w-full flex flex-col md:flex-row justify-between items-center">
//         <p className={`text-md ${textColor4} pt-10 md:pb-10 text-center`}>
//           &copy;
//           {new Date().getFullYear()}
//           <span className="capitalize text-center">
//             {" "}
//             gaura Beauty School.{" "}
//           </span>
//           All Rights Reserved.
//         </p>
//         <a
//           href="https://vipprow.com/"
//           className={`text-md ${textColor4} pb-15 sm:pb-0 pt-3`}
//         >
//           Developed By <span className={`${textColor3}`}>Vipprow</span>
//         </a>
//       </div>
//     </section>
//   );
// }
