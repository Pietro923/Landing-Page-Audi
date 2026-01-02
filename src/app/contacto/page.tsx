'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    items: [
      'Santiago del Estero 902',
      'San Miguel de Tucumán',
      'Tucumán, Argentina'
    ]
  },
  {
    icon: Phone,
    title: 'Teléfono',
    items: ['0381 497-6908']
  },
  {
    icon: Clock,
    title: 'Horarios',
    items: [
      'Lunes a Viernes',
      '8:00 a 17:30 hs'
    ]
  },
];

const departamentos = [
  {
    title: 'Ventas',
    email: 'rojas.gonzalo@ubmotors.com.ar',
    description: 'Consultas sobre vehículos 0km, financiación y test drive'
  },
  {
    title: 'Postventa',
    email: 'celeste.lopez@ubmotors.com.ar',
    description: 'Service, mantenimiento y atención al cliente'
  },
  {
    title: 'Repuestos',
    email: 'repuestos@ubmotors.com.ar',
    description: 'Repuestos originales y accesorios Audi'
  },
  {
    title: 'Turnos',
    email: 'contacto@ubmotors.com.ar',
    description: 'Agenda tu cita para service y mantenimiento'
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
      
      // Reset status después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-100">
        <div className="absolute inset-0">
          <Image
            src="/contacto/hero-contacto.jpg"
            alt="Contacto UB Motors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Contacto
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Estamos para ayudarte
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Contactanos por cualquier consulta. Nuestro equipo te responderá a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Información de contacto y formulario */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Información de contacto */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Información de Contacto
                </h2>
                <p className="text-gray-400 text-lg">
                  Visitanos, llamanos o escribinos. Estamos aquí para ayudarte 
                  a encontrar tu próximo Audi o resolver cualquier consulta.
                </p>
              </div>

              {/* Cards de información */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-[#BB0A30]/20 p-3 rounded-lg shrink-0">
                          <Icon className="w-6 h-6 text-[#BB0A30]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.items.map((item, idx) => (
                            <p key={idx} className="text-gray-400">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Departamentos */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Departamentos</h3>
                <div className="space-y-4">
                  {departamentos.map((dept, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-lg mb-2">{dept.title}</h4>
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-[#BB0A30] hover:text-[#9a0828] transition-colors mb-2 inline-block"
                      >
                        {dept.email}
                      </a>
                      <p className="text-gray-400 text-sm">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <div className="bg-linear-to-br from-[#101319] to-[#1a1f2b] p-8 md:p-10 rounded-2xl border border-white/10 sticky top-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3">Completá el formulario</h2>
                  <p className="text-gray-400">
                    Envianos tus datos y en breve nos comunicaremos con vos.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre y Apellido */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium mb-2">
                        Apellido
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="apellido"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          required
                          placeholder="Tu apellido"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="Tu teléfono"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-500" />
                      </div>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tu mensaje..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BB0A30] hover:bg-[#9a0828] text-white py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Enviar mensaje
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-center">
                      <p className="text-green-400 font-semibold">
                        ¡Mensaje enviado con éxito!
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Nos comunicaremos contigo a la brevedad.
                      </p>
                    </div>
                  )}
                </form>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  Al enviar este formulario, aceptás nuestra política de privacidad 
                  y el tratamiento de tus datos personales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visitanos
            </h2>
            <p className="text-gray-400 text-lg">
              Te esperamos en nuestro showroom en el centro de Tucumán
            </p>
          </div>

          <div className="w-full h-125 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1234567890!2d-65.2061!3d-26.8241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzI2LjgiUyA2NcKwMTInMjIuMCJX!5e0!3m2!1ses-419!2sar!4v1234567890123!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación UB Motors"
            />
          </div>
        </div>
      </section>

      {/* Otras sucursales */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Otras Ubicaciones
            </h2>
            <p className="text-gray-400">
              También podés visitarnos en nuestras otras sucursales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Yerba Buena */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Audi Yerba Buena</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <span>Av. Aconquija 1090, Yerba Buena</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <span>(381) 425-9000</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <span>yerbabuena@ubmotors.com.ar</span>
                </div>
              </div>
            </div>

            {/* Salta */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#BB0A30]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Audi Salta</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <span>Av. Belgrano 1050, Salta Capital</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <span>(387) 431-5000</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                  <span>salta@ubmotors.com.ar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-20 px-6 bg-[#0a0d11]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-12 md:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/Logos/whatsapp.svg"
                  width={40}
                  height={40}
                  alt="WhatsApp"
                  className="brightness-0 invert"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Preferís WhatsApp?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Chateá directamente con nuestro equipo para una respuesta inmediata
              </p>
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8"
              >
                Iniciar chat de WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}