"use client";

import { Children, useEffect, useRef, useState } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const GOLD = "#dcad6a";
const YELLOW = "#ffd72e";

/** Cards visible at once: 1 on mobile, 2 on tablet, 3 on large screens. */
function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return perView;
}

const arrowStyle = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  border: `1px solid ${GOLD}44`,
  color: GOLD,
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/**
 * Responsive carousel. Every child is one slide.
 * It only becomes a carousel (arrows, dots, swipe) when there are more slides
 * than fit on screen: more than 3 on desktop, more than 2 on tablet and more
 * than 1 on mobile. Otherwise the slides are simply laid out in a row.
 */
export default function Carousel({ children }) {
  const slides = Children.toArray(children);
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  const maxIndex = Math.max(0, slides.length - perView);
  const isCarousel = slides.length > perView;

  // Clamp instead of resetting in an effect, so a screen-size or slide-count
  // change can never leave the carousel past the last slide.
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? next : prev)();
    touchStart.current = null;
  };

  if (!slides.length) return null;

  return (
    <div className="w-full">
      <div
        className="overflow-hidden"
        onTouchStart={isCarousel ? onTouchStart : undefined}
        onTouchEnd={isCarousel ? onTouchEnd : undefined}
      >
        <div
          className={`flex ${isCarousel ? "" : "justify-center"}`}
          style={{
            transform: `translateX(-${(current * 100) / perView}%)`,
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.key ?? i}
              className="flex shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / perView}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {isCarousel && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} aria-label="Previous" style={arrowStyle}>
            <PiCaretLeftBold size={18} />
          </button>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                height: "7px",
                width: i === current ? "28px" : "7px",
                borderRadius: "999px",
                background: i === current ? YELLOW : `${GOLD}44`,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}
          <button onClick={next} aria-label="Next" style={arrowStyle}>
            <PiCaretRightBold size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
