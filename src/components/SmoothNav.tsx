
'use client';
import React from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#start", label: "Inicio" },
  { href: "#aboutme", label: "Sobre mí" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

const SmoothNav: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center bg-gray-900 h-16 z-50">
      {navLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="mx-2 cursor-pointer hover:bg-gray-700 px-3 py-0 transition-colors duration-200"
          onClick={(e) => handleClick(e, item.href)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default SmoothNav;
