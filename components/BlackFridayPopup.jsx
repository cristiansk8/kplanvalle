// /components/BlackFridayPopup.js
'use client';

import { X } from 'lucide-react';

const BlackFridayPopup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '573118572469'; // Formato internacional para Colombia
    const message = encodeURIComponent('Quiero aplicar oferta de BlackFriday');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 py-16 px-8"
    >
      <div 
        className="bg-black rounded-lg shadow-2xl relative w-full max-w-md cursor-pointer hover:scale-105 transition-transform"
        onClick={handleWhatsAppClick}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-4 -right-4 bg-white rounded-full p-1.5 text-black hover:bg-gray-200 transition-all z-10"
          aria-label="Cerrar popup"
        >
          <X size={24} />
        </button>

        <div className="relative overflow-hidden">
          <video
            className="w-full h-auto rounded-lg"
            src="/blackfriday.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Tu navegador no soporta el tag de video.
          </video>
          
          {/* Texto superior */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none pt-4">
            <style jsx>{`
              @keyframes glitch {
                0%, 100% {
                  transform: translate(0);
                  text-shadow: 2px 2px 0 #000,
                               -2px -2px 0 #000;
                }
                25% {
                  transform: translate(-2px, 2px);
                  text-shadow: 3px 3px 0 #000,
                               -3px -3px 0 #000,
                               0 0 20px rgba(255, 255, 255, 0.8);
                }
                50% {
                  transform: translate(2px, -2px);
                  text-shadow: -2px -2px 0 #000,
                               2px 2px 0 #000;
                }
                75% {
                  transform: translate(-1px, -1px);
                  text-shadow: 4px 4px 0 #000,
                               -4px -4px 0 #000,
                               0 0 30px rgba(255, 255, 255, 1);
                }
              }
              
              @keyframes pulse {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.7;
                }
              }
              
              .black-friday-text {
                animation: glitch 0.5s ease-in-out infinite,
                          pulse 2s ease-in-out infinite;
              }
            `}</style>
            <div className="bg-black/80 py-2">
              <h2 className="black-friday-text text-center text-white text-4xl font-black tracking-widest uppercase">
                HASTA 40% OFF
              </h2>
            </div>
          </div>

          {/* Texto inferior */}
          <div className="absolute bottom-0 left-0 right-0 pb-4 pointer-events-none">
            <div className="bg-black/80 py-3">
              <h3 className="black-friday-text text-center text-white text-2xl font-black tracking-widest uppercase">
                ¡APLICAR OFERTA!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayPopup;