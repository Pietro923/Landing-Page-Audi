import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

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
    imagen: '/concesionarios/centro/salon2.jpg',
    url: '/concesionarios/tucuman/centro',
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
    imagen: '/concesionarios/yb/entrada.jpg',
    url: '/concesionarios/tucuman/yerba-buena',
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
  },
];

export default function Concesionarios() {
  return (
    <div className="bg-[#0a0d11] text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-[#101319]">
        <div className="absolute inset-0">
          {/* RECOMENDACIÓN: Imagen del showroom principal de UB Motors con varios Audi en exposición, o vista exterior moderna del concesionario */}
          <Image
            src="/Concesionarios/centro/salon.JPG"
            alt="UB Motors - Concesionarios Audi en el Norte Argentino"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                UB Motors
              </span>
              <div className="h-px w-20 bg-white mt-2" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Nuestros Concesionarios
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Red de concesionarios oficiales Audi en el Norte Argentino. 
              Tres ubicaciones estratégicas en Tucumán y Salta para brindarte la mejor experiencia premium.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Sobre nosotros
            </span>
            <div className="h-px w-20 bg-white mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            UB Motors - Tu Partner Audi
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Con más de 15 años de experiencia, somos el concesionario oficial Audi 
            en Tucumán y Salta. Tres ubicaciones estratégicas para brindarte el mejor 
            servicio premium, asesoramiento experto y la gama completa de modelos Audi.
          </p>
        </div>
      </section>

      {/* Grid de Concesionarios */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Nuestras Sucursales
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Elegí la ubicación más cercana a vos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {concesionarios.map((concesionario) => (
              <Link
                key={concesionario.id}
                href={concesionario.url}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-500"
              >
                {/* Imagen */}
                <div className="relative h-64 bg-black/20 overflow-hidden">
                  {/* RECOMENDACIÓN DE IMÁGENES:
                      - Tucumán Centro: Vista exterior del concesionario o showroom con Audi en exposición
                      - Yerba Buena: Vista moderna del concesionario o área de e-tron
                      - Salta: Vista exterior con Audi y mención visual de Ducati */}
                  <Image
                    src={concesionario.imagen}
                    alt={concesionario.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20">
                    {concesionario.destacado}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">{concesionario.nombre}</h3>
                  <p className="text-gray-400 mb-6 font-light">{concesionario.ciudad}, {concesionario.provincia}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3 text-gray-300">
                      <MapPin size={18} className="shrink-0 mt-0.5 text-gray-500" />
                      <span className="text-sm font-light">{concesionario.direccion}</span>
                    </div>
                    <div className="flex gap-3 text-gray-300">
                      <Phone size={18} className="shrink-0 mt-0.5 text-gray-500" />
                      <span className="text-sm font-light">{concesionario.telefono}</span>
                    </div>
                    <div className="flex gap-3 text-gray-300">
                      <Clock size={18} className="shrink-0 mt-0.5 text-gray-500" />
                      <span className="text-sm font-light">{concesionario.horario}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white group-hover:text-gray-300 transition-colors">
                    <span className="text-sm font-medium uppercase tracking-wider">Ver detalles</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios generales */}
      <section className="bg-[#101319] text-white py-24 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Servicios
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Servicios en Todos Nuestros Concesionarios
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Experiencia premium en cada visita
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 group-hover:text-[#101319] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-light text-xl mb-3">Venta de 0km</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Toda la gama Audi con stock permanente y entrega inmediata
              </p>
            </div>

            <div className="text-center group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 group-hover:text-[#101319] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-light text-xl mb-3">Service Oficial</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Mantenimiento y reparación con garantía oficial Audi
              </p>
            </div>

            <div className="text-center group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 group-hover:text-[#101319] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-light text-xl mb-3">Repuestos Originales</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Stock permanente de repuestos y accesorios certificados
              </p>
            </div>

            <div className="text-center group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 group-hover:text-[#101319] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-light text-xl mb-3">Financiación</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Planes de financiación a medida y retoma de usados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de ubicaciones */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Ubicaciones
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Encontranos en el Mapa
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Tres ubicaciones estratégicas para estar más cerca tuyo
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 h-[600px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5315941683984!2d-65.2119034247788!3d-26.82303937670074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c15fb405353%3A0xad7b5aca873ac31!2sUB%20Motors!5e0!3m2!1ses-419!2sar!4v1767719930491!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicaciones UB Motors"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#101319] py-24 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            ¿Necesitás asesoramiento?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Contactá con el concesionario más cercano o dejanos tu consulta. 
            Nuestro equipo está listo para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
            >
              Contactar por WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}