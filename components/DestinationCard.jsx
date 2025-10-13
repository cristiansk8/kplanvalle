'use client';

import React, { useState } from 'react';
import { Globe, MapPin, GraduationCap, Users, Star, ArrowRight, Search, Building2, Award, Clock } from 'lucide-react';
import Image from 'next/image';

export default function KaplanDestinationsInternal() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    // Estados Unidos
    {
      id: 1,
      city: 'New York',
      country: 'USA',
      flag: '🇺🇸',
      image: '/kaplan-destination-country-new-york.jpg',
      description: 'Estudia en el corazón de Manhattan con vistas al Central Park',
      highlights: ['Big City', 'Career Focus', 'Cultural Hub'],
      programs: ['Inglés Intensivo', 'Business English', 'TOEFL Prep'],
      schools: 2,
      featured: true
    },
    {
      id: 2,
      city: 'Los Angeles',
      country: 'USA',
      flag: '🇺🇸',
      image: '/kaplan-destination-country-losangeles.jpg',
      description: 'Aventura hollywoodense con sol, playa y entretenimiento',
      highlights: ['Beach Life', 'Entertainment', 'Sunny Weather'],
      programs: ['General English', 'Academic Year', 'Exam Preparation'],
      schools: 1
    },
    {
      id: 3,
      city: 'San Francisco',
      country: 'USA',
      flag: '🇺🇸',
      image: '/kaplan-destination-country-san-francisco.jpg',
      description: 'Innovación y tecnología en la ciudad de la bahía',
      highlights: ['Tech Hub', 'Multicultural', 'Iconic Landmarks'],
      programs: ['Inglés Intensivo', 'Business English', 'Academic English'],
      schools: 1
    },
    {
      id: 4,
      city: 'Boston',
      country: 'USA',
      flag: '🇺🇸',
      image: '/kaplan-destination-country-boston.jpg',
      description: 'Historia y educación en Harvard Square',
      highlights: ['University Town', 'Historic', 'Academic Excellence'],
      programs: ['Academic Year', 'University Prep', 'TOEFL/IELTS'],
      schools: 2
    },
    // Reino Unido
    {
      id: 5,
      city: 'London',
      country: 'UK',
      flag: '🇬🇧',
      image: '/kaplan-destination-country-london.jpg',
      description: 'La capital mundial con historia, cultura y oportunidades',
      highlights: ['World Capital', 'History', 'Career Hub'],
      programs: ['Inglés Intensivo', 'Business English', 'IELTS Prep'],
      schools: 3,
      featured: true
    },
    {
      id: 6,
      city: 'Oxford',
      country: 'UK',
      flag: '🇬🇧',
      image: '/kaplan-destination-country-oxford.jpg',
      description: 'Ciudad universitaria histórica con excelencia académica',
      highlights: ['University City', 'Historic', 'Academic'],
      programs: ['Academic Year', 'University Prep', 'Inglés Intensivo'],
      schools: 1
    },
    {
      id: 7,
      city: 'Manchester',
      country: 'UK',
      flag: '🇬🇧',
      image: '/kaplan-destination-country-manchester.jpg',
      description: 'Ciudad moderna con rica herencia industrial y cultural',
      highlights: ['Music Scene', 'Football', 'Modern City'],
      programs: ['Inglés Intensivo', 'Business English', 'General English'],
      schools: 1
    },
    // Canadá
    {
      id: 8,
      city: 'Toronto',
      country: 'Canada',
      flag: '🇨🇦',
      image: '/kaplan-destination-country-toronto.jpg',
      description: 'La ciudad más multicultural de Canadá',
      highlights: ['Multicultural', 'Safe', 'Modern'],
      programs: ['Inglés Intensivo', 'Business English', 'Academic Year'],
      schools: 1
    },
    {
      id: 9,
      city: 'Vancouver',
      country: 'Canada',
      flag: '🇨🇦',
      image: '/kaplan-destination-country-vancouver.jpg',
      description: 'Montañas, océano y naturaleza espectacular',
      highlights: ['Nature', 'Outdoor Activities', 'Quality of Life'],
      programs: ['General English', 'IELTS Prep', 'Academic English'],
      schools: 1
    },
    // Irlanda
    {
      id: 10,
      city: 'Dublin',
      country: 'Ireland',
      flag: '🇮🇪',
      image: '/kaplan-destination-country-dublin.jpg',
      description: 'Historia, literatura y hospitalidad irlandesa',
      highlights: ['Friendly', 'Historic', 'Literary Heritage'],
      programs: ['Inglés Intensivo', 'Business English', 'Academic Year'],
      schools: 1
    },
    // Francia
    {
      id: 11,
      city: 'Paris',
      country: 'France',
      flag: '🇫🇷',
      image: '/kaplan-destination-country-paris.jpg',
      description: 'La ciudad del amor y las luces, perfecta para aprender francés',
      highlights: ['Romance', 'Art', 'Culture'],
      programs: ['Francés Intensivo', 'Business French', 'DELF Prep'],
      schools: 1
    },
    // Alemania
    {
      id: 12,
      city: 'Berlin',
      country: 'Germany',
      flag: '🇩🇪',
      image: '/kaplan-destination-country-berlin.jpg',
      description: 'Historia moderna, arte urbano y multiculturalidad',
      highlights: ['History', 'Urban Culture', 'Tech Scene'],
      programs: ['Alemán Intensivo', 'Business German', 'TestDaF Prep'],
      schools: 1
    }
  ];

  const countries = [
    { code: 'all', name: 'Todos los Destinos', flag: '🌍' },
    { code: 'USA', name: 'Estados Unidos', flag: '🇺🇸' },
    { code: 'UK', name: 'Reino Unido', flag: '🇬🇧' },
    { code: 'Canada', name: 'Canadá', flag: '🇨🇦' },
    { code: 'Ireland', name: 'Irlanda', flag: '🇮🇪' },
    { code: 'France', name: 'Francia', flag: '🇫🇷' },
    { code: 'Germany', name: 'Alemania', flag: '🇩🇪' }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesCountry = selectedCountry === 'all' || dest.country === selectedCountry;
    const matchesSearch = dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Consistente con tu slider */}
      <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Destinos Kaplan
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
              Aprende inglés, francés o alemán en destinos increíbles alrededor del mundo
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-50 max-w-3xl mx-auto">
              Ciudades vibrantes, pueblos costeros o campus universitarios. Elige tu experiencia ideal.
            </p>
          </div>
        </div>
      </header>

      {/* Stats Section - CON TUS ICONOS MEJORADOS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Escuelas */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-all duration-300">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">39+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Escuelas</div>
              <div className="text-xs text-gray-500 mt-1">En todo el mundo</div>
            </div>

            {/* Países */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mb-4 group-hover:bg-red-600 transition-all duration-300">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">9</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Países</div>
              <div className="text-xs text-gray-500 mt-1">3 continentes</div>
            </div>

            {/* Experiencia */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-all duration-300">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">80+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Años</div>
              <div className="text-xs text-gray-500 mt-1">De experiencia</div>
            </div>

            {/* Estudiantes */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mb-4 group-hover:bg-red-600 transition-all duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">500K+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Estudiantes</div>
              <div className="text-xs text-gray-500 mt-1">Satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar ciudad o país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white shadow-sm"
              />
            </div>

            {/* Country Filter */}
            <div className="flex gap-2 flex-wrap w-full lg:w-auto">
              {countries.map(country => (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country.code)}
                  className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${selectedCountry === country.code
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                    }`}
                >
                  <span className="mr-1">{country.flag}</span>
                  <span className="hidden sm:inline">{country.name}</span>
                  <span className="sm:hidden">{country.code === 'all' ? 'Todos' : country.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando <span className="font-bold text-blue-600">{filteredDestinations.length}</span> destino{filteredDestinations.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                  <Image
                    src={dest.image}
                    alt={`Estudiar en ${dest.city}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Featured badge */}
                  {dest.featured && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  {/* Country flag badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 flex items-center gap-1 shadow-lg">
                    <span>{dest.flag}</span>
                    <span>{dest.country}</span>
                  </div>

                  {/* Gradient overlay with city name */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{dest.city}</h3>
                    {dest.schools > 1 && (
                      <p className="text-sm text-gray-200 mt-1">
                        {dest.schools} escuelas disponibles
                      </p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{dest.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Programs */}
                  <div className="border-t pt-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Programas:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dest.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-red-600/10 text-red-700 px-2 py-1 rounded font-medium"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/573118572469?text=Hola%2C%20me%20interesa%20estudiar%20en%20${encodeURIComponent(dest.city)}%20${dest.flag}%0A%0APor%20favor%2C%20env%C3%ADenme%20m%C3%A1s%20informaci%C3%B3n%20sobre%3A%0A-%20Escuelas%20disponibles%0A-%20Programas%3A%20${encodeURIComponent(dest.programs.join(', '))}%0A-%20Costos%20y%20fechas%0A%0A%C2%A1Gracias!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-lg"
                  >
                    Ver Escuelas en {dest.city}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para tu aventura de aprendizaje?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Solicita tu asesoría personalizada GRATIS y encuentra el destino perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573118572469?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20asesor%C3%ADa%20gratuita%20para%20estudiar%20en%20el%20extranjero%20%F0%9F%8C%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105"
            >
              Solicitar Asesoría Gratis
            </a>
            <a
              href="https://wa.me/573118572469?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20destinos%20disponibles%20para%20estudiar%20idiomas%20%E2%9C%88%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all"
            >
              Ver Todos los Destinos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}