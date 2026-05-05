import Heading from "./ui/Heading";
import Image from "next/image";

export default function Placement() {
  const images = [
    "/assets/images/free-image.jpeg",
    "/assets/images/free-image.jpeg",
    "/assets/images/free-image.jpeg",
    "/assets/images/free-image.jpeg",
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Heading
        title="100% Placement Assistance"
        subtitle="Our Placement Success Stories"
        titleColor="#826955"
        subtitleColor="#826955"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit voluptates maiores harum molestiae ad dolorum natus soluta nisi autem!"
      />
      <div className="overflow-hidden w-full py-10">
        <div className="flex animate-conveyor gap-6 w-max">
          {[...images, ...images].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={100}
              height={100}
              loading="lazy"
              className="w-full h-80 object-contain"
              alt={`image-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
