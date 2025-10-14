'use client';

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Inicializar cliente de Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ContactFormSupabase() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error al enviar formulario:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contactar' className="max-w-xl mx-auto p-8 bg-white shadow-xl rounded-lg border-t-4 border-red-600 my-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Recibe Asesoría Gratuita
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Completa el formulario y un asesor Kaplan te contactará en menos de 24 horas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Campo Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje o Pregunta
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Mensajes de Estado */}
        {status === 'success' && (
          <p className="p-3 bg-green-100 text-green-700 rounded-lg font-medium text-center">
            ¡Gracias! Hemos recibido tu solicitud. Pronto te contactaremos.
          </p>
        )}
        {status === 'error' && (
          <p className="p-3 bg-red-100 text-red-700 rounded-lg font-medium text-center">
            Ocurrió un error. Por favor, inténtalo de nuevo más tarde.
          </p>
        )}

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white transition duration-200 
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'}`
          }
        >
          {loading ? 'Enviando...' : 'Solicitar mi Asesoría'}
        </button>
      </form>
    </div>
  );
}