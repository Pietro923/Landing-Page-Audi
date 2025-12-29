import Image from 'next/image';
import { MapPin, Phone, Clock, Wrench, Car, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TucumanCentro() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 bg-[#101319]">
        <div className="absolute inset-0">
          <Image
            src="/concesionarios/tucuman/centro-exterior.jpg"
            alt="Concesionario Audi Tucumán Centro"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Audi Tucumán Centro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Tu concesionario oficial Audi en el corazón de San Miguel de Tucumán
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Agendar cita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Ver modelos disponibles
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
                <p className="text-gray-600">Santiago del Estero 902</p>
                <p className="text-gray-600">San Miguel de Tucumán</p>
                <p className="text-gray-600">Tucumán, Argentina</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Contacto</h3>
                <p className="text-gray-600">Ventas: (381) 430-8200</p>
                <p className="text-gray-600">Servicio: (381) 430-8201</p>
                <p className="text-gray-600">ventas@ubmotors.com.ar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-[#101319] shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                <p className="text-gray-600">Lun a Vie: 9:00 - 19:00</p>
                <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                <p className="text-gray-600">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Experiencia premium en cada visita. Desde la compra hasta el mantenimiento, 
            te acompañamos en cada etapa.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Venta de vehículos */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Venta de Vehículos</h3>
              <p className="text-gray-600 mb-6">
                Descubrí nuestra gama completa de modelos Audi. Desde el deportivo A3 
                hasta las imponentes SUV Q7 y Q8. Asesoramiento personalizado y 
                opciones de financiación a tu medida.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Vehículos 0km en stock</li>
                <li>• Test drive sin compromiso</li>
                <li>• Financiación competitiva</li>
                <li>• Retoma de tu usado</li>
              </ul>
            </div>

            {/* Service Oficial */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Service Oficial</h3>
              <p className="text-gray-600 mb-6">
                Mantenimiento y reparación con tecnología de punta. Técnicos 
                especializados y repuestos originales Audi para garantizar el 
                máximo rendimiento de tu vehículo.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Mantenimiento preventivo</li>
                <li>• Reparaciones especializadas</li>
                <li>• Diagnóstico computarizado</li>
                <li>• Garantía en todos los trabajos</li>
              </ul>
            </div>

            {/* Repuestos y Accesorios */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="bg-[#101319] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Repuestos y Accesorios</h3>
              <p className="text-gray-600 mb-6">
                Amplio stock de repuestos originales y accesorios Audi. Personalizá 
                y potenciá tu Audi con productos diseñados específicamente para tu modelo.
              </p>
              <ul className="space-y-2 text-gray-600">
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
      <section className="bg-[#101319] text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Showroom Premium
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Visitá nuestras instalaciones en pleno centro de Tucumán. Un espacio 
                diseñado para que puedas explorar la innovación y el lujo que caracterizan 
                a cada modelo Audi.
              </p>
              <p className="text-gray-300 mb-8">
                Contamos con área de exhibición climatizada, sala de espera confortable 
                y estacionamiento para clientes. Nuestro equipo de asesores está listo 
                para brindarte una experiencia de compra excepcional.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Visitanos hoy
              </Button>
            </div>
            <div className="relative h-100 rounded-lg overflow-hidden">
              <Image
                src="/concesionarios/tucuman/showroom.jpg"
                alt="Showroom Audi Tucumán"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo llegar
          </h2>
          <div className="bg-gray-100 h-125 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              [Mapa interactivo - Integrar con Google Maps API]
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para vivir la experiencia Audi?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Agendá tu visita al concesionario o consultanos por WhatsApp. 
            Estamos para ayudarte a encontrar tu Audi ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#101319] text-white hover:bg-[#1a1f2b]">
              Contactar por WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              Solicitar cotización
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}