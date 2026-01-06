import Hero from '@/components/Home/Hero';
import ModelFilter from '@/components/Home/ModelFilter';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

const tiles = [
  {
    title: 'Audi Lounge',
    href: '/AudiLounge/',
    image: '/Home/Conce.avif',
  },
  {
    title: 'Fórmula 1 ®',
    href: '/es/innovacion-audi/audi-sport/formula-1/',
    image: '/Home/F1-home.avif',
  },
  {
    title: 'E-movilidad',
    href: '/es/innovacion-audi/e-movilidad/',
    image: '/Home/Etron.avif',
  },
 {
    title: 'Vehículos en stock',
    href: '/es/buscador-de-stock-nuevo/',
    image: '/Home/Q8-home.avif',
  },
  {
    title: 'Postventa',
    href: '/es/servicios-accesorios/',
    image: '/Home/PostVenta-home.avif',
  },
  {
    title: 'Red de concesionarios',
    href: '/concesionarios',
    image: '/Home/entrega-llave-Home.avif',
  },
];

export default function HomePage() {
  return (
    <main className="">
      {/* Hero Section */}
      <Hero />
      <ModelFilter />

      {/* Sección Destacada Audi A5 */}
      <section className="py-24 px-6 text-white bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Audi A5</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-gray-200">Emociones intensas</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Cuando lo que sientes no se puede explicar con palabras es que estás al volante del nuevo Audi A5. Potente, deportivo y con la tecnología más avanzada, siente la emoción de conducir sin límites.
            </p>
            <Link
              href="/modelos/A5"
              className="inline-block bg-white text-[#05141F] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Sedán
            </Link>
          </div>
          <div className="relative w-full h-125 md:h-150 overflow-hidden rounded-2xl">
            <Image
              src="/Hero/A5.avif"
              alt="Audi A5"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Sección UB Motors - Distribuidor en el Norte */}
      <section className="py-24 px-6 bg-[#0a0d11] text-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                  UB Motors
                </span>
                <div className="h-px w-20 bg-white mt-2" />
              </div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Distribuidor Oficial Audi en el Norte Argentino
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                Con más de 15 años de experiencia, UB Motors es tu concesionario oficial de Audi en Tucumán y Salta. 
                Ofrecemos la gama completa de modelos Audi con el servicio y la excelencia que nos caracteriza.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-400 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium mb-1">Tucumán - 2 Sucursales</p>
                    <p className="text-gray-400 text-sm">Centro: Santiago del Estero 902</p>
                    <p className="text-gray-400 text-sm">Yerba Buena: Av. Aconquija 1090</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-400 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium mb-1">Salta - También Ducati</p>
                    <p className="text-gray-400 text-sm">Av. Belgrano 1050</p>
                  </div>
                </div>
              </div>
              <Link
                href="/nosotros"
                className="inline-block bg-white text-[#05141F] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
              >
                Conocé más sobre nosotros
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/Concesionarios/centro/salon.JPG"
                    alt="UB Motors Tucumán Centro"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/Concesionarios/salta/exterior.jpg"
                    alt="UB Motors Salta"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/Concesionarios/yb/entrada.jpg"
                    alt="UB Motors Yerba Buena"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/Concesionarios/centro/salon2.JPG"
                    alt="UB Motors Showroom"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Servicios y Experiencias */}
      <section className="py-24 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-900"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-4">{tile.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:gap-4 transition-all">
                    Ver más
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Audi A3 */}
      <section className="relative w-full h-screen bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Videos/A3.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          <h2 className="text-6xl md:text-7xl xl:text-8xl font-light mb-6 md:mb-10 tracking-tight">Audi A3</h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">Desde U$D 48.126</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/modelos/A3"
              className="bg-white text-[#05141F] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Sedán
            </Link>
            <Link
              href="/modelos/A3"
              className="border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#05141F] transition-all duration-300 uppercase tracking-wider"
            >
              Sportback
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">Precio sin impuestos nacionales U$D 38.841</p>
        </div>
      </section>
    </main>
  );
}