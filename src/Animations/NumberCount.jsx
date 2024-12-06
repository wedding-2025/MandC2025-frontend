import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const NumberCounter = ({ from = 0, to = 100, duration = 2 }) => {
  const [value, setValue] = useState(from);
  const [inView, setInView] = useState(false); // Track visibility of the element
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Element is in view, start counting
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return; // Don't start counting if not in view

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds
      const progress = Math.min(elapsedTime / duration, 1); // Ensure max value is 1

      const currentValue = Math.floor(progress * (to - from) + from);
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation
      }
    };

    requestAnimationFrame(animate);
  }, [inView, from, to, duration]); // Trigger animation when inView changes

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold"
    >
      {value}
    </motion.div>
  );
};

export default NumberCounter;
