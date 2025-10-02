// /components/Navbar.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // 1. Importa el componente Image
import { Menu, X } from 'lucide-react';
import Link from 'next/link'; // Usar Link de Next.js para navegación interna

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Destinos', href: '#destinos' },
    { name: 'Cursos de Inglés', href: '#cursos' },
    { name: 'Alojamiento', href: '#alojamiento' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="bg-[#240F6E] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Volver al inicio de Kaplan">
          <Image
            src="/logo.png" // 2. Apunta al nuevo archivo PNG en la carpeta /public
            alt="Logo de Kaplan"
            width={140}
            height={23}
            priority // Carga la imagen con prioridad ya que está en el viewport inicial
          />
        </Link>



        <nav className="hidden md:flex items-center space-x-6 shrink-0">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-300 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botones a la derecha */}
        <div className="flex items-center space-x-4">
          <a href="#cotiza" className="hidden sm:block bg-[var(--brand-orange)] text-white font-bold py-2 px-6 rounded-full hover:bg-[var(--brand-orange-hover)] transition-colors">
            Cotiza
          </a>
          {/* Botón del menú móvil (solo visible en móvil) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#240F6E] px-4 pb-4 border-t border-white/20">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#cotiza" className="w-full bg-[var(--brand-orange)] text-white font-bold py-2 px-4 rounded-full text-center hover:bg-[var(--brand-orange-hover)] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cotiza ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
