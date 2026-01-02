'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const filters = ['Nafta', 'Sportback', 'Sedán', 'Sport', 'Allroad quattro', 'SUV'];

const models = [
  { name: 'A1', count: 1, image: '/Vehiculos/A1.webp' },
  { name: 'A3', count: 6, image: '/Vehiculos/A3.webp' },
  { name: 'A5', count: 1, image: '/Vehiculos/A5.webp' },
  { name: 'A6', count: 2, image: '/Vehiculos/A6.webp' },
  { name: 'Q2', count: 1, image: '/Vehiculos/Q2.webp' },
  { name: 'Q3', count: 3, image: '/Vehiculos/Q3.webp' },
  { name: 'Q5', count: 3, image: '/Vehiculos/Q5.webp' },
  { name: 'Q7', count: 1, image: '/Vehiculos/Q7.webp' },
  { name: 'Q8', count: 2, image: '/Vehiculos/Q8.webp' },
];

export default function ModelFilter() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <section className="py-20 px-6 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl  text-white mb-4">
          Descubrí tu Audi
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explorá nuestra gama completa de modelos diseñados para cada estilo de vida
        </p>
      </div>

      {/* Filtros móvil */}
      <div className="lg:hidden mb-8">
        <div className="relative">
          <select className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white appearance-none cursor-pointer">
            <option className="bg-[#101319] text-white">Todos los modelos</option>
            {filters.map((f) => (
              <option key={f} className="bg-[#101319] text-white">{f}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white" size={20} />
        </div>
      </div>

      {/* Filtros desktop */}
      <div className="hidden lg:flex gap-3 mb-12 flex-wrap justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`
              px-6 py-3 rounded-full 
              ${
                activeFilters.includes(filter)
                  ? 'bg-white text-[#101319] shadow-lg'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Header con contador */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-2xl  text-white">
            {models.length} <span className="text-gray-400 font-normal">Modelos disponibles</span>
          </p>
          {activeFilters.length > 0 && (
            <p className="text-sm text-gray-400 mt-1">
              Filtros activos: {activeFilters.join(', ')}
            </p>
          )}
        </div>
        
        <div className="hidden md:flex gap-2">
          <button 
            className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 text-white"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 text-white"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Grid de modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {models.map((model) => (
          <Link
            key={model.name}
            href={`/modelos/${model.name.toLowerCase()}`}
            className="group"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30">
              {/* Nombre */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl  text-white">Audi {model.name}</h3>
                <ChevronDown className="text-white" size={24} />
              </div>

              {/* Imagen */}
              <div className="relative w-full h-40 mb-6 bg-black/20 rounded-xl overflow-hidden">
                <Image
                  src={model.image}
                  alt={`Audi ${model.name}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Info */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {model.count} {model.count === 1 ? 'Versión' : 'Versiones'}
                </span>
                <span className="text-xs text-white/60 group-hover:text-white">
                  Ver detalles →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/modelos"
          className="w-full sm:w-auto px-8 py-4 bg-white text-[#101319] rounded-full  hover:bg-gray-200 text-center"
        >
          Explorar todos los modelos
        </Link>
        <Link
          href="/modelos/comparar"
          className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full  hover:bg-white/20 text-center"
        >
          Comparar modelos
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-4">¿Necesitás ayuda para elegir?</p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 text-white hover:text-gray-300"
        >
          Contactá con un asesor
          <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}