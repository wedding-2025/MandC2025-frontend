// ScrollToTop.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change
  }, [pathname]);

  return null;
};

// Optional: expose a function to programmatically scroll to the top
export const scrollToTopManually = () => {
  window.scrollTo(0, 0);
};


export default ScrollToTop;
