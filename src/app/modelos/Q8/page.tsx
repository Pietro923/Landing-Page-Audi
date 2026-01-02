// Q8 INDEX PAGE
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const versionesQ8 = [
  {
    id: 'q8',
    name: 'Q8',
    image: '/Vehiculos/Q8.webp',
    description: 'SUV coupé premium con presencia imponente',
    motor: '3.0 TFSI',
    potencia: '340 CV',
    link: '/modelos/Q8/q8-55-tfsi'
  },
  {
    id: 'sq8',
    name: 'RS Q8 Performance',
    image: '/Vehiculos/SQ8.webp',
    description: 'Máxima potencia y deportividad en formato SUV',
    motor: '4.0 TFSI',
    potencia: '507 CV',
    link: '/modelos/Q8/sq8'
  },
];

export default function Q8IndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12 mt-16">
          <Link href="/modelos" className="text-gray-400 hover:text-white flex items-center gap-2 mb-6">
            <ChevronRight size={16} className="rotate-180" />
            Volver a todos los modelos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Audi Q8</h1>
          <p className="text-gray-400 text-lg">Elegí la versión que mejor se adapte a tu estilo</p>
        </div>

        {/* Contador */}
        <div className="mb-8">
          <p className="text-xl">
            <span className="font-bold">{versionesQ8.length}</span>
            <span className="text-gray-400"> versiones disponibles</span>
          </p>
        </div>

        {/* Grid de versiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {versionesQ8.map((version) => (
            <Link
              key={version.id}
              href={version.link}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all">
                
                {/* Imagen */}
                <div className="relative w-full h-56 bg-black/20">
                  <Image
                    src={version.image}
                    alt={version.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{version.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{version.description}</p>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-500">Motor: {version.motor}</span>
                    <span className="text-gray-500">{version.potencia}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm font-medium group-hover:text-white transition">
                      Ver detalles
                    </span>
                    <ChevronRight size={20} className="text-gray-400 group-hover:text-white transition" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">¿Necesitás ayuda para elegir?</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
          >
            Contactá con un asesor
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}