// /components/HeroSection.js
'use client'; // Necesario para manejar el estado del formulario

import { useState } from 'react';

const HeroSection = () => {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    course: '',
    destination: '',
    startMonth: '',
  });

  // Función que se ejecuta cada vez que un campo del formulario cambia
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!formData.course || !formData.destination || !formData.startMonth) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Crear el mensaje para WhatsApp
    const message = `¡Hola! Me interesa estudiar en el extranjero 🌎\n\n📚 Idioma: ${formData.course}\n📍 Destino: ${formData.destination}\n📅 Inicio: ${formData.startMonth}\n\n¿Podrían enviarme más información?`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/573118572469?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative bg-gray-800 text-white flex items-center h-[85vh] min-h-[600px]">
      {/* Imagen de fondo con un overlay oscuro para que el texto sea legible */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/banner-kaplan-valle-web.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Estudia idiomas en el extranjero
          </h1>
          <p className="text-lg md:text-xl">
            Elige tu destino ideal y vive una experiencia inolvidable mientras aprendes.
          </p>
        </div>

        {/* Formulario de Cotización */}
        <form id="cotiza" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end max-w-4xl">
          <div className="text-gray-800">
            <label htmlFor="course" className="block text-sm font-medium text-gray-600">¿Qué idioma te gustaría estudiar?</label>
            <select 
              name="course" 
              id="course" 
              value={formData.course}
              onChange={handleChange} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecciona un idioma</option>
              <option value="Inglés">Inglés</option>
              <option value="Francés">Francés</option>
              <option value="Alemán">Alemán</option>
            </select>
          </div>
          <div className="text-gray-800">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-600">¿Dónde te gustaría estudiar?</label>
            <select 
              name="destination" 
              id="destination" 
              value={formData.destination}
              onChange={handleChange} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecciona un destino</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="Canadá">Canadá</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Australia">Australia</option>
              <option value="Nueva Zelanda">Nueva Zelanda</option>
              <option value="Francia">Francia</option>
              <option value="Alemania">Alemania</option>
              <option value="Suiza">Suiza</option>
            </select>
          </div>
          <div className="text-gray-800">
            <label htmlFor="startMonth" className="block text-sm font-medium text-gray-600">¿Cuándo te gustaría empezar?</label>
            <select 
              name="startMonth" 
              id="startMonth" 
              value={formData.startMonth}
              onChange={handleChange} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecciona un mes</option>
              <option value="Diciembre 2025">Diciembre 2025</option>
              <option value="Enero 2026">Enero 2026</option>
              <option value="Febrero 2026">Febrero 2026</option>
              <option value="Marzo 2026">Marzo 2026</option>
              <option value="Abril 2026">Abril 2026</option>
              <option value="Mayo 2026">Mayo 2026</option>
              <option value="Junio 2026">Junio 2026</option>
              <option value="Julio 2026">Julio 2026</option>
              <option value="Agosto 2026">Agosto 2026</option>
              <option value="Más adelante">Más adelante</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[var(--brand-orange)] text-white font-bold py-3 px-4 rounded-md hover:bg-[var(--brand-orange-hover)] transition-colors h-full">
            Cotizar
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
