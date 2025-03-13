"use client";

import { MultiStar, Start } from "@/components/icons";
import { useEffect, useRef, useState } from "react";

const professions = [
  "Developer",
  "Designer",
  "Creative Coder",
  "Learner",
  "Tech Enthusiast",
];

// Duplicate the array to create a continuous loop effect
const duplicatedProfessions = [...professions, ...professions, ...professions];

const Profession = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const topSliderRef = useRef<HTMLDivElement | null>(null);
  const bottomSliderRef = useRef<HTMLDivElement | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when resizing
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Get the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Use different slowdown factors for mobile and desktop
      const slowdownFactor = isMobile ? 0.3 : 0.4;

      // Calculate how far the section is in the viewport (as a percentage)
      const viewportProgress =
        ((viewportHeight - sectionTop) / (viewportHeight + rect.height)) *
        slowdownFactor;

      // Calculate positions that move sliders in and out of viewport
      if (viewportProgress >= -0.2 && viewportProgress <= 0.6) {
        const xFactor = isMobile ? 0.6 : 1.5; // Adjusted factor for mobile
        const topXPosition = viewportWidth * xFactor * (viewportProgress - 0.2);
        const bottomXPosition =
          viewportWidth * xFactor * (0.2 - viewportProgress);

        if (topSliderRef.current) {
          topSliderRef.current.style.transform = `translateX(${topXPosition}px) rotate(${
            isMobile ? 5 : 10
          }deg)`;
        }
        if (bottomSliderRef.current) {
          bottomSliderRef.current.style.transform = `translateX(${bottomXPosition}px) rotate(${
            isMobile ? -5 : -10
          }deg)`;
        }
      }
    };

    // Center sliders horizontally on initial load
    const centerSliders = () => {
      if (
        sectionRef.current &&
        topSliderRef.current &&
        bottomSliderRef.current
      ) {
        const offset = isMobile ? -window.innerWidth * 0.6 : -window.innerWidth; // Reduced gap for mobile
        topSliderRef.current.style.left = `${offset}px`;
        bottomSliderRef.current.style.right = `${offset}px`;
        bottomSliderRef.current.style.left = "auto"; // Clear any previous left setting

        // Adjust rotation angles for better mobile viewing
        topSliderRef.current.style.transform = `translateX(0) rotate(${
          isMobile ? 5 : 10
        }deg)`;
        bottomSliderRef.current.style.transform = `translateX(0) rotate(${
          isMobile ? -5 : -10
        }deg)`;

        // Adjust vertical positions for mobile
        topSliderRef.current.style.top = isMobile ? "20%" : "auto";
        bottomSliderRef.current.style.top = isMobile ? "50%" : "auto";

        setInitialized(true);
      }
    };

    // Handle both initial positioning and scroll events
    centerSliders();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", centerSliders);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", centerSliders);
      window.removeEventListener("resize", checkMobile);
    };
  }, [initialized, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="md:pt-[300px] md:pb-[120px] min-w-full overflow-hidden xl:relative hidden xl:block"
    >
      <div
        ref={topSliderRef}
        className="flex items-center space-x-2 backdrop-blur-2xl bg-transparent border-t border-b absolute w-max"
        style={{ transition: "transform 0.5s ease-out" }}
      >
        {duplicatedProfessions.map((profession, index) => (
          <div
            key={`top-${profession}-${index}`}
            className="uppercase text-2xl md:text-4xl font-michroma flex items-center space-x-2 md:space-x-4 p-4 md:p-6 font-semibold"
          >
            <span>{profession}</span>
            <MultiStar className="stroke-purple-500" />
          </div>
        ))}
      </div>

      <div
        ref={bottomSliderRef}
        className="flex items-center space-x-2 backdrop-blur-2xl bg-transparent border-t border-b absolute w-max"
        style={{ transition: "transform 0.5s ease-out" }}
      >
        {duplicatedProfessions.map((profession, index) => (
          <div
            key={`bottom-${profession}-${index}`}
            className="uppercase text-2xl md:text-4xl font-michroma flex items-center space-x-2 md:space-x-4 p-4 md:p-6 font-semibold"
          >
            <span>{profession}</span>
            <Start className="fill-purple-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profession;
