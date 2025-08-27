import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return ( 
    <button
      onClick={handleScrollTop}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-orange-500 text-white p-3 rounded-5 shadow-lg z-50"
      title="Scroll to Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;
