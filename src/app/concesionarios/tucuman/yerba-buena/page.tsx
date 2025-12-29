import Image from 'next/image';
import { MapPin, Phone, Clock, Wrench, Car, Package, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function YerbaBuena() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 bg-[#101319]">
        <div className="absolute inset-0">
          <Image
            src="/concesionarios/tucuman/yerbabuena-exterior.jpg"
            alt="Concesionario Audi Yerba Buena"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Audi Yerba Buena
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Innovación y tecnología en la zona más exclusiva de Tucumán
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Agendar test drive
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Explorar e-tron
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
                <p className="text-gray-600">Av. Aconquija 1090</p>
                <p className="text-gray-600">Yerba Buena</p>
                <p className="text-gray-600">Tucumán, Argentina</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Contacto</h3>
                <p className="text-gray-600">Ventas: (381) 425-9000</p>
                <p className="text-gray-600">Servicio: (381) 425-9001</p>
                <p className="text-gray-600">yerbabuena@ubmotors.com.ar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                <p className="text-gray-600">Lun a Vie: 9:00 - 20:00</p>
                <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                <p className="text-gray-600">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Premium */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Servicios Exclusivos
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Instalaciones de última generación para brindarte la mejor experiencia 
            Audi en Yerba Buena.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Showroom Premium */}
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-[#101319] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Car className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Showroom Premium</h3>
              <p className="text-gray-600 text-sm">
                Exhibición de la gama completa Audi, incluyendo los últimos modelos 
                y versiones exclusivas. Ambiente climatizado y diseño de vanguardia.
              </p>
            </div>

            {/* E-tron Center */}
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-[#101319] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-tron Center</h3>
              <p className="text-gray-600 text-sm">
                Centro especializado en movilidad eléctrica. Descubrí la línea e-tron 
                con estación de carga rápida y asesoramiento técnico especializado.
              </p>
            </div>

            {/* Service Center */}
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-[#101319] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Service Center</h3>
              <p className="text-gray-600 text-sm">
                Taller de servicio con 6 bahías equipadas con tecnología de diagnóstico 
                Audi. Atención express y servicio de cortesía mientras esperás.
              </p>
            </div>

            {/* Parts & Accessories */}
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-xl transition">
              <div className="bg-[#101319] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Package className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Parts Center</h3>
              <p className="text-gray-600 text-sm">
                Almacén de repuestos originales con stock permanente. Accesorios 
                Audi Sport, sistemas de performance y productos de personalización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: E-tron Experience */}
      <section className="bg-[#101319] text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-100 rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/concesionarios/tucuman/etron-charging.jpg"
                alt="Audi e-tron charging"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">NUEVO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Centro E-tron
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Somos el primer concesionario de la región con infraestructura completa 
                para vehículos eléctricos Audi e-tron. Estación de carga rápida de 150 kW 
                disponible para clientes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Zap className="shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Carga ultrarrápida</p>
                    <p className="text-gray-400 text-sm">80% de carga en 30 minutos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Servicio especializado</p>
                    <p className="text-gray-400 text-sm">Técnicos certificados en tecnología eléctrica</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Flota de prueba</p>
                    <p className="text-gray-400 text-sm">Test drive extendido de toda la gama e-tron</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Conocer e-tron
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones modernas */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Instalaciones de Vanguardia
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Un espacio pensado para ofrecer la mejor experiencia premium en cada visita.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-75 rounded-lg overflow-hidden group">
              <Image
                src="/concesionarios/tucuman/lounge.jpg"
                alt="Customer lounge"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Audi Lounge</h3>
                  <p className="text-gray-300 text-sm">Sala VIP con WiFi, café premium y workstations</p>
                </div>
              </div>
            </div>

            <div className="relative h-75 rounded-lg overflow-hidden group">
              <Image
                src="/concesionarios/tucuman/delivery-center.jpg"
                alt="Delivery center"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Centro de Entrega</h3>
                  <p className="text-gray-300 text-sm">Ceremonia exclusiva para tu nuevo Audi</p>
                </div>
              </div>
            </div>

            <div className="relative h-75 rounded-lg overflow-hidden group">
              <Image
                src="/concesionarios/tucuman/parking.jpg"
                alt="Parking"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Estacionamiento</h3>
                  <p className="text-gray-300 text-sm">Amplio y techado para clientes y visitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ubicación Estratégica
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Sobre Av. Aconquija, la principal arteria de Yerba Buena, con fácil acceso y amplio estacionamiento.
          </p>
          <div className="bg-gray-200 h-125 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              [Mapa interactivo - Integrar con Google Maps API]
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#101319] text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visitá nuestro concesionario en Yerba Buena
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Experimentá la tecnología Audi en persona. Test drive, asesoramiento personalizado 
            y financiación especial te esperan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Agendar visita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}