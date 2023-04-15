import React from "react";

export default function Navbar() {
  return (
    <header className="bg-fondi md:sticky top-0 z-10">
        <nav className="p-4 relative flex w-full flex-wrap items-center justify-between flex flex-wrap items-end text-base justify-center">
        <a className="title-font font-medium text-texto mb-4 md:mb-0">
          <a href="#about" className="uppercase font-Lato text-base tracking-[3px]">
            Ana Maria Christache
          </a>
        </a>
        <div className="font-Oswald uppercase tracking-[3px] text-sm">
          <a href="#contact" className="mr-5 hover:text-white">
            Estudios
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Proyectos
          </a>
          </div>
        </nav>
    </header>
  );
}