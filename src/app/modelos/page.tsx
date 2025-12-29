'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const modelos = [
  { id: 'A1', name: 'A1', count: 1, image: '/Vehiculos/A1.webp' },
  { id: 'A3', name: 'A3', count: 6, image: '/Vehiculos/A3.webp' },
  { id: 'A5', name: 'A5', count: 1, image: '/Vehiculos/A5.webp' },
  { id: 'A6', name: 'A6', count: 2, image: '/Vehiculos/A6.webp' },
  { id: 'Q2', name: 'Q2', count: 1, image: '/Vehiculos/Q2.webp' },
  { id: 'Q3', name: 'Q3', count: 3, image: '/Vehiculos/Q3.webp' },
  { id: 'Q5', name: 'Q5', count: 3, image: '/Vehiculos/Q5.webp' },
  { id: 'Q7', name: 'Q7', count: 1, image: '/Vehiculos/Q7.webp' },
  { id: 'Q8', name: 'Q8', count: 2, image: '/Vehiculos/Q8.webp' },
];

const tiposMotor = [
  { id: 'ICEV', name: 'ICEV', label: 'Motor de combustión' }
];

const modelosFiltro = [
  { id: 'a1', name: 'A1' },
  { id: 'a3', name: 'A3' },
  { id: 'a5', name: 'A5' },
  { id: 'a6', name: 'A6' },
  { id: 'q2', name: 'Q2' },
  { id: 'q3', name: 'Q3' },
  { id: 'q5', name: 'Q5' },
  { id: 'q7', name: 'Q7' },
  { id: 'q8', name: 'Q8' },
];

const carrocerias = [
  { id: 'sportback', name: 'sportback', label: 'Sportback' },
  { id: 'sport', name: 'sport', label: 'Sport' },
  { id: 'suv', name: 'suv', label: 'SUV' },
  { id: 'limo', name: 'limo', label: 'Sedán' },
];

export default function ModelosPage() {
  const [selectedFilters, setSelectedFilters] = useState<{
    motor: string[];
    modelos: string[];
    carroceria: string[];
  }>({
    motor: [],
    modelos: [],
    carroceria: [],
  });

  const toggleFilter = (category: 'motor' | 'modelos' | 'carroceria', value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16">Todos los modelos</h1>
          <p className="text-gray-400 text-lg">Explorá nuestra gama completa de vehículos Audi</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar de Filtros */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              
              {/* Tipo de Motor */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <h3 className="font-bold text-lg mb-4">Tipo de Motor</h3>
                <div className="flex flex-wrap gap-2">
                  {tiposMotor.map((tipo) => (
                    <label 
                      key={tipo.id} 
                      className={`
                        inline-flex items-center px-4 py-2 rounded-full cursor-pointer
                        ${selectedFilters.motor.includes(tipo.id)
                          ? 'bg-white text-[#101319]'
                          : 'bg-white/10 border border-white/20 hover:bg-white/20'
                        }
                      `}
                    >
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.motor.includes(tipo.id)}
                        onChange={() => toggleFilter('motor', tipo.id)}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium">{tipo.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Modelos */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <h3 className="font-bold text-lg mb-4">Modelos</h3>
                <div className="flex flex-wrap gap-2">
                  {modelosFiltro.map((modelo) => (
                    <label 
                      key={modelo.id} 
                      className={`
                        inline-flex items-center px-4 py-2 rounded-full cursor-pointer
                        ${selectedFilters.modelos.includes(modelo.id)
                          ? 'bg-white text-[#101319]'
                          : 'bg-white/10 border border-white/20 hover:bg-white/20'
                        }
                      `}
                    >
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.modelos.includes(modelo.id)}
                        onChange={() => toggleFilter('modelos', modelo.id)}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium">{modelo.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Carrocería */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <h3 className="font-bold text-lg mb-4">Carrocería</h3>
                <div className="flex flex-wrap gap-2">
                  {carrocerias.map((carroceria) => (
                    <label 
                      key={carroceria.id} 
                      className={`
                        inline-flex items-center px-4 py-2 rounded-full cursor-pointer
                        ${selectedFilters.carroceria.includes(carroceria.id)
                          ? 'bg-white text-[#101319]'
                          : 'bg-white/10 border border-white/20 hover:bg-white/20'
                        }
                      `}
                    >
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.carroceria.includes(carroceria.id)}
                        onChange={() => toggleFilter('carroceria', carroceria.id)}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium">{carroceria.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Enlaces útiles */}
              <div className="flex flex-col gap-3">
                <Link 
                  href="/buscador-de-stock-nuevo"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-2"
                >
                  Buscador de autos nuevos
                  <ChevronRight size={14} />
                </Link>
                <Link 
                  href="/autos-usados"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-2"
                >
                  Mercado de autos usados
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Grid de Modelos */}
          <main className="flex-1">
            
            {/* Contador */}
            <div className="mb-8">
              <p className="text-xl">
                <span className="font-bold">{modelos.length}</span>
                <span className="text-gray-400"> modelos disponibles</span>
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {modelos.map((modelo) => (
                <Link
                  key={modelo.id}
                  href={`/modelos/${modelo.id}`}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30">
                    
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/10">
                      <h3 className="text-2xl font-bold">Audi {modelo.name}</h3>
                    </div>

                    {/* Imagen */}
                    <div className="relative w-full h-48 bg-black/20">
                      <Image
                        src={modelo.image}
                        alt={`Audi ${modelo.name}`}
                        fill
                        className="object-contain p-6"
                      />
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 flex items-center justify-between border-t border-white/10">
                      <span className="text-sm text-gray-400">
                        {modelo.count} {modelo.count === 1 ? 'Versión' : 'Versiones'}
                      </span>
                      <ChevronRight size={20} className="text-gray-400 group-hover:text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA final */}
            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-4">¿No encontrás lo que buscás?</p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
              >
                Contactá con un asesor
                <ChevronRight size={20} />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}