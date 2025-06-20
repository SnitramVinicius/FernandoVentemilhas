"use client";

import { useState, useEffect } from "react";
import { useMenu } from "@/context/MenuContext";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { menuOpen } = useMenu();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6  flex flex-col items-end gap-4 z-50">
     {!menuOpen && (
  <a
    href="https://api.whatsapp.com/send?phone=5567991347729&text=Olá,%20gostaria%20de%20agendar%20um%20atendimento..."
    target="_blank"
    rel="noopener noreferrer"
    className="pulse-whatsapp"
  >
    <img src="/iconswhatsapp.png" alt="icone whatsapp" className="w-10 h-10" />
  </a>
)}

        {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-3  p-3 transition z-100"
          aria-label="Voltar ao topo"
        >
    <img src="/up.png" alt="Voltar ao topo" className="w-10 h-10 cursor-pointer"/>
        </button>
      )}
      </div>
    </>
  );
}