import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const tiltAnimation = (delay = 0) => ({
    initial: { y: "40vh", rotate: 20, opacity: 0 }, // Start off-screen at the bottom, tilted
    animate: { y: 0, rotate: 0, opacity: 1 }, // Slide up, align angle, and fade in
    transition: { duration: 1, ease: "easeInOut", delay }, // Smooth transition
  });

  return (
    <div style={{ overflow: "hidden", padding: "2rem" }}>
      {/* Animated Heading */}
      <motion.h1
        {...tiltAnimation()}
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        NEW YORK & VIETNAM — COLLECTIVE DESIGN AGENCY
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p {...tiltAnimation(0.2)}>collectively</motion.p>
      <motion.h2 {...tiltAnimation(0.4)}>inspired branding & digital experience</motion.h2>
      <motion.p {...tiltAnimation(0.6)}>
        We empower great brands & businesses to captivate a global audience with
        our creative vision, branding expertise, and digital innovation.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        {...tiltAnimation(0.8)}
        className="rounded-full px-4 py-2 bg-blue-500 text-white mt-4"
      >
        Learn more
      </motion.button>
    </div>
  );
};

export default Hero;
