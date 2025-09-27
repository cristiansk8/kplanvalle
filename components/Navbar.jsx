// /components/Navbar.jsx
'use client';

import React, { useState } from 'react';
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
    <header className="bg-[#fcfcff] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900">
          KAPLAN
        </Link>

        {/* Gato caminando animado (visible solo en desktop) */}
        <div className="hidden md:flex flex-1 items-center mx-8">
          <div className="relative w-full h-12 overflow-x-hidden">
            <img
              src="/gatas-walking.gif" // Tu GIF en la carpeta /public
              alt="Gato caminando"
              className="absolute left-0 top-0 h-12 animate-gato"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 shrink-0">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botones a la derecha */}
        <div className="flex items-center space-x-4">
          <a href="#cotiza" className="hidden sm:block bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
            Cotiza
          </a>
          {/* Botón del menú móvil (solo visible en móvil) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fcfcff] px-4 pb-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#cotiza" className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full text-center hover:bg-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cotiza ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
