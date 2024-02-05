"use client";

import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
const ScrollTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={goToTop}
      className="fixed bottom-8 right-14 mix-blend-difference z-[10] max-desktop:right-3"
    >
      {showTopBtn && (
        <div className="group/scrollToTop cursor-pointer flex justify-center items-center w-11 h-11 rounded-md hover:bg-[rgba(255,255,255,0.1)] transition-colors">
          <FaAngleUp
            size={20}
            color="white"
            className="group-hover/scrollToTop:animate-pulse"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollTopBtn;
