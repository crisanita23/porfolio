import React from "react";

export default function Navbar() {
  return (
    <header className="relative bg-fondi md:sticky top-0">
        <nav className="bg-fondi z-10 p-4 absolute flex w-full flex-wrap items-center justify-between flex flex-wrap items-end text-base justify-center">
        <a className="title-font font-medium text-texto mb-4 md:mb-0">
          <a href="/components/About.js" className="uppercase font-GothicA1 tracking-[2px] text-base pl-16">
            Ana Maria Christache
          </a>
        </a>
        <div className="font-Oswald uppercase tracking-[3px] text-sm pr-12">
          <a href="/components/Contact.js" className="mr-5 hover:text-white">
            Estudios
          </a>
          <a href="/components/Skills.js" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="/components/Projects.js" className="mr-5 hover:text-white">
            Proyectos
          </a>
          </div>
        </nav>
    </header>
  );
}