'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Briefcase, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TrabajaConNosotrosPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    estudiosSecundarios: '',
    carrera: '',
    nivelEstudios: '',
    experiencia: '',
    disponibilidad: '',
    sucursal: '',
    area: '',
    cv: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
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
        estudiosSecundarios: '',
        carrera: '',
        nivelEstudios: '',
        experiencia: '',
        disponibilidad: '',
        sucursal: '',
        area: '',
        cv: null,
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
            src="/trabaja-con-nosotros/hero-trabajo.jpg"
            alt="Trabaja con nosotros"
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
                Oportunidades
              </span>
              <div className="h-px w-20 bg-[#BB0A30] mt-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Trabajá con Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Sumate al equipo líder en experiencia Audi del Norte Argentino
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-6 bg-[#101319]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Por qué UB Motors?</h2>
              <div className="space-y-4 text-gray-300">
                <p>Formá parte de un equipo apasionado por la excelencia automotriz.</p>
                <p>Ofrecemos un ambiente de trabajo profesional, capacitación continua y oportunidades de crecimiento.</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Beneficios</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Capacitación oficial Audi</li>
                <li>✓ Ambiente de trabajo premium</li>
                <li>✓ Oportunidades de crecimiento</li>
                <li>✓ Beneficios corporativos</li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-linear-to-br from-[#101319] to-[#1a1f2b] p-8 md:p-10 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#BB0A30] p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Completá tu postulación</h2>
                <p className="text-gray-400">Envianos tus datos y CV</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Apellido *</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  />
                </div>
              </div>

              {/* Email y Teléfono */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  />
                </div>
              </div>

              {/* Estudios */}
              <div>
                <label className="block text-sm font-medium mb-2">Estudios Secundarios *</label>
                <select
                  name="estudiosSecundarios"
                  value={formData.estudiosSecundarios}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                >
                  <option className="bg-black/90" value="">Seleccionar</option>
                  <option className="bg-black/90" value="completo">Completo</option>
                  <option className="bg-black/90" value="incompleto">Incompleto</option>
                  <option className="bg-black/90" value="en-curso">En curso</option>
                </select>
              </div>

              {/* Carrera y Nivel */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Carrera/Título</label>
                  <input
                    type="text"
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    placeholder="Ej: Ingeniería, Administración..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nivel de Estudios</label>
                  <select
                    name="nivelEstudios"
                    value={formData.nivelEstudios}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  >
                    <option className="bg-black/90"value="">Seleccionar</option>
                    <option className="bg-black/90"value="terciario">Terciario</option>
                    <option className="bg-black/90"value="universitario">Universitario</option>
                    <option className="bg-black/90"value="posgrado">Posgrado</option>
                    <option className="bg-black/90"value="en-curso">En curso</option>
                    <option className="bg-black/90"value="ninguno">Ninguno</option>
                  </select>
                </div>
              </div>

              {/* Experiencia */}
              <div>
                <label className="block text-sm font-medium mb-2">Experiencia Laboral</label>
                <textarea
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describí brevemente tu experiencia..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none resize-none"
                />
              </div>

              {/* Disponibilidad y Sucursal */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Disponibilidad Horaria *</label>
                  <select
                    name="disponibilidad"
                    value={formData.disponibilidad}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  >
                    <option className="bg-black/90"value="">Seleccionar</option>
                    <option className="bg-black/90"value="tiempo-completo">Tiempo completo</option>
                    <option className="bg-black/90"value="medio-tiempo">Medio tiempo</option>
                    <option className="bg-black/90"value="turno-mañana">Turno mañana</option>
                    <option className="bg-black/90"value="turno-tarde">Turno tarde</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sucursal de Interés *</label>
                  <select
                    name="sucursal"
                    value={formData.sucursal}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                  >
                    <option className="bg-black/90"value="">Seleccionar</option>
                    <option className="bg-black/90"value="tucuman-centro">Tucumán Centro</option>
                    <option className="bg-black/90"value="yerba-buena">Yerba Buena</option>
                    <option className="bg-black/90"value="salta">Salta</option>
                    <option className="bg-black/90"value="cualquiera">Cualquiera</option>
                  </select>
                </div>
              </div>

              {/* Área */}
              <div>
                <label className="block text-sm font-medium mb-2">Área de Interés *</label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-[#BB0A30] focus:ring-1 focus:ring-[#BB0A30] outline-none"
                >
                  <option className="bg-black/90"value="">Seleccionar</option>
                  <option className="bg-black/90"value="ventas">Ventas</option>
                  <option className="bg-black/90"value="postventa">Postventa/Service</option>
                  <option className="bg-black/90"value="repuestos">Repuestos</option>
                  <option className="bg-black/90"value="administracion">Administración</option>
                  <option className="bg-black/90"value="marketing">Marketing</option>
                  <option className="bg-black/90"value="sistemas">Sistemas/IT</option>
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Adjuntar CV (PDF) *</label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex items-center justify-center gap-3 w-full bg-white/5 border-2 border-dashed border-white/20 rounded-lg px-4 py-8 cursor-pointer hover:bg-white/10 hover:border-[#BB0A30]/50 transition-all"
                  >
                    <Upload className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-400">
                      {formData.cv ? formData.cv.name : 'Click para subir tu CV (PDF)'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#BB0A30] hover:bg-[#9a0828] py-6 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Enviar postulación
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-semibold">¡Postulación enviada con éxito!</p>
                  <p className="text-gray-400 text-sm mt-1">Nos comunicaremos contigo pronto.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}