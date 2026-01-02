'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Package } from 'lucide-react';

export default function Q2Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/Modelos/Q2/3-4-front.avif', alt: 'Audi Q2 3/4 frontal' },
    { src: '/Modelos/Q2/3-4-rear.avif', alt: 'Audi Q2 3/4 trasera' },
    { src: '/Modelos/Q2/front.avif', alt: 'Audi Q2 frontal' },
    { src: '/Modelos/Q2/side.avif', alt: 'Audi Q2 lateral' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const relatedModels = [
    { name: 'Q3', image: '/Vehiculos/Q3.webp', link: '/modelos/q3' },
    { name: 'A1 Sportback', image: '/Vehiculos/A1.webp', link: '/modelos/a1' },
    { name: 'A3 Sportback', image: '/Vehiculos/A3.webp', link: '/modelos/a3' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Modelos/Q2/Q2.avif"
            alt="Audi Q2"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0d11] via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-end pb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Q2</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Diseño dinámico, diversión excepcional
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/configurador/q2"
              className="px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
            >
              Configurar
            </Link>
            <Link
              href="/stock?modelo=q2"
              className="px-8 py-4 bg-white/10 border border-white/30 rounded-full font-semibold hover:bg-white/20"
            >
              Ver Stock
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 bg-white/10 border border-white/30 rounded-full font-semibold hover:bg-white/20"
            >
              Solicitar asesoramiento
            </Link>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            El SUV urbano perfecto
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            El SUV urbano presenta un diseño impresionante y poderoso, una amplia gama de opciones 
            de información y entretenimiento y tecnología de suspensión dinámica. Aspectos destacados 
            como la dirección progresiva y el asistente de crucero adaptativo opcional garantizan 
            comodidad y una enorme diversión al volante, no solo en la ciudad.
          </p>
        </div>
      </section>

      {/* Increíblemente divertido */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Increíblemente divertido</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Su diseño enamora. Su agilidad en movimiento sorprende. Y su versatilidad te dejan 
                sin palabras.
              </p>
              <p className="text-gray-300 leading-relaxed">
                El Audi Q2 es el SUV perfecto para ciudad, ruta y viajes.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/Q2/action.avif"
                alt="Audi Q2 en acción"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-20 px-6 max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Estilo único</h2>
          <p className="text-gray-400 text-lg">
            El diseño del Audi Q2 es un creador de tendencias que atrae todas las miradas
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20">
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Más opciones de colores y llantas disponibles en el configurador
        </p>
      </section>

      {/* Práctico y espacioso */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/Q2/trunk.avif"
                alt="Maletero Audi Q2"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Práctico y espacioso</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <Package className="w-12 h-12 text-white shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      El espacio para el equipaje en el Audi Q2 es de <strong>1.050 litros</strong> con 
                      los asientos abatidos y de <strong>405 litros</strong> sin abatirlos (50 litros menos 
                      con tracción quattro).
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                El paquete de almacenamiento y maletero y el portón trasero, ambos disponibles 
                opcionalmente, que se puede abrir y cerrar eléctricamente, garantizan aún más 
                comodidad al cargar el vehículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurador y Stock */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Configurador */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Configurador</h3>
              <p className="text-gray-300 mb-6">
                Dale tu propio estilo eligiendo cada detalle.
              </p>
              <Link
                href="/configurador/q2"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Configurar
                <ChevronRight size={20} />
              </Link>
            </div>

            {/* Stock */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ver vehículos en stock</h3>
              <p className="text-gray-300 mb-6">
                Empieza a disfrutar hoy mismo de tu Audi.
              </p>
              <Link
                href="/stock?modelo=q2"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Ver vehículos en stock cerca tuyo
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Datos técnicos */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/modelos/q2/dimensiones"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-bold mb-4">Dimensiones</h3>
              <p className="text-gray-300 mb-6">Conocé las medidas exactas del Q2</p>
              <span className="inline-flex items-center gap-2 text-white">
                Saber más
                <ChevronRight size={20} />
              </span>
            </Link>

            <Link
              href="/contacto"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-bold mb-4">Solicitar asesoramiento</h3>
              <p className="text-gray-300 mb-6">Nuestro equipo está listo para ayudarte</p>
              <span className="inline-flex items-center gap-2 text-white">
                Contactar
                <ChevronRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modelos relacionados */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Quizás también te interese…
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedModels.map((model) => (
              <Link
                key={model.name}
                href={model.link}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30">
                  <div className="relative aspect-video">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Audi {model.name}</h3>
                    <span className="inline-flex items-center gap-2 text-gray-400 group-hover:text-white">
                      Ver modelo
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu Audi Q2 te está esperando
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Elegí el acabado, el motor, la pintura, las llantas, el interior y hasta los 
            Accesorios Originales Audi que te gustaría que incluyese tu Q2.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/configurador/q2"
              className="px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
            >
              Configurar el Audi Q2
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 bg-white/10 border border-white/30 rounded-full font-semibold hover:bg-white/20"
            >
              Solicitar asesoramiento
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-6 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            El equipamiento puede ser opcional o de serie según la versión seleccionada. 
            Las cifras de consumo de combustible y emisiones de CO₂ se facilitan en intervalos 
            porque dependen del juego de ruedas y neumáticos que se utilice.
          </p>
        </div>
      </section>
    </div>
  );
}