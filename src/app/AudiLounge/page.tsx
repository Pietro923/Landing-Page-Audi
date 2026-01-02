'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Calendar, Users, Coffee, Wifi, Car, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: '¿Quiénes pueden visitar Audi Lounge?',
    answer: 'Audi Lounge está abierto tanto para clientes Audi como para el público en general. Si ya sos cliente Audi, tenés acceso exclusivo a todos los niveles y amenities. Si todavía no sos cliente, podés acceder al Lounge y asesorarte sobre todo lo que necesitás saber de nuestros autos.'
  },
  {
    question: '¿Si tengo un Audi, qué beneficios tengo en Audi Lounge?',
    answer: 'Como cliente Audi tenés acceso exclusivo a todos los niveles y amenities de Audi Lounge, incluyendo: reserva de sala de reuniones para vos y tus invitados, valet parking exclusivo, acceso al servicio de lunch, cafetería premium, espacios de coworking y mucho más.'
  },
  {
    question: '¿Necesito reservar para poder entrar a Audi Lounge?',
    answer: 'No es necesario hacer una reserva para acceder a Audi Lounge. Podés visitarnos directamente en nuestro horario de atención. Sin embargo, si deseás reservar la sala de reuniones u otros servicios específicos, te recomendamos contactarnos previamente.'
  },
  {
    question: '¿Cómo reservo un espacio en Audi Lounge para una reunión?',
    answer: 'Si sos cliente de Audi, podés hacer tu reserva llamando al (+54) 11 5328 4043 o por correo electrónico a audi.lounge@audi.com.ar. Nuestro equipo te asistirá con la disponibilidad y configuración del espacio según tus necesidades.'
  },
  {
    question: '¿Si hago una reserva puedo invitar a otras personas a Audi Lounge?',
    answer: 'Sí, como cliente Audi que realiza una reserva, podés invitar a otras personas a disfrutar de Audi Lounge. Solo necesitás informarnos con anticipación sobre la cantidad de invitados para asegurar la mejor experiencia.'
  }
];

const amenities = [
  {
    icon: Users,
    title: 'Sala de Reuniones',
    description: 'Espacio privado equipado para tus reuniones profesionales'
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Servicio exclusivo de estacionamiento para clientes Audi'
  },
  {
    icon: Coffee,
    title: 'Cafetería Premium',
    description: 'Servicio de lunch y café de alta calidad'
  },
  {
    icon: Wifi,
    title: 'Coworking',
    description: 'Espacios con conectividad y ambiente profesional'
  },
  {
    icon: Calendar,
    title: 'Eventos Exclusivos',
    description: 'Acceso prioritario a lanzamientos y eventos de la marca'
  },
  {
    icon: Clock,
    title: 'Atención Personalizada',
    description: 'Asesoramiento experto sobre productos y servicios Audi'
  }
];

export default function AudiLoungePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-150">
        <div className="absolute inset-0">
          <Image
            src="/Lounge/Audi-Lounge.jpg"
            alt="Audi Lounge Buenos Aires"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                Experiencia Premium
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl  mb-6 leading-tight">
              Audi Lounge
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Un espacio sociocultural diseñado para llevar tu experiencia y tus sentidos al siguiente nivel
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#BB0A30] hover:bg-[#9a0828] text-white cursor-pointer">
                Reservar espacio
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-gray-200 cursor-pointer">
                Ver ubicación
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Bienvenida */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm  tracking-widest text-gray-400 uppercase">
                  Bienvenidos
                </span>
                <div className="h-px w-20 bg-[#BB0A30] mt-2" />
              </div>
              
              <h2 className="text-4xl md:text-5xl  mb-8">
                Bienvenidos a Audi Lounge
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  Queremos darte la bienvenida como miembro de <span className="text-white ">Audi Lounge</span>. 
                  Si ya sos cliente Audi tenés acceso exclusivo a todos los niveles y amenities de Audi Lounge, 
                  pudiendo reservar la sala de reuniones para vos y tus invitados, valet parking exclusivo, 
                  acceso al servicio de lunch, cafetería y mucho más.
                </p>
                
                <p>
                  Si todavía no sos cliente Audi, podés acceder al Lounge y asesorarte sobre todo lo que 
                  necesitás saber de nuestros autos.
                </p>

                <p className="text-xl  text-white pt-4">
                  No importa si tenés o no un Audi, Audi Lounge es un espacio sociocultural diseñado 
                  para llevar tu experiencia y tus sentidos al siguiente nivel.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#BB0A30] hover:bg-[#9a0828] cursor-pointer">
                  Contactanos
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/90 cursor-pointer">
                  Ver en mapa
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/5 relative rounded-2xl overflow-hidden">
                <Image
                  src="/Lounge/Audi-Lounge-2.jpg"
                  alt="Interior Audi Lounge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación destacada */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-linear-to-r from-[#101319] to-[#1a1f2b] rounded-2xl overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-2">
              {/* Mapa */}
              <div className="relative h-100 md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.2083084358944!2d-58.41889672425895!3d-34.58428167295516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d1f8b85d65%3A0x5d1f8b85d65f8b85!2sAv.%20Pres.%20Figueroa%20Alcorta%203009%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1234567890123!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Ubicación Audi Lounge"
                />
              </div>

              {/* Info de ubicación */}
              <div className="p-10 md:p-12">
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-[#BB0A30] p-3 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl  mb-2">Encontranos en</h3>
                    <p className="text-gray-400 text-lg">
                      Av. Pres. Figueroa Alcorta 3009<br />
                      Buenos Aires, CABA
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#BB0A30]" />
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <a href="tel:+541153284043" className="text-white hover:text-[#BB0A30] transition">
                        (+54) 11 5328 4043
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#BB0A30]" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:audi.lounge@audi.com.ar" className="text-white hover:text-[#BB0A30] transition">
                        audi.lounge@audi.com.ar
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#BB0A30]" />
                    <div>
                      <p className="text-sm text-gray-500">Horarios</p>
                      <p className="text-white">Lun a Vie: 9:00 - 20:00</p>
                      <p className="text-white">Sábados: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-[#BB0A30] hover:bg-[#9a0828]">
                  Ver mapa completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                Beneficios exclusivos
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl  mb-6">
              Amenities de Audi Lounge
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Si ya sos cliente Audi, tenés acceso exclusivo a todos los niveles y amenities de Audi Lounge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#BB0A30]/50 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="bg-[#BB0A30]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#BB0A30] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#BB0A30] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl  mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm  tracking-widest text-gray-400 uppercase">
                FAQ
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2 mx-auto" />
            </div>
            
            <h2 className="text-4xl md:text-5xl  mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-400 text-lg">
              Preguntas frecuentes sobre Audi Lounge
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <span className=" text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#BB0A30] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}