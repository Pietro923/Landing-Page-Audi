'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Wrench, 
  Shield, 
  Package, 
  PhoneCall, 
  CheckCircle2,
  Settings,
  Clock,
  Award,
  Users,
  Zap,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicios = [
  {
    icon: Calendar,
    title: 'Agenda tu Service',
    description: 'Reservá tu turno online de forma rápida y sencilla. Elegí fecha, hora y tipo de servicio.',
    color: 'from-[#BB0A30] to-[#9a0828]',
    link: '/agendar-turno',
    cta: 'Solicitar turno'
  },
  {
    icon: Package,
    title: 'Repuestos Originales',
    description: 'Garantía de calidad con repuestos certificados Audi. Stock permanente y entrega inmediata.',
    color: 'from-gray-700 to-gray-900',
    link: '/repuestos',
    cta: 'Ver catálogo'
  },
  {
    icon: Shield,
    title: 'Garantía Audi',
    description: 'Protección total para tu vehículo con la garantía oficial de fábrica y extensiones disponibles.',
    color: 'from-blue-600 to-blue-800',
    link: '/garantia',
    cta: 'Más información'
  },
  {
    icon: Settings,
    title: 'Accesorios Originales',
    description: 'Personalizá tu Audi con accesorios oficiales. Estilo, funcionalidad y calidad premium.',
    color: 'from-amber-600 to-amber-800',
    link: '/accesorios',
    cta: 'Explorar accesorios'
  },
];

const beneficios = [
  {
    icon: Users,
    title: 'Técnicos Certificados',
    description: 'Equipo capacitado y certificado por Audi AG con formación continua'
  },
  {
    icon: Wrench,
    title: 'Tecnología de Punta',
    description: 'Equipamiento de diagnóstico y herramientas especializadas Audi'
  },
  {
    icon: Clock,
    title: 'Service Express',
    description: 'Atención prioritaria para mantenimientos programados y cambios de aceite'
  },
  // {
  //   icon: Car,
  //   title: 'Auto de Cortesía',
  //   description: 'Vehículo disponible durante tu service para que no pares'
  // },
  {
    icon: Award,
    title: 'Garantía Oficial',
    description: 'Todos los trabajos respaldados por garantía de servicio oficial Audi'
  },
  {
    icon: Zap,
    title: 'Atención Personalizada',
    description: 'Asesor asignado que te acompaña en todo el proceso'
  },
];

export default function PostVentaPage() {

  return (
    <div className="bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-150">
        <div className="absolute inset-0">
          <Image
            src="/Home/PostVenta-home.avif"
            alt="Service Audi UB Motors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Post-Venta
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
              Servicio Excepcional para tu Audi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
              En UB Motors estamos capacitados para brindarte el mejor servicio. 
              Mantenimiento, repuestos originales y atención personalizada para que 
              tu auto esté siempre listo.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#BB0A30] hover:bg-[#9a0828] text-white">
                Agendar service
              </Button>
              <Button size="lg" variant="outline" className="text-black hover:bg-gray-200 cursor-pointer">
                Contactar asesor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Nuestros servicios
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Todo lo que necesitás en un solo lugar
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Servicios integrales diseñados para mantener tu Audi en perfectas condiciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500"
                >
                  {/* Gradiente de fondo en hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${servicio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    <div className={`bg-linear-to-br ${servicio.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-light mb-4">{servicio.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {servicio.description}
                    </p>
                    
                    <Link href={servicio.link}>
                      <Button 
                        className="w-full bg-white/10 hover:bg-[#BB0A30] border border-white/20 hover:border-[#BB0A30] group/btn"
                      >
                        {servicio.cta}
                        <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Por qué elegirnos
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Excelencia en cada detalle
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Compromiso total con la calidad y satisfacción de nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#BB0A30]/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-[#BB0A30]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#BB0A30]" />
                  </div>
                  
                  <h3 className="text-lg font-light mb-2">{beneficio.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accesorios Destacados */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/post-venta/accesorios-audi.jpg"
                alt="Accesorios Originales Audi"
                fill
                className="object-cover"
              />
            </div> */}

            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Personalización
                </span>
                <div className="h-px w-20 bg-[#BB0A30] mt-2" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Accesorios Originales Audi
              </h2>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Sumale a tu auto tu toque original y personal con los Accesorios 
                Originales Audi. Diseñados específicamente para cada modelo, combinan 
                funcionalidad, estilo y la calidad premium que caracteriza a la marca.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Diseño exclusivo</p>
                    <p className="text-gray-400 text-sm">Perfecta integración con el diseño de tu Audi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Calidad garantizada</p>
                    <p className="text-gray-400 text-sm">Certificación oficial de fábrica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Instalación profesional</p>
                    <p className="text-gray-400 text-sm">Montaje incluido por técnicos especializados</p>
                  </div>
                </div>
              </div>

              <Link href="/accesorios">
                <Button size="lg" className="bg-[#BB0A30] hover:bg-[#9a0828]">
                  Explorar catálogo de accesorios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Protección total
                </span>
                <div className="h-px w-20 bg-[#BB0A30] mt-2" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Garantía Audi
              </h2>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Todos los vehículos Audi nuevos están respaldados por nuestra 
                garantía integral de fábrica, diseñada para brindarte tranquilidad 
                total durante los primeros años de uso.
              </p>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                <h4 className="font-bold text-xl mb-4">Cobertura incluida:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-0.5" />
                    <span className="text-gray-300">3 años o 100.000 km de garantía de fábrica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-0.5" />
                    <span className="text-gray-300">12 años de garantía contra corrosión</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Asistencia en ruta 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Extensión de garantía disponible</span>
                  </li>
                </ul>
              </div>

              <Link href="/garantia">
                <Button size="lg" variant="outline" className="text-black hover:bg-gray-200 cursor-pointer">
                  Conocer más sobre garantía
                </Button>
              </Link>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/Concesionarios/salta/taller.jpg"
                alt="Garantía Audi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ubicaciones */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Dónde encontrarnos
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Nuestros Talleres de Service
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Tres ubicaciones con talleres equipados para atender tu Audi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tucumán Centro */}
            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/Concesionarios/centro/salon.JPG"
                  alt="Taller Tucumán Centro"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-3">Tucumán Centro</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="shrink-0 mt-1" />
                    <span>Santiago del Estero 902</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <PhoneCall size={16} className="shrink-0 mt-1" />
                    <span>(381) 430-8201</span>
                  </div>
                </div>
                <Link href="/concesionarios/tucuman/centro">
                  <Button className="w-full text-black hover:bg-gray-200 cursor-pointer" variant="outline">
                    Ver taller
                  </Button>
                </Link>
              </div>
            </div>

            {/* Salta */}
            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/Concesionarios/salta/taller.jpg"
                  alt="Taller Salta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Salta</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="shrink-0 mt-1" />
                    <span>Av. Belgrano 1050</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <PhoneCall size={16} className="shrink-0 mt-1" />
                    <span>(387) 431-5001</span>
                  </div>
                </div>
                <Link href="/concesionarios/salta">
                  <Button className="w-full text-black hover:bg-gray-200 cursor-pointer" variant="outline">
                    Ver taller
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}