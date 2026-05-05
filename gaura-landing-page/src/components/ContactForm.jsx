"use client";
import { useState } from "react";
import toast from "react-hot-toast";

// ── Gaura Academy Brand Colors ────────────────────────────────
const BLACK = "#000000";
const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

const details = [
  { name: "Address", value: "123 Main St, City, Country" },
  { name: "Email", value: "gaura@gmail.com" },
  { name: "Phone", value: "+91 2343433434" },
];

const initialData = {
  name: "",
  email: "",
  phoneNumber: "",
  courseInterest: "",
  message: "",
};

const courseOptions = [
  "Master in Cosmetology",
  "Diploma in Cosmetology",
  "Certificate in Cosmetology",
  "Bridal Makeup Course",
  "Hair Styling Course",
  "Nail Art Course",
  "Skin Care & Beauty Course",
  "Other",
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

export default function ContactForm() {
  const [formData, setFormData] = useState(initialData);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData(initialData);
      } else if (response.status === 422) {
        toast.error(data.message || "Validation Failed.");
      } else {
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (e) {
      console.error("Error while sending message: ", e);
      toast.error("Network error. Please try again.");
    }
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "12px 14px",
    fontSize: "0.85rem",
    background: "#0d0b00",
    border: `1px solid ${focused === name ? YELLOW : GOLD + "44"}`,
    borderRadius: "10px",
    color: "#ffffff",
    outline: "none",
    fontFamily: "'Montserrat', sans-serif",
    transition: "border 0.25s ease, box-shadow 0.25s ease",
    boxShadow: focused === name ? `0 0 0 3px ${YELLOW}18` : "none",
  });

  const labelStyle = (name, hasValue) => ({
    position: "absolute",
    left: "14px",
    top: hasValue || focused === name ? "-10px" : "13px",
    fontSize: hasValue || focused === name ? "0.65rem" : "0.8rem",
    color: focused === name ? YELLOW : GOLD,
    background: "#111000",
    padding: "0 4px",
    borderRadius: "3px",
    pointerEvents: "none",
    transition: "all 0.2s ease",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  });

  return (
    <section
      className="w-full flex flex-col items-center justify-center p-5 sm:p-10"
      style={{ background: BLACK }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Montserrat:wght@400;500;600;700;800&display=swap');
        select option { background: #111000; color: #ffffff; }
        textarea { resize: vertical; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d0b00; }
        ::-webkit-scrollbar-thumb { background: #dcad6a55; border-radius: 4px; }
      `}</style>

      {/* ── Heading ──────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2 text-center max-w-[560px] mb-2">
        <div className="flex items-center gap-3">
          <div style={{ width: "28px", height: "1px", background: GOLD }} />
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.68rem", fontWeight: 600,
            letterSpacing: "0.26em", color: GOLD, textTransform: "uppercase",
          }}>
            Get in Touch
          </p>
          <div style={{ width: "28px", height: "1px", background: GOLD }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.4rem)",
          fontWeight: 300, color: "#ffffff", lineHeight: 1.08,
        }}>
          <em style={{ color: GOLD, fontStyle: "italic" }}>Contact us</em>
        </h2>
        <div style={{
          width: "48px", height: "2px",
          background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
          borderRadius: "2px", margin: "4px auto 0",
        }} />
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.83rem", color: `${GOLD}bb`,
          lineHeight: 1.8, marginTop: "6px",
        }}>
          Connecting with Gaura Academy is your first step toward a successful beauty career.
        </p>
      </div>

      {/* ── Form Card ────────────────────────────────────────── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 sm:p-10">
        <div
          className="w-full flex flex-col items-start gap-4 rounded-2xl p-6 sm:p-8"
          style={{
            background: "#0d0b00",
            border: `1px solid ${GOLD}33`,
            boxShadow: `0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 ${GOLD}22`,
          }}
        >
          {/* Card header */}
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.6rem", fontWeight: 300, color: "#ffffff",
            }}>
              Send Us a <em style={{ color: YELLOW }}>Message</em>
            </h3>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.78rem", color: `${GOLD}99`, marginTop: "4px",
            }}>
              We believe every future artist deserves clarity before they begin.
            </p>
          </div>

          <div style={{ width: "100%", height: "1px", background: `${GOLD}22` }} />

          {/* Contact details */}
          <div className="flex flex-wrap gap-5 md:gap-10">
            {details.map((detail) => (
              <div key={detail.name}>
                <h6 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.62rem", fontWeight: 700,
                  letterSpacing: "0.18em", color: YELLOW,
                  textTransform: "uppercase", marginBottom: "2px",
                }}>
                  {detail.name}
                </h6>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.78rem", color: GOLD, fontWeight: 500,
                }}>
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ width: "100%", height: "1px", background: `${GOLD}22` }} />

          {/* ── Form ─────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

            {/* Name */}
            <div className="relative w-full">
              <input
                type="text" name="name" value={formData.name}
                onChange={handleChange} required
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                style={inputStyle("name")}
              />
              <label style={labelStyle("name", formData.name)}>Name</label>
            </div>

            {/* Email */}
            <div className="relative w-full">
              <input
                type="email" name="email" value={formData.email}
                onChange={handleChange} required
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                style={inputStyle("email")}
              />
              <label style={labelStyle("email", formData.email)}>Email</label>
            </div>

            {/* Phone */}
            <div className="relative w-full">
              <input
                type="text" name="phoneNumber" value={formData.phoneNumber}
                onChange={handleChange} required
                onFocus={() => setFocused("phoneNumber")}
                onBlur={() => setFocused("")}
                style={inputStyle("phoneNumber")}
              />
              <label style={labelStyle("phoneNumber", formData.phoneNumber)}>Phone Number</label>
            </div>

            {/* Course Interest */}
            <div className="relative w-full">
              <select
                name="courseInterest" value={formData.courseInterest}
                onChange={handleChange} required
                onFocus={() => setFocused("courseInterest")}
                onBlur={() => setFocused("")}
                style={{ ...inputStyle("courseInterest"), appearance: "none", cursor: "pointer" }}
              >
                <option value="" disabled hidden />
                {courseOptions.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              <label style={labelStyle("courseInterest", formData.courseInterest)}>
                Course Interest
              </label>
              <div style={{
                position: "absolute", right: "12px", top: "50%",
                transform: "translateY(-50%)", pointerEvents: "none", color: GOLD,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.7rem", color: `${GOLD}77`,
                marginTop: "4px", paddingLeft: "2px",
              }}>
                ✦ Which course are you interested in?
              </p>
            </div>

            {/* Message */}
            <div className="relative w-full">
              <textarea
                name="message" value={formData.message}
                onChange={handleChange} rows={5}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                style={inputStyle("message")}
              />
              <label style={labelStyle("message", formData.message)}>Message</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-60 py-3 rounded-xl font-bold tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: YELLOW, color: BLACK,
                letterSpacing: "0.15em", fontSize: "0.78rem",
                border: "none", cursor: "pointer",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = GOLD}
              onMouseLeave={(e) => e.currentTarget.style.background = YELLOW}
            >
              Send Message ✦
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { useState } from "react";
// import Heading from "./ui/Heading";
// import {
//   textColor1,
//   textColor2,
//   color1,
//   textColor4,
//   bgColor1,
//   color3,
// } from "@/utils/colors.utils";
// import toast from "react-hot-toast";

// const details = [
//   { name: "Address", value: "123 Main St, City, Country" },
//   { name: "Email", value: "belleza@gmail.com" },
//   { name: "Phone", value: "+91 2343433434" },
// ];

// const initialData = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   location: "",
//   message: "",
// };

// const fields = [
//   { name: "name", label: "Name", type: "text", placeholder: "Your Name" },
//   { name: "email", label: "Email", type: "email", placeholder: "Your Email" },
//   {
//     name: "phoneNumber",
//     label: "Phone Number",
//     type: "text",
//     placeholder: "Your Phone Number",
//   },
//   {
//     name: "location",
//     label: "Location",
//     type: "select",
//     placeholder: "Select Location",
//   },
//   {
//     name: "message",
//     label: "Message",
//     type: "textarea",
//     placeholder: "Your Message",
//   },
// ];

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

// export default function ContactForm() {
//   const [formData, setFormData] = useState(initialData);

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${baseUrl}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("response: ", response);
//       console.log("data: ", data);

//       if (response.status === 201) {
//         toast.success("Message sent successfully!");
//         setFormData(initialData);
//       } else if (response.status === 422) {
//         toast.error(data.message || "Validation Failed.");
//       } else {
//         toast.error(
//           data.message || "Failed to send message. Please try again.",
//         );
//       }
//     } catch (e) {
//       console.error("Error while sending message: ", e);
//       toast.error("Network error. Please try again.");
//     }
//   };

//   return (
//     <section className="w-full flex flex-col items-center justify-center p-5 sm:p-10">
//       <Heading
//         title="Get in Touch"
//         subtitle="Contact Us"
//         titleColor="#826955"
//         description="Connecting with Belleza is your first step toward a successful beauty career."
//       />
//       <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 sm:p-10">
//         <div className="w-full flex flex-col items-start gap-3 bg-white rounded-2xl shadow-lg p-5 sm:p-7">
//           <h3 className={`text-2xl font-bold tracking-tighter ${textColor1}`}>
//             Contact Us
//           </h3>
//           <p className={`text-sm ${textColor2} font-semibold`}>
//             We believe every future artist deserves clarity before they begin.
//           </p>
//           <div className="py-2 flex flex-wrap gap-3 md:gap-10 xl:gap-20">
//             {details.map((detail) => {
//               return (
//                 <div key={detail.name}>
//                   <h6 className={`uppercase text-sm ${textColor1} font-bold`}>
//                     {detail.name}
//                   </h6>
//                   <p className={`text-sm font-semibold ${textColor2}`}>
//                     {detail.value}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="w-full py-6 sm:py-10">
//             <form
//               onSubmit={handleSubmit}
//               className="w-full flex items-start flex-col gap-5"
//             >
//               {fields.map((field) => (
//                 <div key={field.name} className="relative w-full">
//                   {field.type === "select" ? (
//                     <div className="relative">
//                       <select
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         required
//                         className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#fef3c7] bg-white appearance-none text-[#fef3c7]"
//                       >
//                         <option value="" disabled hidden></option>
//                         <option value="haldwani">Haldwani</option>
//                         <option value="dehradun">Dehradun</option>
//                         <option value="bajpur">Bajpur</option>
//                         <option value="rudrapur">Rudrapur</option>
//                       </select>
//                       <div
//                         className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${textColor1}`}
//                       >
//                         <svg
//                           className="fill-current h-5 w-5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                         </svg>
//                       </div>
//                     </div>
//                   ) : field.type === "textarea" ? (
//                     <textarea
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder=" "
//                       rows={6}
//                       className={`peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[${color3}]`}
//                     />
//                   ) : (
//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       required
//                       placeholder=" "
//                       className={`peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[${color1}]`}
//                     />
//                   )}

//                   {field.type === "select" && (
//                     <p className={`text-sm p-1 ${textColor1}`}>
//                       <span className="text-[]">&#42; </span> Please Select your
//                       nearest location.
//                     </p>
//                   )}
//                   {/* <label
//                     htmlFor={field.name}
//                     className={`absolute left-3 top-2 text-gray-500 text-sm transition-all pointer-events-none
//       peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
//       peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[${color1}]
//       peer-valid:-top-3 peer-valid:text-xs bg-white px-1`}
//                   >
//                     {field.label}
//                   </label> */}
//                   <label
//                     htmlFor={field.name}
//                     className={`absolute left-3 transition-all pointer-events-none bg-white px-1
//   ${
//     field.type === "select"
//       ? formData[field.name]
//         ? "-top-3 text-xs text-[#fef3c7]"
//         : "top-2 text-sm text-gray-400"
//       : `top-2 text-gray-500 text-sm
//          peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
//          peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#fef3c7]
//          peer-valid:-top-3 peer-valid:text-xs`
//   }`}
//                   >
//                     {field.label}
//                   </label>
//                 </div>
//               ))}
//               <button
//                 type="submit"
//                 className={`${bgColor1} ${textColor4} hover:bg-[#5a102a] py-2 px-4 rounded-lg text-sm`}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className=""></div>
//     </section>
//   );
// }

// {
//   /* <div className="w-full relative">
//                 <input
//                   type="name"
//                   name="name"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder=" "
//                   className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#fef3c7]"
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
//                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#fef3c7] bg-white px-1"
//                 >
//                   Email
//                 </label>
//               </div>
//               <div className="w-full flex flex-col justify-center items-start gap-2">
//                 <label className="font-semibold tracking-tight">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
//                 />
//               </div>
//               <div className="w-full flex flex-col justify-center items-start gap-2">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="font-semibold tracking-tight"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   placeholder="Your Phone Number"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
//                 />
//               </div>
//               <div className="w-full flex flex-col justify-center items-start gap-2">
//                 <label
//                   htmlFor="location"
//                   className="font-semibold tracking-tight"
//                 >
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   placeholder="Enter Location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
//                 />
//               </div>
//               <div className="w-full flex flex-col justify-center items-start gap-2">
//                 <label
//                   htmlFor="message"
//                   className="font-semibold tracking-tight"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none"
//                   rows={6}
//                 />
//               </div> */
// }
// {
//   /* {fields.map((field) => (
//                 <div key={field.name} className="relative w-full">
//                   {field.type === "textarea" ? (
//                     <textarea
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder=" "
//                       rows={6}
//                       className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#fef3c7]"
//                     />
//                   ) : (
//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder=" "
//                       className="peer px-3 py-2 text-sm border rounded-lg border-gray-300 w-full focus:outline-none focus:border-[#fef3c7]"
//                     />
//                   )}
//                   <label
//                     htmlFor={field.name}
//                     className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
//                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#fef3c7] bg-white px-1"
//                   >
//                     {field.label}
//                   </label>
//                 </div>
//               ))} */
// }
