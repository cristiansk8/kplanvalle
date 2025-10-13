// /components/ValleActivations.jsx
'use client';
import Image from 'next/image';
import { MapPin, Download } from 'lucide-react';

const ValleActivations = () => {
  const handleDownload = () => {
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement('a');
    link.href = '/activaciones-valle.pdf'; // Asegúrate de que el PDF esté en la carpeta /public
    link.download = 'Activaciones-Valle-Kaplan.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-3 inline-flex items-center justify-center md:justify-start">
              <MapPin className="text-[var(--brand-green-light)] mr-3" size={30} />
              Exclusivo Valle del Cauca
            </h2>
            <p className="text-gray-600 mb-6">
              Descubre activaciones y beneficios únicos para estudiantes de nuestra región. ¡Prepárate para tu aventura global desde casa!
            </p>
            <button 
              onClick={handleDownload}
              className="self-center md:self-start bg-[var(--brand-green-dark)] text-white font-bold py-3 px-8 rounded-full hover:bg-[var(--brand-green-hover)] transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={20} />
              Ver más
            </button>

            {/* Gato caminando animado (visible en mobile y desktop) */}
            <div className="flex flex-1 items-center mx-4 md:mx-8 mt-6">
              <div className="relative w-full h-20 md:h-12 overflow-x-hidden">
                <img
                  src="/gatas-walking.gif" // GIF en la carpeta /public
                  alt="Gato caminando"
                  className="absolute left-0 top-0 h-20 md:h-12 animate-gato"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative flex items-center justify-center p-8">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: "url('/bg-cali-kaplan.png')" }}
            ></div>
            {/* Logo sobre el fondo */}
            <div className="relative z-10">
              <Image 
                src="/logo.png" 
                alt="Logo Activaciones Valle del Cauca" 
                width={300} 
                height={300} 
                className="rounded-lg object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValleActivations;