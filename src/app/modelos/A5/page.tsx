'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Shield, Camera, Gauge } from 'lucide-react';

export default function A5Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/Modelos/A5/frente.jpg', alt: 'Audi A5 Sedán 3/4 frontal' },
    { src: '/Modelos/A5/atras.jpg', alt: 'Audi A5 Sedán 3/4 trasera' },
    { src: '/Modelos/A5/frentereal.jpg', alt: 'Audi A5 Sedán frontal' },
    { src: '/Modelos/A5/costado.jpg', alt: 'Audi A5 Sedán lateral' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const relatedModels = [
    { name: 'A3 Sedán', image: '/Vehiculos/A3.webp', link: '/modelos/a3' },
    { name: 'A3 Sportback', image: '/Vehiculos/A3.webp', link: '/modelos/a3' },
    { name: 'Q3', image: '/Vehiculos/Q3.webp', link: '/modelos/q3' },
  ];

  const destacados = [
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Seguridad avanzada',
      desc: 'Control de crucero adaptativo, asistente de carril y frenado automático'
    },
    {
      icon: <Camera className="w-16 h-16" />,
      title: 'Cámaras 360°',
      desc: 'Visión completa del entorno para aparcamientos seguros'
    },
    {
      icon: <Gauge className="w-16 h-16" />,
      title: 'Asistente de salida',
      desc: 'Sistema inteligente de cambio de carril para máxima seguridad'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Modelos/A5/A5-stock-new.avif"
            alt="Audi A5 Sedán"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-end pb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Modelo
            </span>
            <div className="h-px w-20 bg-white mt-2" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">A5 Sedán</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
            Emociones intensas
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/configurador/a5"
              className="px-10 py-4 bg-white text-[#101319] rounded-full font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Configurar
            </Link>
            <Link
              href="/stock?modelo=a5"
              className="px-10 py-4 bg-white/10 border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300 uppercase tracking-wider"
            >
              Ver Stock
            </Link>
            <Link
              href="/contacto"
              className="px-10 py-4 bg-white/10 border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300 uppercase tracking-wider"
            >
              Solicitar asesoramiento
            </Link>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Cuando lo que sientes no se puede explicar con palabras
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Es que estás al volante del nuevo Audi A5. Potente, deportivo y con la tecnología 
            más avanzada, siente la emoción de conducir sin límites.
          </p>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-20 px-6 max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Dinamismo que sorprende</h2>
          <p className="text-gray-400 text-lg">
            Con una fluidez de líneas perfectamente sincronizada, el nuevo diseño del Audi A5 
            es pura elegancia deportiva
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

      {/* Deportividad elegante */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Deportividad elegante</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Las proporciones del nuevo Audi A5 irradian una deportividad extraordinaria que 
                se refuerza con el diseño de un nuevo portón trasero que se abre con la luneta 
                trasera, facilitando el acceso al maletero.
              </p>
              <p className="text-gray-300 leading-relaxed">
                El techo se extiende hacia la parte trasera en un elegante arco que fluye hacia 
                la luneta posterior de estilo coupé y termina en un portón trasero corto con un 
                llamativo alerón.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/A5/side-design.avif"
                alt="Diseño lateral A5 Sedán"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Puro carácter */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/A5/front-design.avif"
                alt="Diseño frontal A5 Sedán"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Puro carácter</h2>
              <p className="text-gray-300 leading-relaxed">
                El frontal del vehículo, con una gran anchura y profundidad visuales, ofrece una 
                imagen especialmente deportiva que se realza con la parrilla Audi Singleframe con 
                estructura tridimensional de panal de abeja, faros finos y estilizados y entradas 
                de aire de diseño aerodinámico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espacio para sorprenderse */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Espacio para sorprenderse</h2>
              <p className="text-gray-300 leading-relaxed">
                El espacioso interior del Audi A5 es todo un espectáculo visual en el que elegancia 
                y conectividad se unen en armonía para ofrecer un elevado nivel de confort.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/A5/interior.avif"
                alt="Interior A5 Sedán"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología de seguridad */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Tecnología extra para tu seguridad
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            La avanzada tecnología del Audi A5 ofrece sistemas de asistencia que aumentan la 
            seguridad en carretera y facilitan los aparcamientos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {destacados.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
              >
                <div className="text-white mb-6">{item.icon}</div>
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurador y Stock */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-4">Configuralo a tu manera</h3>
              <p className="text-gray-300 mb-6">
                Dale tu propio estilo eligiendo cada detalle del A5 Sedán.
              </p>
              <Link
                href="/configurador/a5"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Configurar
                <ChevronRight size={20} />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ver vehículos en stock</h3>
              <p className="text-gray-300 mb-6">
                Empieza a disfrutar hoy mismo de tu Audi A5 Sedán.
              </p>
              <Link
                href="/stock?modelo=a5"
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
              href="/modelos/a5/dimensiones"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-light mb-4">Dimensiones</h3>
              <p className="text-gray-300 mb-6">Conocé las medidas exactas del A5 Sedán</p>
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
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center tracking-tight">
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
                    <h3 className="text-xl font-light mb-2">Audi {model.name}</h3>
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

      {/* Disclaimer */}
      <section className="py-8 px-6 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            El equipamiento puede ser opcional o de serie según la versión seleccionada. El conductor 
            es totalmente responsable de comprobar las piezas de desgaste relevantes para el mantenimiento. 
            Los sistemas funcionan solo dentro de los límites del sistema y brindan asistencia durante la 
            conducción. Sin embargo, el conductor sigue siendo responsable de conducir el vehículo.
          </p>
        </div>
      </section>
    </div>
  );
}