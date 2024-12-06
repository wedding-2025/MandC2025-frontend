import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SlideFromBottom = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // Track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const triggerPoint = window.innerHeight * 0.8;
    const element = document.getElementById("slide-from-bottom");

    // Determine scroll direction
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }
    setLastScrollY(currentScrollY);

    // Check if the element is in the viewport
    if (element) {
      const top = element.getBoundingClientRect().top;
      if (top < triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      id="slide-from-bottom"
      initial={{ opacity: 0, y: scrollDirection === "up" ? 50 : -50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideFromBottom;