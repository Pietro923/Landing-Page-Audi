import Hero from '@/components/Home/Hero';
import ModelFilter from '@/components/Home/ModelFilter';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const tiles = [
  {
    title: 'Audi Lounge',
    href: '/es/AudiLounge/',
    image: '/Home/Conce.avif',
  },
  {
    title: 'Fórmula 1 ®',
    href: '/es/innovacion-audi/audi-sport/formula-1/',
    image: '/Home/F1-Home.avif',
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

      {/* Sección Innovación / e-movilidad */}
      <section className="py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Audi A5</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Emociones intensas</h3>
            <p className="text-xl text-gray-300 mb-8">
              Cuando lo que sientes no se puede explicar con palabras es que estás al volante del nuevo Audi A5. Potente, deportivo y con la tecnología más avanzada, siente la emoción de conducir sin límites.
            </p>
            <Link
              href="/es/modelos/?byvehicletype=BEV"
              className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition rounded inline-block uppercase tracking-wider"
            >
              Sedan
            </Link>
          </div>
          <div className="relative w-full h-96 md:h-full min-h-96 overflow-hidden rounded-lg">
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

      {/* Grid 3 columnas x 2 filas */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="group relative overflow-hidden rounded-lg aspect-square bg-gray-900"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">{tile.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Ver más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Audi A3 */}
      <section className="relative w-full h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Videos/A3.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Audi A3</h2>
          <div className="flex gap-4">
            <Link
              href="/es/modelos/a3/sedan"
              className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition rounded uppercase tracking-wider"
            >
              Sedán
            </Link>
            <Link
              href="/es/modelos/a3/sportback"
              className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition rounded uppercase tracking-wider"
            >
              Sportback
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}