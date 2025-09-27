// /components/ValleActivations.jsx
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const ValleActivations = () => {
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
            <a href="#contacto-valle" className="self-center md:self-start bg-[var(--brand-green-dark)] text-white font-bold py-3 px-8 rounded-full hover:bg-[var(--brand-green-hover)] transition-transform hover:scale-105">
              Saber Más
            </a>
          </div>
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <Image src="/LOGO-1.0.jpg" alt="Logo Activaciones Valle del Cauca" width={300} height={300} className="rounded-lg object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValleActivations;