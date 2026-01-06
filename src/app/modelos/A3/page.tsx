'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const versionesA3 = [
  {
    id: 'sedan',
    name: 'A3 Sedán',
    image: '/Vehiculos/A3-sedan.webp',
    description: 'Elegancia deportiva de cuatro puertas',
    motor: '35 TFSI',
    potencia: '150 CV',
    link: '/modelos/A3/sedan'
  },
  {
    id: 'sportback',
    name: 'A3 Sportback',
    image: '/Vehiculos/A3-sportback.webp',
    description: 'Versatilidad y estilo en cinco puertas',
    motor: '35 TFSI',
    potencia: '150 CV',
    link: '/modelos/A3/sportback'
  },
  {
    id: 'S3 Sportback',
    name: 'S3 Sportback',
    image: '/Vehiculos/A3-sedan-sline.webp',
    description: 'Deportividad premium con acabado S line',
    motor: '35 TFSI',
    potencia: '150 CV',
    link: '/modelos/A3/sedan-35-tfsi-s-line'
  },
  {
    id: 'S3 Sedán',
    name: 'S3 Sedán',
    image: '/Vehiculos/A3-sportback-sline.webp',
    description: 'Estilo S line en formato Sportback',
    motor: '35 TFSI',
    potencia: '150 CV',
    link: '/modelos/A3/sportback-35-tfsi-s-line'
  },
  {
    id: 'RS 3 Sportback',
    name: 'RS 3 Sportback',
    image: '/Vehiculos/S3-sedan.webp',
    description: 'Performance quattro de alto rendimiento',
    motor: '2.0 TFSI',
    potencia: '310 CV',
    link: '/modelos/A3/s3-sedan'
  },
  {
    id: 'RS 3 Sedán',
    name: 'RS 3 Sedán',
    image: '/Vehiculos/S3-sportback.webp',
    description: 'Deportividad extrema en formato Sportback',
    motor: '2.0 TFSI',
    potencia: '310 CV',
    link: '/modelos/A3/s3-sportback'
  },
];

export default function A3IndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12 mt-16">
          <Link href="/modelos" className="text-gray-400 hover:text-white flex items-center gap-2 mb-6">
            <ChevronRight size={16} className="rotate-180" />
            Volver a todos los modelos
          </Link>
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Modelo
            </span>
            <div className="h-px w-20 bg-white mt-2" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Audi A3</h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">Elegí la versión que mejor se adapte a tu estilo</p>
        </div>

        {/* Contador */}
        <div className="mb-10">
          <p className="text-3xl md:text-4xl font-light">
            <span className="text-white">{versionesA3.length}</span>
            <span className="text-gray-400 font-light"> versiones disponibles</span>
          </p>
        </div>

        {/* Grid de versiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {versionesA3.map((version) => (
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
                  <h3 className="text-2xl md:text-3xl font-light mb-2">{version.name}</h3>
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
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#101319] rounded-full font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
          >
            Contactá con un asesor
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}