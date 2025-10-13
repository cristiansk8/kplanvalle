// /components/AnnouncementBar.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-white text-blue text-sm font-medium overflow-hidden relative">
      <div className="flex animate-[marquee_25s_linear_infinite]">
        <div className="flex items-center whitespace-nowrap px-4">
          <span role="img" aria-label="party popper" className="mx-2">🎉</span>
          <span className="mx-2">
            ¡Oferta por tiempo limitado! Obtén hasta 20% de descuento.
          </span>
          <a href="#oferta" className="ml-2 font-bold underline hover:text-orange-300 inline-flex items-center">
            Ver detalles
            <ArrowRight size={16} className="ml-1" />
          </a>
          <span className="mx-8">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap px-4">
          <span role="img" aria-label="party popper" className="mx-2">🎉</span>
          <span className="mx-2">
            ¡Oferta por tiempo limitado! Obtén hasta 20% de descuento.
          </span>
          <a href="#oferta" className="ml-2 font-bold underline hover:text-orange-300 inline-flex items-center">
            Ver detalles
            <ArrowRight size={16} className="ml-1" />
          </a>
          <span className="mx-8">•</span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;