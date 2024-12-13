"use client"; // Required for Next.js with GSAP
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gif = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation: Fade-In on Scroll
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 }, // Start fully transparent
      {
        opacity: 1, // Fade to fully visible
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Start when the container is 75% in the viewport
          end: "bottom 50%", // End when it's halfway out
          scrub: true, // Smooth scroll-based animation
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden" // Constrain the animation area
    >
      <Image
        ref={imageRef}
        //src="/star.gif"
        src="/hero.jpg"
        alt="Scrolling GIF"
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default Gif;
