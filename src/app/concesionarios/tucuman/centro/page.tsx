import Image from 'next/image';
import { MapPin, Phone, Clock, Wrench, Car, Package } from 'lucide-react';

export default function TucumanCentro() {
  return (
    <div className="bg-[#0a0d11] text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-[#101319]">
        <div className="absolute inset-0">
          {/* RECOMENDACIÓN: Vista exterior del concesionario en el centro de Tucumán, o showroom principal con varios Audi en exposición */}
          <Image
            src="/Concesionarios/centro/salon.JPG"
            alt="UB Motors Tucumán Centro - Concesionario Audi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
        </div>
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                UB Motors Tucumán
              </span>
              <div className="h-px w-20 bg-white mt-2" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Audi Tucumán Centro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl font-light leading-relaxed">
              Tu concesionario oficial Audi en el corazón de San Miguel de Tucumán
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contacto"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Agendar cita
              </a>
              <a
                href="/modelos"
                className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Ver modelos disponibles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="bg-[#101319] py-16 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-light text-xl mb-3">Dirección</h3>
                  <p className="text-gray-300 font-light">Santiago del Estero 902</p>
                  <p className="text-gray-300 font-light">San Miguel de Tucumán</p>
                  <p className="text-gray-300 font-light">Tucumán, Argentina</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-light text-xl mb-3">Contacto</h3>
                  <p className="text-gray-300 font-light">Ventas: (381) 430-8200</p>
                  <p className="text-gray-300 font-light">Servicio: (381) 430-8201</p>
                  <a href="mailto:ventas@ubmotors.com.ar" className="text-gray-300 font-light hover:text-white transition">
                    ventas@ubmotors.com.ar
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-light text-xl mb-3">Horarios</h3>
                  <p className="text-gray-300 font-light">Lun a Vie: 9:00 - 19:00</p>
                  <p className="text-gray-300 font-light">Sábados: 9:00 - 13:00</p>
                  <p className="text-gray-300 font-light">Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Servicios
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Experiencia premium en cada visita. Desde la compra hasta el mantenimiento, 
              te acompañamos en cada etapa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Venta de vehículos */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Car className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-light mb-4">Venta de Vehículos</h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Descubrí nuestra gama completa de modelos Audi. Desde el deportivo A3 
                hasta las imponentes SUV Q7 y Q8. Asesoramiento personalizado y 
                opciones de financiación a tu medida.
              </p>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>• Vehículos 0km en stock</li>
                <li>• Test drive sin compromiso</li>
                <li>• Financiación competitiva</li>
                <li>• Retoma de tu usado</li>
              </ul>
            </div>

            {/* Service Oficial */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Wrench className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-light mb-4">Service Oficial</h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Mantenimiento y reparación con tecnología de punta. Técnicos 
                especializados y repuestos originales Audi para garantizar el 
                máximo rendimiento de tu vehículo.
              </p>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>• Mantenimiento preventivo</li>
                <li>• Reparaciones especializadas</li>
                <li>• Diagnóstico computarizado</li>
                <li>• Garantía en todos los trabajos</li>
              </ul>
            </div>

            {/* Repuestos y Accesorios */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Package className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-light mb-4">Repuestos y Accesorios</h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Amplio stock de repuestos originales y accesorios Audi. Personalizá 
                y potenciá tu Audi con productos diseñados específicamente para tu modelo.
              </p>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>• Repuestos originales certificados</li>
                <li>• Accesorios deportivos Audi Sport</li>
                <li>• Llantas y neumáticos premium</li>
                <li>• Entrega inmediata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom destacado */}
      <section className="bg-[#101319] text-white py-24 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                  Showroom
                </span>
                <div className="h-px w-20 bg-white mt-2" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Showroom Premium
              </h2>
              <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed">
                Visitá nuestras instalaciones en pleno centro de Tucumán. Un espacio 
                diseñado para que puedas explorar la innovación y el lujo que caracterizan 
                a cada modelo Audi.
              </p>
              <p className="text-gray-300 mb-8 font-light leading-relaxed">
                Contamos con área de exhibición climatizada, sala de espera confortable 
                y estacionamiento para clientes. Nuestro equipo de asesores está listo 
                para brindarte una experiencia de compra excepcional.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Visitanos hoy
              </a>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* RECOMENDACIÓN: Showroom principal con varios Audi en exposición, iluminación profesional, diseño moderno */}
              <Image
                src="/Concesionarios/centro/salon2.JPG"
                alt="Showroom Audi Tucumán Centro"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Ubicación
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Cómo llegar
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              En pleno centro de San Miguel de Tucumán, fácil acceso y estacionamiento
            </p>
          </div>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5315941683984!2d-65.2119034247788!3d-26.82303937670074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c15fb405353%3A0xad7b5aca873ac31!2sUB%20Motors!5e0!3m2!1ses-419!2sar!4v1767719930491!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Audi Tucumán Centro"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#101319] py-24 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            ¿Listo para vivir la experiencia Audi?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Agendá tu visita al concesionario o consultanos por WhatsApp. 
            Estamos para ayudarte a encontrar tu Audi ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="/contacto"
              className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}