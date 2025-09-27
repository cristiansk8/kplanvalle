// /components/AnnouncementBar.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[var(--brand-blue)] text-white text-sm font-medium">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center text-center">
        <p>
          <span role="img" aria-label="party popper">🎉</span>
          <span className="hidden sm:inline mx-2">
            ¡Oferta por tiempo limitado! Obtén hasta 20% de descuento.
          </span>
          <a href="#oferta" className="ml-2 font-bold underline hover:text-orange-300 inline-flex items-center">
            Ver detalles
            <ArrowRight size={16} className="ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
