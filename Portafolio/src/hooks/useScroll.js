// src/hooks/useScroll.js
import { useEffect, useState } from "react";

const useScroll = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const id = section.getAttribute("id");

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};

export default useScroll;
