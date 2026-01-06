import Image from 'next/image';
import { MapPin, Phone, Clock, Wrench, Car, Package, Zap, Shield } from 'lucide-react';

export default function YerbaBuena() {
  return (
    <div className="bg-[#0a0d11] text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-[#101319]">
        <div className="absolute inset-0">
          {/* RECOMENDACIÓN: Vista exterior moderna del concesionario de Yerba Buena, o showroom con área e-tron visible, cargadores de e-tron */}
          <Image
            src="/Concesionarios/yb/entrada.jpg"
            alt="UB Motors Yerba Buena - Concesionario Audi"
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
                UB Motors Yerba Buena
              </span>
              <div className="h-px w-20 bg-white mt-2" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Audi Yerba Buena
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl font-light leading-relaxed">
              Innovación y tecnología en la zona más exclusiva de Tucumán. 
              Centro especializado e-tron con estación de carga rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contacto"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Agendar test drive
              </a>
              <a
                href="/modelos"
                className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Explorar e-tron
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
                  <p className="text-gray-300 font-light">Av. Aconquija 1090</p>
                  <p className="text-gray-300 font-light">Yerba Buena</p>
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
                  <p className="text-gray-300 font-light">Ventas: (381) 425-9000</p>
                  <p className="text-gray-300 font-light">Servicio: (381) 425-9001</p>
                  <a href="mailto:yerbabuena@ubmotors.com.ar" className="text-gray-300 font-light hover:text-white transition">
                    yerbabuena@ubmotors.com.ar
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
                  <p className="text-gray-300 font-light">Lun a Vie: 9:00 - 20:00</p>
                  <p className="text-gray-300 font-light">Sábados: 9:00 - 14:00</p>
                  <p className="text-gray-300 font-light">Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Premium */}
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
              Servicios Exclusivos
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Instalaciones de última generación para brindarte la mejor experiencia 
              Audi en Yerba Buena.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Showroom Premium */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Car className="text-white group-hover:text-[#101319] transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3">Showroom Premium</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Exhibición de la gama completa Audi, incluyendo los últimos modelos 
                y versiones exclusivas. Ambiente climatizado y diseño de vanguardia.
              </p>
            </div>

            {/* E-tron Center */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Zap className="text-white group-hover:text-[#101319] transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3">E-tron Center</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Centro especializado en movilidad eléctrica. Descubrí la línea e-tron 
                con estación de carga rápida y asesoramiento técnico especializado.
              </p>
            </div>

            {/* Service Center */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Wrench className="text-white group-hover:text-[#101319] transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3">Service Center</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Taller de servicio con 6 bahías equipadas con tecnología de diagnóstico 
                Audi. Atención express y servicio de cortesía mientras esperás.
              </p>
            </div>

            {/* Parts & Accessories */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group">
              <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Package className="text-white group-hover:text-[#101319] transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-light mb-3">Parts Center</h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Almacén de repuestos originales con stock permanente. Accesorios 
                Audi Sport, sistemas de performance y productos de personalización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: E-tron Experience */}
      <section className="bg-[#101319] text-white py-24 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
              {/* RECOMENDACIÓN: Estación de carga e-tron con Audi e-tron conectado, o área de e-tron center con cargadores visibles */}
              <Image
                src="/Concesionarios/yb/showroom.jpg"
                alt="Audi e-tron center Yerba Buena"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium tracking-wider uppercase">NUEVO</span>
              </div>
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                  E-tron Center
                </span>
                <div className="h-px w-20 bg-white mt-2" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Centro E-tron
              </h2>
              <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed">
                Somos el primer concesionario de la región con infraestructura completa 
                para vehículos eléctricos Audi e-tron. Estación de carga rápida de 150 kW 
                disponible para clientes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Zap className="shrink-0 mt-1 text-white" size={20} />
                  <div>
                    <p className="font-light text-lg mb-1">Carga ultrarrápida</p>
                    <p className="text-gray-400 text-sm font-light">80% de carga en 30 minutos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Shield className="shrink-0 mt-1 text-white" size={20} />
                  <div>
                    <p className="font-light text-lg mb-1">Servicio especializado</p>
                    <p className="text-gray-400 text-sm font-light">Técnicos certificados en tecnología eléctrica</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Car className="shrink-0 mt-1 text-white" size={20} />
                  <div>
                    <p className="font-light text-lg mb-1">Flota de prueba</p>
                    <p className="text-gray-400 text-sm font-light">Test drive extendido de toda la gama e-tron</p>
                  </div>
                </li>
              </ul>
              <a
                href="/modelos"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Conocer e-tron
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones modernas */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Instalaciones
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Instalaciones de Vanguardia
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Un espacio pensado para ofrecer la mejor experiencia premium en cada visita.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* RECOMENDACIÓN: Audi Lounge moderno con diseño elegante, área de espera premium */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/Lounge/Audi-Lounge.jpg"
                alt="Audi Lounge Yerba Buena"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-light mb-2">Audi Lounge</h3>
                <p className="text-gray-300 text-sm font-light">Sala VIP con WiFi, café premium y workstations</p>
              </div>
            </div>

            {/* RECOMENDACIÓN: Centro de entrega con ceremonia, área especial para entregas */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/Home/entrega-llave-Home.avif"
                alt="Centro de Entrega Yerba Buena"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-light mb-2">Centro de Entrega</h3>
                <p className="text-gray-300 text-sm font-light">Ceremonia exclusiva para tu nuevo Audi</p>
              </div>
            </div>

            {/* RECOMENDACIÓN: Estacionamiento amplio y techado */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/Concesionarios/yb/showroom.jpg"
                alt="Estacionamiento Yerba Buena"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-light mb-2">Estacionamiento</h3>
                <p className="text-gray-300 text-sm font-light">Amplio y techado para clientes y visitas</p>
              </div>
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
              Ubicación Estratégica
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Sobre Av. Aconquija, la principal arteria de Yerba Buena, con fácil acceso y amplio estacionamiento.
            </p>
          </div>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.777865796798!2d-65.28661272477909!3d-26.815200776705495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cd5690509a3%3A0xb247403e30e2ea7a!2sAudi%20Ub%20Motors!5e0!3m2!1ses-419!2sar!4v1767720123046!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Audi Yerba Buena"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#101319] text-white py-24 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Visitá nuestro concesionario en Yerba Buena
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Experimentá la tecnología Audi en persona. Test drive, asesoramiento personalizado 
            y financiación especial te esperan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
            >
              Agendar visita
            </a>
            <a
              href="/contacto"
              className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}