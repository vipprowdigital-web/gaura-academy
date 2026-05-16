"use client";

import { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import { color2 } from "@/utils/colors.utils";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

export default function StudentWorkGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const apiUrl = `${baseUrl}/api/v1/gallery/active?limit=50`;

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          cache: "no-store",
        });

        const result = await response.json();
        console.log("GALLERY API RESULT:", result);

        if (response.ok && Array.isArray(result.data)) {
          const activePhotos = result.data
            .filter((item) => item.image)
            .map((item) => ({
              id: item._id,
              src: item.image,
              title: item.title || "Gallery Image",
              category: item.category || "",
            }));

          setPhotos(activePhotos);
        } else {
          console.error("Invalid gallery response:", result);
          setPhotos([]);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section className="w-full my-10 p-5 sm:p-10 flex flex-col items-center justify-center">
      <Heading
        title="Experience the Story"
        subtitle="From Beginner to Professional"
        titleColor={color2}
        subtitleColor={color2}
        description="Our students start with zero experience and become skilled makeup artists through hands-on training."
      />

      {loading ? (
        <div className="w-full py-16 flex items-center justify-center">
          <p className="text-sm text-[#dcad6a]">Loading gallery...</p>
        </div>
      ) : photos.length > 0 ? (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 py-10">
          {photos.map((photo, index) => (
            <GalleryCard key={photo.id || index} photo={photo} index={index} />
          ))}
        </div>
      ) : (
        <div className="w-full py-16 flex items-center justify-center">
          <p className="text-sm text-[#dcad6a]">
            No gallery images available.
          </p>
        </div>
      )}
    </section>
  );
}

function GalleryCard({ photo, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-md bg-black"
      style={{
        aspectRatio: "4 / 3",
        border: hovered
          ? "1px solid #ffd72e"
          : "1px solid rgba(220,173,106,0.25)",
        transition: "all 0.35s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={photo.src}
        alt={photo.title || `Gallery Image ${index + 1}`}
        className="w-full h-full"
        style={{
             height: "auto",
          maxHeight: "520px",
          objectFit: "contain",
          transition: "opacity 0.35s ease",
          opacity: hovered ? 0.92 : 1,
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))"
            : "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.02))",
          transition: "background 0.35s ease",
        }}
      />

      {photo.title && (
        <div className="absolute bottom-3 left-3 right-3">
          <p
            className="text-xs sm:text-sm font-semibold line-clamp-1"
            style={{
              color: "#ffffff",
              textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            {photo.title}
          </p>

          {photo.category && (
            <p
              className="text-[10px] uppercase tracking-widest mt-1"
              style={{ color: "#ffd72e" }}
            >
              {photo.category.replace("-", " ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// import Image from "next/image";
// import Heading from "./ui/Heading";
// import { color2 } from "@/utils/colors.utils";

// export default function StudentWorkGallery() {
//   const photos = [
//     "/assets/images/gaura/ChatGPT Image May 6, 2026, 01_05_39 PM (1).png",
//     "/assets/images/gaura/ChatGPT Image May 6, 2026, 01_48_18 PM.png",
//     "/assets/images/gaura/ChatGPT Image May 7, 2026, 11_01_37 AM (1).png",
//     "/assets/images/gaura/makeup_image2_1080x1350.png",
//     "/assets/images/gaura/ChatGPT Image May 6, 2026, 12_08_49 PM.png",
//     "/assets/images/gaura/ChatGPT Image May 6, 2026, 01_51_21 PM.png",
   
     
  
//   ];
//   return (
//     <section className="w-full my-10 p-5 sm:p-10 flex flex-col items-center justify-center">
//       <Heading
//         title="Experience the Story"
//         subtitle="From Beginner to Professional "
//         titleColor={color2}
//         subtitleColor={color2}
//         description="Our students start with zero experience and become skilled makeup artists through hands-on training."
//       />
//       <div className="w-full grid grid-cols-2 md:grid-cols-3 align-middle gap-2 sm:gap-5 py-10">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
//           >
//             <Image
//               src={photo}
//               alt={`Gallery Image ${index + 1}`}
//               fill
//               sizes="(max-width: 768px) 50vw, 33vw"
//               className="object-cover"
//               quality={90}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
