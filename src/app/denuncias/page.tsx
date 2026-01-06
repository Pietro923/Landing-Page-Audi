'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AlertTriangle, Shield, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DenunciasPage() {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#0a0d11] text-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-100">
        <div className="absolute inset-0">
          <Image
            src="/denuncias/hero-denuncias.jpg"
            alt="Canal de Denuncias"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Canal de denuncias
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
              Estamos a tu disposición
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Canal confidencial para reportar incumplimientos de leyes o normativas internas
            </p>
          </div>
        </div>
      </section>

      {/* Advertencia importante */}
      <section className="py-12 px-6 bg-[#BB0A30]/10 border-y border-[#BB0A30]/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#BB0A30] p-3 rounded-lg shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-light mb-3 text-[#BB0A30]">Importante</h2>
              <p className="text-gray-300 leading-relaxed">
                El canal de denuncias debe ser utilizado <span className="font-semibold text-white">exclusivamente 
                para reportar incumplimientos de leyes o normativas internas</span>. Para casos de atención 
                al cliente en relación a nuestros productos, servicios de mantenimiento o redes de 
                concesionarios por favor utilizar los canales disponibles en nuestra sección de{' '}
                <a href="/contacto" className="text-[#BB0A30] hover:text-[#9a0828] font-semibold underline">
                  contacto
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Información */}
            <div>
              <div className="mb-12">
                <div className="inline-block mb-6">
                  <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                    Información
                  </span>
                  <div className="h-px w-20 bg-white mt-2" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                  Canal de Denuncias
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Este canal garantiza la confidencialidad y permite reportar situaciones que 
                  requieran atención inmediata relacionadas con:
                </p>
              </div>

              {/* Tipos de denuncias */}
              <div className="space-y-4 mb-12">
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-light text-lg mb-2">Violaciones de leyes o regulaciones</h3>
                      <p className="text-gray-400 text-sm">
                        Incumplimiento de normativas legales vigentes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Conductas antiéticas</h3>
                      <p className="text-gray-400 text-sm">
                        Comportamientos que violen el código de ética empresarial
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Fraude o corrupción</h3>
                      <p className="text-gray-400 text-sm">
                        Actividades fraudulentas o actos de corrupción
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Acoso o discriminación</h3>
                      <p className="text-gray-400 text-sm">
                        Situaciones de hostigamiento o trato discriminatorio
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#BB0A30] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Riesgos de seguridad</h3>
                      <p className="text-gray-400 text-sm">
                        Condiciones que pongan en peligro la seguridad laboral
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garantías */}
              <div className="bg-linear-to-br from-[#BB0A30]/20 to-[#BB0A30]/5 p-6 rounded-xl border border-[#BB0A30]/30">
                <h3 className="text-xl font-light mb-4">Garantías de confidencialidad</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BB0A30] mt-1">•</span>
                    <span>Todas las denuncias son tratadas con estricta confidencialidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BB0A30] mt-1">•</span>
                    <span>No se tomarán represalias contra quienes realicen denuncias de buena fe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BB0A30] mt-1">•</span>
                    <span>Se investigará cada caso con imparcialidad y profesionalismo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <div className="bg-linear-to-br from-[#101319] to-[#1a1f2b] p-8 md:p-10 rounded-2xl border border-white/10 sticky top-24">
                <div className="mb-8">
                  <div className="inline-block mb-4">
                  <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                    Formulario
                  </span>
                  <div className="h-px w-20 bg-white mt-2" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-tight">Completá el formulario</h2>
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
                        rows={6}
                        placeholder="Describí detalladamente la situación a denunciar..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-500 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BB0A30] hover:bg-[#9a0828] text-white py-6 text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Enviar denuncia
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-center">
                      <p className="text-green-400 font-semibold">
                        ¡Denuncia recibida!
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Tu reporte será tratado con estricta confidencialidad.
                      </p>
                    </div>
                  )}
                </form>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  Todas las denuncias son tratadas de forma confidencial y anónima si así lo deseas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 px-6 bg-[#0a0d11]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 leading-relaxed">
            Si necesitás asistencia sobre productos, servicios o atención al cliente, 
            por favor visitá nuestra sección de{' '}
            <a href="/contacto" className="text-[#BB0A30] hover:text-[#9a0828] font-semibold underline">
              contacto
            </a>
            {' '}o{' '}
            <a href="/post-venta" className="text-[#BB0A30] hover:text-[#9a0828] font-semibold underline">
              post-venta
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}