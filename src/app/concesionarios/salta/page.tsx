import Image from 'next/image';
import { MapPin, Phone, Clock, Wrench, Car, Package, Trophy, Users } from 'lucide-react';

export default function Salta() {
  return (
    <div className="bg-[#0a0d11] text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-[#101319]">
        <div className="absolute inset-0">
          {/* RECOMENDACIÓN: Vista exterior del concesionario de Salta con Audi y Ducati visibles, o showroom con ambas marcas */}
          <Image
            src="/Concesionarios/salta/exterior.jpg"
            alt="UB Motors Salta - Concesionario Audi y Ducati"
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
                UB Motors Salta
              </span>
              <div className="h-px w-20 bg-white mt-2" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Audi Salta
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl font-light leading-relaxed">
              Excelencia automotriz en el corazón del Norte Argentino. 
              También Ducati disponible en nuestras instalaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contacto"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Contactar ahora
              </a>
              <a
                href="/modelos"
                className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Ver stock disponible
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
                  <p className="text-gray-300 font-light">Av. Belgrano 1050</p>
                  <p className="text-gray-300 font-light">Salta Capital</p>
                  <p className="text-gray-300 font-light">Salta, Argentina</p>
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
                  <p className="text-gray-300 font-light">Ventas: (387) 431-5000</p>
                  <p className="text-gray-300 font-light">Servicio: (387) 431-5001</p>
                  <a href="mailto:salta@ubmotors.com.ar" className="text-gray-300 font-light hover:text-white transition">
                    salta@ubmotors.com.ar
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
                  <p className="text-gray-300 font-light">Lun a Vie: 9:00 - 19:30</p>
                  <p className="text-gray-300 font-light">Sábados: 9:00 - 13:30</p>
                  <p className="text-gray-300 font-light">Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Sobre nosotros
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Tu Concesionario Audi y Ducati en Salta
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Único concesionario en Salta con ambas marcas premium
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Trophy className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="font-light text-xl mb-3">Concesionario Líder</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Reconocidos por Audi Argentina como mejor concesionario del NOA
              </p>
            </div>

            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Users className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="font-light text-xl mb-3">Equipo Experto</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Profesionales certificados por Audi AG con capacitación continua
              </p>
            </div>

            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Car className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="font-light text-xl mb-3">Stock Permanente</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Amplia disponibilidad de modelos Audi y Ducati para entrega inmediata
              </p>
            </div>

            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 group">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Wrench className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="font-light text-xl mb-3">Service Garantizado</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Taller oficial con garantía en todas las reparaciones y servicios
              </p>
            </div>
          </div>
          
          {/* Destacado Ducati */}
          <div className="bg-gradient-to-br from-[#BB0A30]/20 to-[#BB0A30]/5 p-8 rounded-2xl border border-[#BB0A30]/30 text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4">También Ducati</h3>
            <p className="text-gray-300 font-light max-w-2xl mx-auto">
              En nuestra sucursal de Salta también podés encontrar la gama completa de motocicletas Ducati. 
              Experiencia premium en dos y cuatro ruedas.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="bg-[#101319] py-24 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Servicios
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Servicios Integrales Audi
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Experiencia premium en cada visita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ventas */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Car className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-light mb-4">Ventas Premium</h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Asesoramiento personalizado para encontrar el Audi perfecto para vos. 
                Desde compactos deportivos hasta SUV de lujo, tenemos lo que buscás.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Test drive sin compromiso en ruta</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Planes de financiación personalizados</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Tasación y retoma de tu usado</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Gestión integral de documentación</span>
                </li>
              </ul>
              <a
                href="/modelos"
                className="block w-full bg-white text-[#101319] px-6 py-3 text-center font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full mt-6"
              >
                Consultar modelos
              </a>
            </div>

            {/* Service */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Wrench className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-light mb-4">Service Oficial</h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Mantenimiento y reparación con estándares Audi. Equipamiento de 
                última generación y repuestos originales garantizados.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Mantenimientos programados</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Diagnóstico computarizado avanzado</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Vehículo de cortesía disponible</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Garantía extendida opcional</span>
                </li>
              </ul>
              <a
                href="/post-venta"
                className="block w-full bg-white text-[#101319] px-6 py-3 text-center font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full mt-6"
              >
                Agendar service
              </a>
            </div>

            {/* Repuestos */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <Package className="text-white group-hover:text-[#101319] transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-light mb-4">Repuestos Originales</h3>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Amplio stock de repuestos y accesorios originales Audi. Calidad 
                garantizada y compatibilidad perfecta con tu vehículo.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Repuestos originales certificados</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Accesorios Audi Sport y personalización</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Llantas y neumáticos premium</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 font-light">
                  <span className="text-white mt-1">•</span>
                  <span>Envíos a todo el interior de Salta</span>
                </li>
              </ul>
              <a
                href="/post-venta"
                className="block w-full bg-white text-[#101319] px-6 py-3 text-center font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full mt-6"
              >
                Consultar repuestos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom destacado */}
      <section className="py-24 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* RECOMENDACIÓN: Showroom con Audi y Ducati visibles, o área de exhibición con ambas marcas */}
              <Image
                src="/Concesionarios/salta/exterior.jpg"
                alt="Showroom Audi y Ducati Salta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                  Showroom
                </span>
                <div className="h-px w-20 bg-white mt-2" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Showroom de Primera Línea
              </h2>
              <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed">
                Nuestro showroom en plena Av. Belgrano te invita a explorar la gama 
                completa Audi y Ducati en un ambiente diseñado para reflejar la filosofía de 
                la marca: innovación, lujo y performance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Car size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-light text-lg mb-1">Exhibición Permanente</h4>
                    <p className="text-gray-400 text-sm font-light">
                      Modelos de todas las líneas: A, Q, e-tron, Audi Sport y Ducati siempre disponibles
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-light text-lg mb-1">Atención Personalizada</h4>
                    <p className="text-gray-400 text-sm font-light">
                      Asesores expertos para guiarte en cada paso de tu compra
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="/contacto"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Agendar visita al showroom
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galería rápida */}
      <section className="bg-[#101319] py-24 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Instalaciones
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white">
              Nuestras Instalaciones
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Espacios diseñados para la mejor experiencia premium
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* RECOMENDACIÓN: Taller moderno con técnico trabajando, herramientas profesionales, elevador con Audi */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/Concesionarios/salta/taller.jpg"
                alt="Taller de servicio Audi Salta"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-2xl font-light mb-2">Taller Certificado</p>
                <p className="text-gray-300 text-sm font-light">Tecnología de punta y técnicos especializados</p>
              </div>
            </div>
            {/* RECOMENDACIÓN: Sala VIP moderna con diseño elegante, área de espera premium */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/Concesionarios/salta/sala.jpg"
                alt="Sala VIP Audi Salta"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-2xl font-light mb-2">Sala VIP</p>
                <p className="text-gray-300 text-sm font-light">Comodidad y atención premium</p>
              </div>
            </div>
            {/* <div className="relative h-62.5 rounded-lg overflow-hidden">
              <Image
                src="/concesionarios/salta/entrega.jpg"
                alt="Entrega de vehículos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Centro de Entrega</p>
              </div>
            </div> */}
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
              Ubicación Privilegiada
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Sobre Av. Belgrano, una de las principales avenidas de Salta Capital, con fácil acceso y estacionamiento.
            </p>
          </div>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.250254351405!2d-65.4195342248504!3d-24.78688287797744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3006a2ab149%3A0x8c329e44218bb0!2sAudi%20Ub%20Motors%20Salta!5e0!3m2!1ses-419!2sar!4v1767122254894!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Audi Salta"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#101319] py-24 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-12 md:p-16 text-center border border-white/10">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              ¿Listo para tu próximo Audi?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Visitanos en nuestro concesionario o contactanos por teléfono, WhatsApp o email. 
              Estamos para asesorarte en tu próxima compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3874315000"
                className="inline-block bg-white text-[#101319] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                (387) 431-5000
              </a>
              <a
                href="/contacto"
                className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Escribinos por WhatsApp
              </a>
              <a
                href="mailto:salta@ubmotors.com.ar"
                className="inline-block border-2 border-white text-white px-10 py-4 text-base font-medium hover:bg-white hover:text-[#101319] transition-all duration-300 uppercase tracking-wider rounded-full"
              >
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}