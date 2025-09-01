import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[url('/bg4.jpg')] bg-cover z-50 w-full text-white sticky top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center gap-3">
          {/* <img src="/mylogo.png" alt="Logo" className="h-10 w-10 rounded-full object-cover" /> */}
          <span className="font-bold text-xl">Shohan Sarker</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-lg font-medium">
          <a href="#home" className="hover:text-blue-300">Home</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#skills" className="hover:text-blue-300">Skills</a>
          <a href="#projects" className="hover:text-blue-300">Projects</a>
          <a href="#footer" className="hover:text-blue-300">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#002228] px-5 pb-4 flex flex-col gap-4 text-center font-medium">
          {[
            ["#home", "Home"],
            ["#about", "About"],
            ["#skills", "Skills"],
            ["#projects", "Projects"],
            ["#footer", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-blue-300"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
