"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Instagram, Phone, Facebook } from "lucide-react";
import { useMenu } from "@/context/MenuContext";

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useMenu();

  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#2b2b40] text-white shadow-md max-w-2xl mx-auto rounded-b-2xl font-open z-10 relative">
      <div className="md:hidden absolute right-4 top-4 z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="hidden md:flex justify-center space-x-20 py-4">
        <a href="#sobre" className="hover:text-[#c5ab7d] text-md font-[Raleway]">SOBRE</a>
        <a href="#areas" className="hover:text-[#c5ab7d] text-md font-[Raleway]">ÁREAS DE ATUAÇÃO</a>
        <a href="#entrega" className="hover:text-[#c5ab7d] text-md font-[Raleway]">ENTREGA</a>
        <a href="#contato" className="hover:text-[#c5ab7d] text-md font-[Raleway]">CONTATO</a>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md text-white z-50 flex flex-col justify-between p-6">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col items-start text-left space-y-6 mt-1">
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[#c5972c] text-lg font-[Raleway]">SOBRE</button>
            <button onClick={() => scrollToSection('areas')} className="hover:text-[#c5972c] text-lg font-[Raleway]">ÁREAS DE ATUAÇÃO</button>
            <button onClick={() => scrollToSection('entrega')} className="hover:text-[#c5972c] text-lg font-[Raleway]">ENTREGA</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-[#c5972c] text-lg font-[Raleway]">CONTATO</button>
          </nav>

          <div className="mt-10 text-sm space-y-3">
            <p className="font-Light text-[#c5972c] font-[Raleway]">OUTRAS FORMAS DE CONTATO</p>
            <a href="https://www.instagram.com/fernando_ventemilhas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Instagram size={16} />
              <span className="font-[Raleway]">@Fernando_Ventemilhas</span>
            </a>
            <a href="https://www.facebook.com/share/1YDVBGLqwp/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Facebook size={16} />
              <span className="font-[Raleway]">@Fernando_Ventemilhas</span>
            </a>
            <a href="mailto:fernandoventemillhas@gmail.com?subject=Solicitação%20de%20Atendimento%20Jurídico&body=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20jurídico.%0ASeguem%20meus%20dados%20para%20contato:%0A%0ANome:%0ATelefone/WhatsApp:%0AAssunto:" className="flex items-center gap-2 hover:underline">
              <Mail size={16} />
              <span className="font-[Raleway]">fernandoVentemilhas@gmail.com</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5567991347729
&text=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20jurídico.%0ASeguem%20meus%20dados%20para%20contato:%0A%0ANome:%0ATelefone/WhatsApp:%0AAssunto:" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <Phone size={16} />
              <span className="font-[Raleway]">(67) 99194-4153</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
