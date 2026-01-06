import Image from 'next/image';
import Link from 'next/link';
import { Award, Target, Eye, Heart, Shield, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NosotrosPage() {
  const valores = [
    {
      icon: Shield,
      title: 'Confianza y Honestidad',
      description: 'La transparencia y la integridad son la base de todas nuestras relaciones comerciales.'
    },
    {
      icon: Target,
      title: 'Responsabilidad y Compromiso',
      description: 'Asumimos la responsabilidad de nuestros resultados y cumplimos nuestras promesas.'
    },
    {
      icon: Users,
      title: 'Compromiso con la Gente',
      description: 'Clientes, empleados y socios son el centro de nuestra organización.'
    },
    {
      icon: Heart,
      title: 'Actitud de Servicio',
      description: 'Orientación permanente hacia la satisfacción y superación de expectativas.'
    },
    {
      icon: TrendingUp,
      title: 'Excelencia y Superación',
      description: 'Autocrítica constante y compromiso con la mejora continua en cada proceso.'
    },
    {
      icon: CheckCircle2,
      title: 'Cumplimiento Fiscal',
      description: 'Transparencia tributaria y cumplimiento normativo al más alto nivel.'
    },
  ];

  const certificaciones = [
    {
      title: 'ISO 9001',
      description: 'Sistema de Gestión de Calidad certificado',
      icon: Award
    },
    {
      title: 'Concesionario Oficial',
      description: 'Representante autorizado Audi Argentina',
      icon: Shield
    },
    {
      title: '15+ Años',
      description: 'De experiencia en el mercado automotriz premium',
      icon: TrendingUp
    },
  ];

  return (
    <div className="bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-150">
        <div className="absolute inset-0">
          <Image
            src="/Concesionarios/salta/exterior.jpg"
            alt="UB Motors - Concesionario Audi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                Sobre nosotros
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
              UB Motors
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light">
              Tu concesionario oficial Audi en el Norte Argentino. 
              Compromiso, calidad y excelencia desde hace más de 15 años.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#BB0A30] hover:bg-[#9a0828] text-white cursor-pointer">
                Nuestros concesionarios
              </Button>
              <Button size="lg" variant="outline" className="border-white  text-black hover:bg-gray-200 cursor-pointer">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía y Compromiso */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm  tracking-widest text-gray-400 uppercase">
                  Nuestra filosofía
                </span>
                <div className="h-px w-20 bg-[#BB0A30] mt-2" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Compromiso con la Excelencia
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  En UB Motors tenemos la <span className="text-white ">filosofía de lograr la confianza 
                  de nuestros clientes</span>, satisfaciendo sus necesidades con los más altos estándares 
                  de calidad y servicio.
                </p>
                
                <p>
                  Representamos una marca cuyas señas de identidad son: <span className="text-white ">Compromiso 
                  de Servicio, Calidad y Tecnología</span>. Por ello, hemos decidido dar un paso más e implantar 
                  un sistema de Gestión de Calidad basado en la norma <span className="text-white ">ISO 9001</span>.
                </p>
                
                <p>
                  Nuestro equipo altamente cualificado ha planificado un conjunto de acciones y sistemas 
                  que proporcionan la confianza adecuada frente a nuestros clientes, garantizando:
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#BB0A30]/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#BB0A30]" />
                  </div>
                  <div>
                    <p className="text-white  mb-1">Conocimiento y Satisfacción</p>
                    <p className="text-gray-400 text-sm">
                      Conocemos y satisfacemos las necesidades y expectativas de nuestros clientes
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#BB0A30]/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#BB0A30]" />
                  </div>
                  <div>
                    <p className="text-white  mb-1">Recursos de Excelencia</p>
                    <p className="text-gray-400 text-sm">
                      Potenciamos la eficacia de recursos humanos y tecnológicos para asegurar calidad
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#BB0A30]/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#BB0A30]" />
                  </div>
                  <div>
                    <p className="text-white  mb-1">Atención Profesional</p>
                    <p className="text-gray-400 text-sm">
                      Equipo humano con amplia experiencia garantizando excelencia en post-venta
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#BB0A30]/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#BB0A30]" />
                  </div>
                  <div>
                    <p className="text-white  mb-1">Mejora Continua</p>
                    <p className="text-gray-400 text-sm">
                      Evolución constante para adaptarnos a un mercado cada vez más competitivo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/5 relative rounded-2xl overflow-hidden">
                <Image
                  src="/Concesionarios/centro/salon.jpg"
                  alt="Interior UB Motors"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Card flotante con certificaciones */}
              <div className="absolute -bottom-1  bg-white text-[#101319] p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#BB0A30] p-3 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className=" text-lg">ISO 9001</p>
                    <p className="text-sm text-gray-600">Certificación de Calidad</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Sistema de gestión certificado que garantiza los más altos estándares de servicio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Misión */}
            <div className="bg-linear-to-br from-[#101319] to-[#1a1f2b] p-10 rounded-2xl border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-500">
              <div className="bg-[#BB0A30]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#BB0A30]" />
              </div>
              
              <h2 className="text-3xl font-light mb-6 tracking-tight">Nuestra Misión</h2>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Ser una empresa <span className="text-white ">altamente competitiva</span>, 
                ofreciendo <span className="text-white ">SOLO productos y servicios PREMIUM</span> (de 
                PRIMERA LÍNEA) para la industria automotriz, fuertemente orientada al cliente con alta 
                expectativa y con el <span className="text-white ">más alto nivel de compromiso y 
                responsabilidad</span> que permita al mercado confiar en nosotros.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-linear-to-br from-[#101319] to-[#1a1f2b] p-10 rounded-2xl border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-500">
              <div className="bg-[#BB0A30]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#BB0A30]" />
              </div>
              
              <h2 className="text-3xl font-light mb-6 tracking-tight">Nuestra Visión</h2>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Alcanzar el <span className="text-white ">liderazgo en cada segmento</span> en 
                el que competimos, con un equipo humano motivado, que nos permita satisfacer las necesidades 
                del sector automotriz; <span className="text-white ">optimizando la rentabilidad 
                de nuestros clientes</span> y en un estrecho vínculo con nuestros proveedores para así 
                diferenciarnos en el mercado y <span className="text-white ">crecer en forma 
                continua y permanente</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                Nuestros pilares
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Valores que nos Definen
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Principios fundamentales que guían cada una de nuestras acciones y decisiones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#BB0A30]/50 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="bg-[#BB0A30]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#BB0A30] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#BB0A30] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl  mb-3 group-hover:text-[#BB0A30] transition-colors">
                    {valor.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificaciones y Logros */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                Reconocimientos
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Excelencia Certificada
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificaciones.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="bg-linear-to-br from-[#101319] to-[#1a1f2b] p-8 rounded-2xl border border-white/10 text-center hover:border-[#BB0A30]/50 transition-all duration-500"
                >
                  <div className="bg-[#BB0A30]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-[#BB0A30]" />
                  </div>
                  <h3 className="text-2xl  mb-3">{cert.title}</h3>
                  <p className="text-gray-400">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nuestras Ubicaciones */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                Dónde encontrarnos
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Nuestros Concesionarios
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Tres ubicaciones estratégicas en el Norte Argentino para brindarte 
              la mejor experiencia Audi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tucumán Centro */}
            <Link 
              href="/concesionarios/tucuman/centro"
              className="group relative overflow-hidden rounded-2xl aspect-3/4 bg-black"
            >
              <Image
                src="/concesionarios/centro/salon2.jpg"
                alt="Tucumán Centro"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-light mb-2">Tucumán Centro</h3>
                <p className="text-gray-300 text-sm mb-4">Santiago del Estero 902</p>
                <span className="inline-flex items-center gap-2 text-[#BB0A30] ">
                  Ver concesionario
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Yerba Buena */}
            <Link 
              href="/concesionarios/tucuman/yerba-buena"
              className="group relative overflow-hidden rounded-2xl aspect-3/4 bg-black"
            >
              <Image
                src="/concesionarios/yb/entrada.jpg"
                alt="Yerba Buena"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl  mb-2">Yerba Buena</h3>
                <p className="text-gray-300 text-sm mb-4">Av. Aconquija 1090</p>
                <span className="inline-flex items-center gap-2 text-[#BB0A30] ">
                  Ver concesionario
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Salta */}
            <Link 
              href="/concesionarios/salta"
              className="group relative overflow-hidden rounded-2xl aspect-3/4 bg-black"
            >
              <Image
                src="/concesionarios/salta/exterior.jpg"
                alt="Salta"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl  mb-2">Salta</h3>
                <p className="text-gray-300 text-sm mb-4">Av. Belgrano 1050</p>
                <span className="inline-flex items-center gap-2 text-[#BB0A30] ">
                  Ver concesionario
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}