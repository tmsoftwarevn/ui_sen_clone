// components/SmoothScroll.js
import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';
import "./scroll.scss"
const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null); // Reference to scroll container
  const [pageHeight, setPageHeight] = useState(0); // State for dynamic height

  // Function to adjust the height dynamically based on content
  const resizePageHeight = useCallback((entries) => {
    if (entries.length > 0) {
      setPageHeight(entries[0].contentRect.height); // Update page height when content changes
    }
  }, []);

  // Set up the resize observer to track changes in the scroll container's height
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  // Framer Motion hook to track vertical scroll position
  const { scrollY } = useScroll();

  // Translate the scroll position to a motion value for smooth scrolling
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);

  // Smooth animation using the spring effect
  const spring = useSpring(transform, {
    damping: 25,
    stiffness: 120,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // Apply smooth scroll effect
        className="scroll-content"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
