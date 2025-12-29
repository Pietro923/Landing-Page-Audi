import Image from 'next/image';
import { MapPin, Phone, Clock, Wrench, Car, Package, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Salta() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 bg-[#101319]">
        <div className="absolute inset-0">
          <Image
            src="/concesionarios/salta/exterior.jpg"
            alt="Concesionario Audi Salta"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Audi Salta
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Excelencia automotriz en el corazón del Norte Argentino
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Contactar ahora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Ver stock disponible
            </Button>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <MapPin className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                <p className="text-gray-600">Av. Belgrano 1050</p>
                <p className="text-gray-600">Salta Capital</p>
                <p className="text-gray-600">Salta, Argentina</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Contacto</h3>
                <p className="text-gray-600">Ventas: (387) 431-5000</p>
                <p className="text-gray-600">Servicio: (387) 431-5001</p>
                <p className="text-gray-600">salta@ubmotors.com.ar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                <p className="text-gray-600">Lun a Vie: 9:00 - 19:30</p>
                <p className="text-gray-600">Sábados: 9:00 - 13:30</p>
                <p className="text-gray-600">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu Concesionario Audi en Salta
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 15 años representando a Audi en el norte argentino, 
              brindando experiencias premium y servicio de excelencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Concesionario Líder</h3>
              <p className="text-gray-600 text-sm">
                Reconocidos por Audi Argentina como mejor concesionario del NOA
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Equipo Experto</h3>
              <p className="text-gray-600 text-sm">
                Profesionales certificados por Audi AG con capacitación continua
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Stock Permanente</h3>
              <p className="text-gray-600 text-sm">
                Amplia disponibilidad de modelos y versiones para entrega inmediata
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Service Garantizado</h3>
              <p className="text-gray-600 text-sm">
                Taller oficial con garantía en todas las reparaciones y servicios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Servicios Integrales Audi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ventas */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ventas Premium</h3>
              <p className="text-gray-600 mb-6">
                Asesoramiento personalizado para encontrar el Audi perfecto para vos. 
                Desde compactos deportivos hasta SUV de lujo, tenemos lo que buscás.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Test drive sin compromiso en ruta</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Planes de financiación personalizados</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Tasación y retoma de tu usado</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Gestión integral de documentación</span>
                </li>
              </ul>
              <Button className="w-full bg-[#101319] hover:bg-[#1a1f2b]">
                Consultar modelos
              </Button>
            </div>

            {/* Service */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Service Oficial</h3>
              <p className="text-gray-600 mb-6">
                Mantenimiento y reparación con estándares Audi. Equipamiento de 
                última generación y repuestos originales garantizados.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Mantenimientos programados</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Diagnóstico computarizado avanzado</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Vehículo de cortesía disponible</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Garantía extendida opcional</span>
                </li>
              </ul>
              <Button className="w-full bg-[#101319] hover:bg-[#1a1f2b]">
                Agendar service
              </Button>
            </div>

            {/* Repuestos */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Repuestos Originales</h3>
              <p className="text-gray-600 mb-6">
                Amplio stock de repuestos y accesorios originales Audi. Calidad 
                garantizada y compatibilidad perfecta con tu vehículo.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Repuestos originales certificados</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Accesorios Audi Sport y personalización</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Llantas y neumáticos premium</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#101319] mt-1">•</span>
                  <span>Envíos a todo el interior de Salta</span>
                </li>
              </ul>
              <Button className="w-full bg-[#101319] hover:bg-[#1a1f2b]">
                Consultar repuestos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom destacado */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-125 rounded-lg overflow-hidden">
              <Image
                src="/concesionarios/salta/showroom-interior.jpg"
                alt="Showroom Audi Salta"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Showroom de Primera Línea
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Nuestro showroom en plena Av. Belgrano te invita a explorar la gama 
                completa Audi en un ambiente diseñado para reflejar la filosofía de 
                la marca: innovación, lujo y performance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg shrink-0">
                    <Car size={24} className="text-[#101319]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Exhibición Permanente</h4>
                    <p className="text-gray-600 text-sm">
                      Modelos de todas las líneas: A, Q, e-tron y Audi Sport siempre disponibles
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg shrink-0">
                    <Users size={24} className="text-[#101319]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Atención Personalizada</h4>
                    <p className="text-gray-600 text-sm">
                      Asesores expertos para guiarte en cada paso de tu compra
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-[#101319] hover:bg-[#1a1f2b]">
                Agendar visita al showroom
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galería rápida */}
      <section className="bg-[#101319] py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Nuestras Instalaciones
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-62.5 rounded-lg overflow-hidden">
              <Image
                src="/concesionarios/salta/taller.jpg"
                alt="Taller de servicio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Taller Certificado</p>
              </div>
            </div>
            <div className="relative h-62.5 rounded-lg overflow-hidden">
              <Image
                src="/concesionarios/salta/sala-espera.jpg"
                alt="Sala de espera"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Sala VIP</p>
              </div>
            </div>
            <div className="relative h-62.5 rounded-lg overflow-hidden">
              <Image
                src="/concesionarios/salta/entrega.jpg"
                alt="Entrega de vehículos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Centro de Entrega</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ubicación Privilegiada
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Sobre Av. Belgrano, una de las principales avenidas de Salta Capital, con fácil acceso y estacionamiento.
          </p>
          <div className="bg-gray-100 h-125 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              [Mapa interactivo - Integrar con Google Maps API]
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="bg-[#101319] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para tu próximo Audi?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Visitanos en nuestro concesionario o contactanos por teléfono, WhatsApp o email. 
              Estamos para asesorarte en tu próxima compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                (387) 431-5000
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Escribinos por WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Enviar email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}