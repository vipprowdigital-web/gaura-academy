"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// `position` = which part of the photo stays in view inside the 3:4 tile
const portraits = [
  {
    src: "/assets/images/web/bridal-7.webp",
    alt: "Bridal makeup with a statement gold necklace",
    position: "50% 35%",
  },
  {
    src: "/assets/images/web/bridal-8.webp",
    alt: "Classic red bridal look",
    position: "50% 30%",
  },
  {
    src: "/assets/images/web/bridal-9.webp",
    alt: "Bridal makeup with emerald jewellery",
    position: "50% 30%",
  },
  {
    src: "/assets/images/web/bridal-3.webp",
    alt: "Bride twirling in a red embroidered lehenga",
    position: "50% 40%",
  },
];

function Tile({
  src,
  alt,
  caption,
  className = "",
  sizes,
  objectPosition,
  index = 0,
}) {
  return (
    <motion.figure
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      style={{
        border: `1px solid ${GOLD}33`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
      variants={fade}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 45%)",
        }}
      />
      {caption && (
        <figcaption
          className="absolute bottom-4 left-4 right-4 text-sm font-semibold tracking-wide"
          style={{ color: "#fff" }}
        >
          {/* <span
            className="mr-2 inline-block align-middle"
            style={{ width: "18px", height: "2px", background: YELLOW }}
          /> */}
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export default function AcademyShowcase() {
  return (
    <section
      id="inside-gaura"
      className="relative w-full px-5 py-20 sm:px-10"
      style={{ background: "#050300" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(to right, transparent, ${YELLOW}55, transparent)`,
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <div style={{ width: "28px", height: "1px", background: GOLD }} />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.66rem",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: GOLD,
                textTransform: "uppercase",
              }}
            >
              Inside Gaura
            </p>
            <div style={{ width: "28px", height: "1px", background: GOLD }} />
          </div>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: 1.08,
            }}
          >
            Where Artistry Comes to{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>Life</em>
          </h2>
          <div
            style={{
              width: "52px",
              height: "2px",
              background: `linear-gradient(to right, ${YELLOW}, ${GOLD})`,
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Academy + studio */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:h-[460px]">
          <Tile
            src="/assets/images/web/academy.webp"
            alt="Students attending a live masterclass at Gaura Makeup Academy"
            caption="Live masterclasses with hands-on learning"
            sizes="(min-width: 1024px) 66vw, 100vw"
            objectPosition="50% 60%"
            className="aspect-[16/10] lg:col-span-2 lg:aspect-auto"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:grid-rows-2">
            <Tile
              src="/assets/images/web/studio-exterior.webp"
              alt="Gaura Makeup Academy building"
              caption="Gaura Makeup Academy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              objectPosition="50% 55%"
              index={1}
              className="aspect-[4/3] lg:aspect-auto"
            />
            <Tile
              src="/assets/images/interior.webp"
              alt="Reception of Gaura Makeup Academy"
              caption="Our reception"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              objectPosition="50% 35%"
              index={2}
              className="aspect-[4/3] lg:aspect-auto"
            />
          </div>
        </div>

        {/* Bridal work */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-4">
          {portraits.map((p, i) => (
            <Tile
              key={p.src}
              src={p.src}
              alt={p.alt}
              sizes="(min-width: 1024px) 25vw, 50vw"
              objectPosition={p.position}
              index={i}
              className="aspect-[3/4]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
