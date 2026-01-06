'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Zap, Package, Weight } from 'lucide-react';

export default function Q7Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/Modelos/Q7/3-4-front.avif', alt: 'Audi Q7 3/4 frontal' },
    { src: '/Modelos/Q7/3-4-rear.avif', alt: 'Audi Q7 3/4 trasera' },
    { src: '/Modelos/Q7/front.avif', alt: 'Audi Q7 frontal' },
    { src: '/Modelos/Q7/side.avif', alt: 'Audi Q7 lateral' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const specs = [
    {
      icon: <Zap className="w-12 h-12" />,
      value: '250 kW',
      label: 'Potencia máxima'
    },
    {
      icon: <Package className="w-12 h-12" />,
      value: '1.993 l',
      label: 'Almacenamiento (5 plazas)',
      sublabel: 'Hasta 1.908 l con 7 plazas'
    },
    {
      icon: <Weight className="w-12 h-12" />,
      value: '3.500 kg',
      label: 'Capacidad de remolque máxima'
    },
  ];

  const relatedModels = [
    { name: 'Q8 SUV', image: '/Vehiculos/Q8.webp', link: '/modelos/q8' },
    { name: 'Q8 e-tron', image: '/Vehiculos/Q8-etron.webp', link: '/modelos/q8-etron' },
    { name: 'Q8 e-tron Sportback', image: '/Vehiculos/Q8-etron-sportback.webp', link: '/modelos/q8-etron-sportback' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Modelos/Q7/q7-hero.avif"
            alt="Audi Q7 SUV"
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
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">Q7</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
            Poder sin límites
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/configurador/q7"
              className="px-10 py-4 bg-white text-[#101319] rounded-full font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Configurar
            </Link>
            <Link
              href="/stock?modelo=q7"
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
            Todo lo que deseas
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Con una potente tracción quattro y diseño deportivo, unas proporciones impresionantes 
            y espacio para hasta siete personas, el Audi Q7 SUV te ofrece todo lo que deseas.
          </p>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-20 px-6 max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Unas dimensiones impresionantes</h2>
          <p className="text-gray-400 text-lg">
            Las proporciones del Audi Q7 SUV impresionan. Las generosas dimensiones del exterior 
            continúan en el interior con espacio para hasta siete personas
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

      {/* Especificaciones destacadas */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6 text-white">
                  {spec.icon}
                </div>
                <p className="text-4xl font-light mb-2">{spec.value}</p>
                <p className="text-gray-400 text-lg">{spec.label}</p>
                {spec.sublabel && (
                  <p className="text-gray-500 text-sm mt-2">{spec.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poder y elegancia */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Poder y elegancia, unidos</h2>
              <p className="text-gray-300 leading-relaxed">
                El nuevo Audi Q7 SUV muestra su ADN off-road con la clásica arquitectura quattro 
                y una poderosa línea exterior. Un diseño que incluye una nueva y llamativa parrilla 
                Audi Singleframe y aros Audi con aspecto plano 2D que ofrecen un nuevo estilo a la gama Q.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/Q7/design.avif"
                alt="Diseño Audi Q7"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deportivo de principio a fin */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/Q7/rear-design.avif"
                alt="Parte trasera Audi Q7"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Deportivo de principio a fin</h2>
              <p className="text-gray-300 leading-relaxed">
                Los difusores con salidas de escape integradas indican la potencia del Audi Q7 SUV. 
                Los aros Audi en aspecto 2D delante son una muestra clara del nuevo lenguaje de diseño. 
                Y los elementos de diseño S line opcionales, como el spoiler de techo S, completan la 
                apariencia exclusiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espacio para hasta siete plazas */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Espacio para hasta siete plazas</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Haz espacio para hasta siete personas con la tercera fila de asientos. Además, los 
                soportes ISOFIX para asientos infantiles con correa superior están disponibles para 
                todos los asientos traseros.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Y si necesitas espacio de almacenamiento, abatiendo la segunda y la tercera fila de 
                asientos dispondrás de unos impresionantes <strong>1.908 litros</strong>.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/Q7/interior.avif"
                alt="Interior Audi Q7"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Versatilidad dinámica */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Versatilidad dinámica</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Con unas impresionantes prestaciones deportivas, amplias capacidades off-road y la 
            posibilidad de remolcar hasta 3,5 toneladas, el Audi Q7 SUV te ofrece el mejor 
            rendimiento deportivo y una gran sensación de libertad al volante.
          </p>
        </div>
      </section>

      {/* Diversión asegurada */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/Q7/quattro.avif"
                alt="Tracción quattro Audi Q7"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Diversión asegurada</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                El Audi Q7 SUV incorpora de serie la legendaria tracción quattro que te ofrece un 
                control preciso y una tracción insuperable en todas las situaciones.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Unido a una gran distancia hasta el suelo de <strong>254 milímetros</strong>, la 
                diversión está asegurada en todos los terrenos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurador y Stock */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Configurador */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-4">A tu medida</h3>
              <p className="text-gray-300 mb-6">
                Dale tu propio estilo eligiendo cada detalle.
              </p>
              <Link
                href="/configurador/q7"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Configúralo
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
                href="/stock?modelo=q7"
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
              href="/modelos/q7/dimensiones"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-light mb-4">Dimensiones</h3>
              <p className="text-gray-300 mb-6">Conocé las medidas exactas del Q7 SUV</p>
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

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Personaliza hasta el último detalle
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Elegí el acabado, el motor, la pintura, las llantas, el interior y hasta los 
            Accesorios Originales Audi que te gustaría que incluyese tu Audi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/configurador/q7"
              className="px-10 py-4 bg-white text-[#101319] rounded-full font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Configurar el Audi Q7 SUV
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

      {/* Disclaimer */}
      <section className="py-8 px-6 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs text-gray-500 text-center leading-relaxed mb-4">
            Las cifras de consumo de combustible y emisiones de CO₂ se facilitan en intervalos 
            porque dependen del juego de ruedas y neumáticos que se utilice.
          </p>
          <p className="text-xs text-gray-500 text-center leading-relaxed mb-4">
            El equipo mencionado es una opción disponible con un cargo extra. La funcionalidad 
            puede variar según la disponibilidad en diferentes países y la configuración del vehículo.
          </p>
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Ten en cuenta que los asistentes solo funcionan dentro de los límites del sistema y 
            brindan asistencia durante la conducción. Sin embargo, el conductor sigue siendo 
            responsable de conducir el vehículo y debe estar atento en todo momento.
          </p>
        </div>
      </section>
    </div>
  );
}