'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function A1Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/Modelos/A1/3-4-front.webp', alt: 'Audi A1 Sportback 3/4 frontal' },
    { src: '/Modelos/A1/3-4-rear.webp', alt: 'Audi A1 Sportback 3/4 trasera' },
    { src: '/Modelos/A1/front.webp', alt: 'Audi A1 Sportback frontal' },
    { src: '/Modelos/A1/side.webp', alt: 'Audi A1 Sportback lateral' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const relatedModels = [
    { name: 'A3 Sedán', image: '/Vehiculos/A3.webp', link: '/modelos/a3' },
    { name: 'Q2', image: '/Vehiculos/Q2.webp', link: '/modelos/q2' },
    { name: 'A3 Sportback', image: '/Vehiculos/A3.webp', link: '/modelos/a3' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Modelos/A1/AA1_181004_4-L.avif"
            alt="Audi A1 Sportback"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0d11] via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-end pb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">A1 Sportback</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Ágil y deportivo. El Audi A1 Sportback es un compacto que impresiona tanto por su diseño deportivo como por sus amplias opciones de equipamiento.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/configurador/a1"
              className="px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
            >
              Configurar
            </Link>
            <Link
              href="/stock?modelo=a1"
              className="px-8 py-4 bg-white/10 border border-white/30 rounded-full font-semibold hover:bg-white/20"
            >
              Ver stock
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

      {/* Galería de Imágenes */}
      <section className="py-20 px-6 max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dinamismo exclusivo</h2>
          <p className="text-gray-400 text-lg">
            El Audi A1 Sportback sorprende por sus líneas fluidas y convence por sus excelentes acabados.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20">
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Controles */}
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

          {/* Indicadores */}
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

      {/* Tu Audi, tu estilo */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu Audi, tu estilo</h2>
              <p className="text-gray-300 leading-relaxed">
                El Rojo Progresivo metalizado, el Azul Navarra metalizado, el Gris Flecha efecto Perla y otros cinco tonos de pintura están disponibles para que elijas el color que mejor te define. Y si quieres darle tu toque personal puedes elegir el techo color Gris Manhattan metalizado o el Negro Mythos metalizado. Y si lo deseas, personaliza también los faldones laterales y las carcasas de los retrovisores exteriores con colores de contraste.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/A1/exterior-colors.webp"
                alt="Colores Audi A1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Centrado en el conductor */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/A1/interior.webp"
                alt="Interior Audi A1"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Centrado en el conductor</h2>
              <p className="text-gray-300 leading-relaxed">
                El Audi A1 Sportback es pura deportividad ideada para hacerte disfrutar cada segundo. Desde el diseño de las boquillas de ventilación hasta los instrumentos digitales, todo ha sido diseñado con un fuerte componente deportivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sube de nivel */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sube de nivel</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Equipa tu Audi A1 Sportback con el sistema opcional MMI navegación plus con MMI touch con mapas de ciudades en 3D y contrólalo a través del panel táctil.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/A1/mmi-system.webp"
                alt="Sistema MMI Audi A1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disfruta más */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Disfruta más</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Elige entre las diferentes motorizaciones y siente su deportividad gracias al potente 35 TFSI S tronic con 110 kW (150 CV).
          </p>
          <Link
            href="/configurador/a1"
            className="inline-block px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
          >
            Iniciar configuración
          </Link>
        </div>
      </section>

      {/* Configurador y Stock */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Configurador */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Configurador</h3>
              <p className="text-gray-300 mb-6">
                Dale tu propio estilo eligiendo cada detalle.
              </p>
              <Link
                href="/configurador/a1"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Configuralo
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
                href="/stock?modelo=a1"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Vehículos nuevos
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Datos técnicos */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/modelos/A1/dimensiones"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-bold mb-4">Dimensiones</h3>
              <p className="text-gray-300 mb-6">Conocé las medidas exactas del A1 Sportback</p>
              <span className="inline-flex items-center gap-2 text-white">
                Saber más
                <ChevronRight size={20} />
              </span>
            </Link>

            <Link
              href="/modelos/A1/datos-tecnicos"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-bold mb-4">Datos técnicos</h3>
              <p className="text-gray-300 mb-6">Especificaciones completas del vehículo</p>
              <span className="inline-flex items-center gap-2 text-white">
                Ver datos
                <ChevronRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modelos relacionados */}
      <section className="py-20 px-6 bg-white/5">
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
                      Saber más
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
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Personaliza hasta el último detalle
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Elegí el acabado, el motor, la pintura, las llantas, el interior y hasta los Accesorios Originales Audi que te gustaría que incluyese tu Audi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/configurador/a1"
              className="px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
            >
              Configurar el Audi A1 Sportback
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
          <p className="text-xs text-gray-500 text-center">
            Las cifras de consumo de combustible y emisiones de CO₂ se facilitan en intervalos porque dependen del juego de ruedas y neumáticos que se utilice.
          </p>
        </div>
      </section>
    </div>
  );
}