"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Lógica para determinar la sección activa basada en el scroll
      // Este es un ejemplo simple, puedes ajustarlo según tus necesidades
      const scrollPosition = window.scrollY;
      if (scrollPosition < 800) setActiveSection("home");
      else if (scrollPosition < 3000) setActiveSection("projects");
      else if (scrollPosition < 4000) setActiveSection("about");
      else setActiveSection("contact");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["home", "projects", "about", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item ${
              activeSection === section
                ? "bg-white text-gray-900"
                : "hover:bg-white/20"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};
