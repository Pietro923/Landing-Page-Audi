'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const filters = ['Nafta', 'Sportback', 'Sedán', 'Sport', 'Allroad quattro', 'SUV'];

const models = [
  { name: 'A1', count: 1, image: '/Vehiculos/A1.webp' },        // ← Ejemplo: ajustá la extensión real
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

  return (
    <section className="py-16 px-6 max-w-screen-2xl mx-auto">
      {/* Filtros móvil */}
      <div className="lg:hidden mb-6">
        <select className="w-full border border-gray-300 rounded-md p-3">
          <option>Todos los modelos</option>
          {filters.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Filtros desktop */}
      <div className="hidden lg:flex gap-4 mb-8 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 border rounded-full transition ${
              activeFilters.includes(filter)
                ? 'bg-black text-white'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => {
              setActiveFilters((prev) =>
                prev.includes(filter)
                  ? prev.filter((f) => f !== filter)
                  : [...prev, filter]
              );
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-semibold">20 Modelos</p>
        <div className="flex gap-2">
          <button className="p-2 border rounded hover:bg-gray-100">
            <ChevronLeft />
          </button>
          <button className="p-2 border rounded hover:bg-gray-100">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Grid de modelos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {models.map((model) => (
          <button
            key={model.name}
            className="border rounded-lg p-4 hover:shadow-lg transition group text-left"
          >
            <h3 className="text-xl font-bold mb-4">{model.name}</h3>
            <div className="relative w-full h-32 mb-4"> {/* Contenedor para mantener proporción */}
              <Image
                src={model.image}
                alt={`Audi ${model.name}`}
                fill
                className="object-contain"
                priority // Opcional: carga más rápida para las visibles
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {model.count} Modelo{model.count > 1 ? 's' : ''}
              </span>
              <ChevronDown className="group-hover:translate-y-1 transition" />
            </div>
          </button>
        ))}
      </div>

      {/* Botones finales */}
      <div className="flex gap-4 justify-center">
        <a
          href="/es/modelos"
          className="px-6 py-3 border rounded-full hover:bg-gray-100 transition"
        >
          Explorar modelos
        </a>
        <a
          href="/es/modelos/comparar-modelos"
          className="px-6 py-3 border rounded-full hover:bg-gray-100 transition"
        >
          Comparar modelos
        </a>
      </div>
    </section>
  );
}