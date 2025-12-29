'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Gauge, Zap, Shield, Wifi, Settings } from 'lucide-react';

export default function A3SedanPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: '/Modelos/A3/3-4-front.avif', alt: 'Audi A3 Sedán 3/4 frontal' },
    { src: '/Modelos/A3/3-4-rear.avif', alt: 'Audi A3 Sedán 3/4 trasera' },
    { src: '/Modelos/A3/front.avif', alt: 'Audi A3 Sedán frontal' },
    { src: '/Modelos/A3/side.avif', alt: 'Audi A3 Sedán lateral' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const relatedModels = [
    { name: 'A3 Sportback', image: '/Vehiculos/A3.webp', link: '/modelos/a3-sportback' },
    { name: 'Q2', image: '/Vehiculos/Q2.webp', link: '/modelos/q2' },
    { name: 'A1 Sportback', image: '/Vehiculos/A1.webp', link: '/modelos/a1' },
  ];

  const destacados = [
    {
      icon: <Gauge className="w-16 h-16" />,
      title: 'Virtual Cockpit',
      desc: 'Panel de instrumentos digital completamente configurable'
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: 'Cambio S tronic',
      desc: 'Doble embrague de 7 velocidades para cambios deportivos'
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Audi pre sense',
      desc: 'Sistema de seguridad preventiva de última generación'
    },
    {
      icon: <Wifi className="w-16 h-16" />,
      title: 'MMI touch',
      desc: 'Sistema de infoentretenimiento táctil intuitivo'
    },
    {
      icon: <Settings className="w-16 h-16" />,
      title: 'Audi drive select',
      desc: 'Personaliza tu experiencia de conducción'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Modelos/A3/a3-sedan.avif"
            alt="Audi A3 Sedán"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0d11] via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-end pb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">A3 Sedán</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl">
            Sofisticadamente deportivo
          </p>
          <p className="text-lg text-gray-400 mb-2">
            Desde <span className="text-2xl font-bold text-white">U$D 48.126</span>
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Precio sin impuestos nacionales: U$D 38.841
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/configurador/a3"
              className="px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
            >
              Configurar
            </Link>
            <Link
              href="/stock?modelo=a3"
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
            Elegante, expresivo y lleno de detalles
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            El nuevo Audi A3 Sedán te ofrece un espacio lleno de posibilidades. 
            Con su inconfundible estilo y diseño frontal totalmente renovado, 
            muestra su carácter único en cada detalle.
          </p>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-20 px-6 max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dinamismo expresivo</h2>
          <p className="text-gray-400 text-lg">
            El nuevo color rojo Progressive metalizado en combinación con el acabado Advanced 
            subraya la apariencia deportiva y elegante del Audi A3 Sedán
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

      {/* Aún más sorprendente */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aún más sorprendente</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Con un diseño frontal totalmente renovado, la nueva parrilla Audi Singleframe 
                sin marco, las grandes entradas de aire y los aros Audi en 2D hacen que el 
                Audi A3 Sedán sea tan único como tú.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cada elemento ha sido diseñado para expresar sofisticación y deportividad, 
                desde la parrilla hasta las líneas laterales que fluyen con elegancia.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/A3/front-design.avif"
                alt="Diseño frontal A3 Sedán"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amor a primera vista */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/A3/exterior-colors.avif"
                alt="Colores A3 Sedán"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Amor a primera vista</h2>
              <p className="text-gray-300 leading-relaxed">
                Elige el Audi A3 Sedán en el color que más se ajuste a tu personalidad y 
                seduce a todos con su dinámico diseño. Quédate, por ejemplo, con el nuevo 
                color rojo Progressive metalizado para causar una excelente primera impresión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espacio para más */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Espacio para más</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                El Audi A3 Sedán dispone de una amplia capacidad que ofrece <strong>425 litros</strong> de 
                almacenamiento ampliables hasta los <strong>1.200 litros</strong> con los asientos traseros abatidos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Una versatilidad que además se puede complementar con la posibilidad de abatir 
                los asientos traseros en una proporción de 40:20:40.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/Modelos/A3/trunk.avif"
                alt="Maletero A3 Sedán"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detalles elegantes */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Modelos/A3/interior.avif"
                alt="Interior A3 Sedán"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Detalles elegantes</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cada elemento del Audi A3 Sedán es una muestra de su sofisticado diseño. 
                Un elegante estilo que se puede apreciar en la nueva consola central, 
                las salidas de aire cromadas del paquete de climatización en su versión plus 
                (disponible como opcional).
              </p>
              <p className="text-gray-300 leading-relaxed">
                También destaca el renovado cambio de marchas S tronic y los acabados premium 
                en cada superficie del habitáculo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destacados tecnológicos */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tecnología que te conecta
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destacados.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
              >
                <div className="text-white mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placer de conducción */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Placer de conducción incluido
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Elige el tipo de conducción que deseas realizar a través del sistema Audi drive select. 
            Y gracias al cambio S tronic de doble embrague disfruta de cambios de marcha deportivos 
            con el confort de un cambio automático.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Zap className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Cambio S tronic</h3>
              <p className="text-gray-400">
                Sistema de doble embrague que combina eficiencia y deportividad 
                en cada cambio de marcha
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Settings className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Audi drive select</h3>
              <p className="text-gray-400">
                Personaliza tu experiencia eligiendo entre modos comfort, auto, 
                dynamic e individual
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
              <h3 className="text-2xl font-bold mb-4">Configuralo a tu manera</h3>
              <p className="text-gray-300 mb-6">
                Dale tu propio estilo eligiendo cada detalle del A3 Sedán.
              </p>
              <Link
                href="/configurador/a3"
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
                Empieza a disfrutar hoy mismo de tu Audi A3 Sedán.
              </p>
              <Link
                href="/stock?modelo=a3"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300"
              >
                Vehículos nuevos
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Datos técnicos y dimensiones */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/modelos/a3/dimensiones"
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/30"
            >
              <h3 className="text-2xl font-bold mb-4">Dimensiones</h3>
              <p className="text-gray-300 mb-6">Conocé las medidas exactas del A3 Sedán</p>
              <span className="inline-flex items-center gap-2 text-white">
                Saber más
                <ChevronRight size={20} />
              </span>
            </Link>

            <Link
              href="/modelos/a3/datos-tecnicos"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dale tu propio estilo
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Elegí el acabado, el motor, la pintura, las llantas, el interior y hasta los 
            Accesorios Originales Audi que te gustaría que incluyese tu A3 Sedán.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/configurador/a3"
              className="px-8 py-4 bg-white text-[#101319] rounded-full font-semibold hover:bg-gray-200"
            >
              Configurar el Audi A3 Sedán
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
            Imagen no contractual. Corresponde a Audi A3 Sedán. Origen: Alemania. Equipamiento según versión. 
            No incluye gastos administrativos, de flete, ni patentamiento. Las cifras de consumo de combustible 
            y emisiones de CO₂ se facilitan en intervalos porque dependen del juego de ruedas y neumáticos que 
            se utilice. Válido en todos los concesionarios oficiales de la República Argentina del 01/06/2025 
            al 30/06/2025 inclusive. Para mayor información consultar en www.audi.com.ar – Volkswagen Argentina S.A., 
            CUIT 30-50401884-5 Av. De Las Industrias N° 3101, Gral. Pacheco, Pcia. de Buenos Aires.
          </p>
        </div>
      </section>
    </div>
  );
}