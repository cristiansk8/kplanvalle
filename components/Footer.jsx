// /components/Footer.jsx
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, href: '#', name: 'Facebook' },
    { icon: <Twitter />, href: '#', name: 'Twitter' },
    { icon: <Instagram />, href: '#', name: 'Instagram' },
    { icon: <Youtube />, href: '#', name: 'YouTube' },
  ];

  const footerSections = [
    {
      title: 'Cursos Populares',
      links: [
        { name: 'Inglés General', href: '#empezar' },
        { name: 'Inglés Intensivo', href: '#empezar' },
        { name: 'Preparación de Exámenes', href: '#empezar' },
        { name: 'Inglés de Negocios', href: '#empezar' },
      ],
    },
    {
      title: 'Destinos',
      links: [
        { name: 'Estudiar en EE.UU.', href: '#destinos' },
        { name: 'Estudiar en Reino Unido', href: '#destinos' },
        { name: 'Estudiar en Canadá', href: '#destinos' },
        { name: 'Ver todos los destinos', href: '#destinos' },
      ],
    },
    {
      title: 'Sobre Kaplan',
      links: [
        { name: 'Nuestra Historia', href: '#valle' },
        { name: 'Acreditaciones', href: '#valle' },
        { name: 'Blog', href: '#valle' },
        { name: 'Contáctanos', href: '#contacto' },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--brand-blue)] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Sección superior con logo y redes sociales */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-white/20">
          <div className="text-3xl font-bold mb-6 sm:mb-0">
            KAPLAN
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Secciones de enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white hover:underline text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold mb-4">Descarga nuestro catálogo</h3>
            <p className="text-gray-300 text-sm mb-4">Obtén toda la información sobre nuestros cursos y destinos.</p>
            <a href="#valle" className="w-full text-center bg-[var(--brand-orange)] text-white font-bold py-2 px-4 rounded-full hover:bg-[var(--brand-orange-hover)] transition-colors">
              Descargar
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 pt-8 border-t border-white/20">
          <p>&copy; {new Date().getFullYear()} Kaplan International. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#valle" className="hover:underline">Política de Privacidad</a>
            <span>|</span>
            <a href="#valle" className="hover:underline">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;