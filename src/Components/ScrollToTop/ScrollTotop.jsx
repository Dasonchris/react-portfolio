import { React } from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";  
import "./ScrollTotop.css"; 

const ScrollTotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTotop}
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollTotop;
