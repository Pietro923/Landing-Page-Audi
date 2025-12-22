import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Contenedor de imagen de fondo */}
      <div className="absolute inset-0 z-0">
        {/* Imagen para desktop */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src="/Hero/Q5-desktop.avif"
            alt="Nuevo Audi Q5"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Imagen para mobile */}
        <div className="block md:hidden w-full h-full relative">
          <Image
            src="/Hero/Q5-mobile.avif"
            alt="Nuevo Audi Q5"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Overlay gradient para mejorar legibilidad */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Contenido del hero */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
            Nuevo Audi Q5
          </h1>

          {/* Subline */}
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-8 md:mb-10 tracking-wide">
            Incomparable
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/es/modelos/q5/"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 rounded uppercase tracking-wider shadow-lg hover:shadow-xl"
            >
              Descubrí todos los modelos Q5
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator (opcional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}