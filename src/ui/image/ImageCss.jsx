"use client"; // Required for Next.js with Framer Motion
import Image from "next/image";
import { motion } from "framer-motion";

const ImageCss = () => {
  return (
    <div className="overflow-hidden"> {/* Prevents overflow during animation */}
      <motion.div
        initial={{
          scale: 0.1, // Small scale at the start
          opacity: 0, // Start invisible
          rotate: 0, // Start without rotation
        }}
        animate={{
          scale: 1, // Full scale (normal size)
          opacity: 1, // Fully visible
          rotate: 360, // Rotate 360 degrees
        }}
        transition={{
          duration: 1, // Duration of the animation
          ease: "easeOut", // Smooth easing
          scale: {
            type: "spring", // Gives a "jumping" feel for scaling
            stiffness: 100, // Spring stiffness
            damping: 10, // Damping for a smooth stop
          },
        }}
      >
        <Image
          src="/about.jpg"
          alt="sd"
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-screen object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ImageCss;
