// /components/HeroSection.js
'use client'; // Necesario para manejar el estado del formulario

import { useState } from 'react';

const HeroSection = () => {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    course: '',
    destination: '',
    duration: '',
  });

  // Función que se ejecuta cada vez que un campo del formulario cambia
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    // Aquí iría la lógica para enviar los datos a un servidor o API
    alert(`Datos de cotización: ${JSON.stringify(formData)}`);
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
            Estudia inglés en el extranjero
          </h1>
          <p className="text-lg md:text-xl">
            Elige tu destino ideal y vive una experiencia inolvidable mientras aprendes.
          </p>
        </div>

        {/* Formulario de Cotización */}
        <form id="cotiza" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end max-w-4xl">
          <div className="text-gray-800">
            <label htmlFor="course" className="block text-sm font-medium text-gray-600">¿Qué te gustaría estudiar?</label>
            <select name="course" id="course" onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Selecciona un curso</option>
              <option value="ingles-general">Inglés General</option>
              <option value="ingles-intensivo">Inglés Intensivo</option>
            </select>
          </div>
          <div className="text-gray-800">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-600">Elige un destino</label>
            <select name="destination" id="destination" onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Selecciona un destino</option>
              <option value="usa">Estados Unidos</option>
              <option value="uk">Reino Unido</option>
              <option value="canada">Canadá</option>
            </select>
          </div>
          <div className="text-gray-800">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-600">¿Por cuánto tiempo?</label>
            <select name="duration" id="duration" onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">Selecciona duración</option>
              <option value="2-semanas">2 semanas</option>
              <option value="4-semanas">4 semanas</option>
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
