'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Facebook, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const footerCategories = [
  { title: 'Modelos', links: ['Todos los modelos', 'Sportback', 'SUV', 'e-tron', 'Sedán', 'Coupé', 'Sport']},
  { title: 'Servicios y Accesorios', links: ['Servicios al cliente', 'Asistencia Audi', 'Red de Servicio Oficial', 'Accesorios originales Audi', 'Consultas Recall', 'Eficiencia energética'] },
  { title: 'Mundo Audi', links: ['Audi Lounge', 'Audi Driving Center'] },
  { title: 'Innovación', links: ['E-movilidad', 'Tecnología', 'Audi Sport'] },
  { title: 'Compañía', links: ['Ventas Corporativas', 'Contacto', 'Historia'] },
  { title: 'Concesionarios', links: ['Nuestros servicios', 'Red de Concesionarios'] },
];

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/ubmotorstucuman', label: 'Facebook' },
  { Icon: Instagram, href: 'https://www.instagram.com/audiubmotors/', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const contactInfo = [
  { 
    title: 'Ventas',
    email: 'rojas.gonzalo@ubmotors.com.ar',
    icon: Mail
  },
  { 
    title: 'Postventa',
    email: 'celeste.lopez@ubmotors.com.ar',
    icon: Mail
  },
  { 
    title: 'Repuestos',
    email: 'repuestos@ubmotors.com.ar',
    icon: Mail
  },
  { 
    title: 'Turnos',
    email: 'contacto@ubmotors.com.ar',
    icon: Mail
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Volver arriba */}
        <div className="flex justify-end mb-8">
          <a href="#" className="flex items-center gap-2 text-sm hover:text-gray-300">
            volver arriba
            <ChevronUp size={20} />
          </a>
        </div>

        {/* UB Motors Info */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <div>
              <h3 className="text-2xl font-bold mb-4">UB Motors</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0" />
                  <div>
                    <p>Santiago del Estero 902</p>
                    <p>Tucumán | Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0" />
                  <a href="tel:03814976908" className="hover:text-white transition">
                    0381 497-6908
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="shrink-0" />
                  <p>Lunes a Viernes: 08:00 a 17:30 hs</p>
                </div>
              </div>
            </div>

            {/* Contactos */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold mb-4">Contacto</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact) => (
                  <div key={contact.title} className="space-y-1">
                    <p className="text-sm font-semibold text-gray-300">{contact.title}</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-sm text-gray-400 hover:text-white transition flex items-center gap-2"
                    >
                      <contact.icon size={16} />
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botón Trabaja con Nosotros */}
          <div className="mt-8">
            <a 
              href="/trabaja-con-nosotros" 
              className="inline-block bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition rounded uppercase tracking-wider"
            >
              Trabajá con Nosotros
            </a>
          </div>
        </div>

        {/* Categorías */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-6 lg:gap-8 mb-12">
          {footerCategories.map((cat, index) => (
            <div key={cat.title}>
              <button
                onClick={() => setOpenSection(openSection === index ? null : index)}
                className="flex items-center justify-between w-full lg:cursor-default text-left"
              >
                <h4 className="font-semibold">{cat.title}</h4>
                <ChevronDown className={`lg:hidden transition-transform ${openSection === index ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-4 space-y-3 lg:mt-4 ${openSection === index || openSection === null ? 'block' : 'hidden'} lg:block`}>
                {cat.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="flex justify-end gap-6 my-10">
          {socialLinks.map(({ Icon, href, label }) => (
            <a 
              key={label} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={label}
              className="hover:text-gray-300 transition"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Pie de página */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} UB Motors. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Términos y condiciones</a>
              <a href="#" className="hover:text-white transition">Política de privacidad</a>
              <a href="#" className="hover:text-white transition">Aviso legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}