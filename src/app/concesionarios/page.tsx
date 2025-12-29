import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const concesionarios = [
  {
    id: 'tucuman-centro',
    nombre: 'Audi Tucumán Centro',
    ciudad: 'San Miguel de Tucumán',
    direccion: 'Santiago del Estero 902',
    provincia: 'Tucumán',
    telefono: '(381) 430-8200',
    email: 'ventas@ubmotors.com.ar',
    horario: 'Lun a Vie: 9:00 - 19:00',
    imagen: '/concesionarios/tucuman/centro-exterior.jpg',
    url: '/concesionarios/tucuman/centro',
    destacado: 'Showroom principal en el centro',
  },
  {
    id: 'tucuman-yerbabuena',
    nombre: 'Audi Yerba Buena',
    ciudad: 'Yerba Buena',
    direccion: 'Av. Aconquija 1090',
    provincia: 'Tucumán',
    telefono: '(381) 425-9000',
    email: 'yerbabuena@ubmotors.com.ar',
    horario: 'Lun a Vie: 9:00 - 20:00',
    imagen: '/concesionarios/tucuman/yerbabuena-exterior.jpg',
    url: '/concesionarios/tucuman/yerba-buena',
    destacado: 'Centro e-tron especializado',
  },
  {
    id: 'salta',
    nombre: 'Audi Salta',
    ciudad: 'Salta Capital',
    direccion: 'Av. Belgrano 1050',
    provincia: 'Salta',
    telefono: '(387) 431-5000',
    email: 'salta@ubmotors.com.ar',
    horario: 'Lun a Vie: 9:00 - 19:30',
    imagen: '/concesionarios/salta/exterior.jpg',
    url: '/concesionarios/salta',
    destacado: 'Referente del Norte Argentino',
  },
];

export default function Concesionarios() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-100 bg-[#101319]">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40">
          <Image
            src="/concesionarios/hero-concesionarios.jpg"
            alt="Red de concesionarios Audi"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Nuestros Concesionarios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Red de concesionarios oficiales Audi en el Norte Argentino
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            UB Motors - Tu Partner Audi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Con más de 15 años de experiencia, somos el concesionario oficial Audi 
            en Tucumán y Salta. Tres ubicaciones estratégicas para brindarte el mejor 
            servicio premium, asesoramiento experto y la gama completa de modelos Audi.
          </p>
        </div>
      </section>

      {/* Grid de Concesionarios */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {concesionarios.map((concesionario) => (
              <div
                key={concesionario.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen */}
                <div className="relative h-62.5 bg-gray-200">
                  <Image
                    src={concesionario.imagen}
                    alt={concesionario.nombre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#101319] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {concesionario.destacado}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{concesionario.nombre}</h3>
                  <p className="text-gray-500 mb-4">{concesionario.ciudad}, {concesionario.provincia}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3 text-gray-600">
                      <MapPin size={20} className="shrink-0 mt-0.5" />
                      <span className="text-sm">{concesionario.direccion}</span>
                    </div>
                    <div className="flex gap-3 text-gray-600">
                      <Phone size={20} className="shrink-0 mt-0.5" />
                      <span className="text-sm">{concesionario.telefono}</span>
                    </div>
                    <div className="flex gap-3 text-gray-600">
                      <Clock size={20} className="shrink-0 mt-0.5" />
                      <span className="text-sm">{concesionario.horario}</span>
                    </div>
                  </div>

                  <Link href={concesionario.url}>
                    <Button className="w-full bg-[#101319] hover:bg-[#1a1f2b] group">
                      Ver más detalles
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios generales */}
      <section className="bg-[#101319] text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Servicios en Todos Nuestros Concesionarios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Venta de 0km</h3>
              <p className="text-gray-400 text-sm">
                Toda la gama Audi con stock permanente y entrega inmediata
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Service Oficial</h3>
              <p className="text-gray-400 text-sm">
                Mantenimiento y reparación con garantía oficial Audi
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Repuestos Originales</h3>
              <p className="text-gray-400 text-sm">
                Stock permanente de repuestos y accesorios certificados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Financiación</h3>
              <p className="text-gray-400 text-sm">
                Planes de financiación a medida y retoma de usados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de ubicaciones */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Encontranos en el Mapa
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Tres ubicaciones estratégicas para estar más cerca tuyo
          </p>
          <div className="bg-gray-100 h-150 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              [Mapa interactivo con las 3 ubicaciones - Integrar con Google Maps API]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitás asesoramiento?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Contactá con el concesionario más cercano o dejanos tu consulta. 
            Nuestro equipo está listo para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#101319] hover:bg-[#1a1f2b]">
              Contactar por WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              Solicitar información
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}