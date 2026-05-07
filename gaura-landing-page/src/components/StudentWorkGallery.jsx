import Image from "next/image";
import Heading from "./ui/Heading";
import { color2 } from "@/utils/colors.utils";

export default function StudentWorkGallery() {
  const photos = [
    "/assets/images/gaura/ChatGPT Image May 6, 2026, 01_05_39 PM (1).png",
    "/assets/images/gaura/ChatGPT Image May 6, 2026, 01_48_18 PM.png",
    "/assets/images/gaura/ChatGPT Image May 7, 2026, 11_01_37 AM (1).png",
    "/assets/images/gaura/makeup_image2_1080x1350.png",
    "/assets/images/gaura/ChatGPT Image May 6, 2026, 12_08_49 PM.png",
    "/assets/images/gaura/ChatGPT Image May 6, 2026, 01_51_21 PM.png",
   
     
  
  ];
  return (
    <section className="w-full my-10 p-5 sm:p-10 flex flex-col items-center justify-center">
      <Heading
        title="Experience the Story"
        subtitle="From Beginner to Professional "
        titleColor={color2}
        subtitleColor={color2}
        description="Our students start with zero experience and become skilled makeup artists through hands-on training."
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-3 align-middle gap-2 sm:gap-5 py-10">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src={photo}
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              quality={90}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
