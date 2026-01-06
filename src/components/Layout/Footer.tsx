'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Facebook, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PietroButton } from './p-popover';

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
    <footer className="bg-black text-white pt-16 pb-12">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
          

        {/* UB Motors Info */}
        <div className="mb-16 pb-16 ">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-3">UB Motors</h3>
            <p className="text-gray-400 text-lg font-light">Distribuidor oficial Audi en el Norte Argentino</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Sucursal Tucumán Centro */}
            <div>
              <h4 className="text-xl font-light mb-5 text-white">Tucumán - Centro</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-gray-500" />
                  <div>
                    <p className="text-white font-light">Santiago del Estero 902</p>
                    <p className="font-light">Tucumán, Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-gray-500" />
                  <a href="tel:03814976908" className="hover:text-white transition font-light">
                    0381 497-6908
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-gray-500" />
                  <p className="font-light">Lun - Vie: 08:00 a 17:30 hs</p>
                </div>
              </div>
            </div>

            {/* Sucursal Tucumán Yerba Buena */}
            <div>
              <h4 className="text-xl font-light mb-5 text-white">Tucumán - Yerba Buena</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-gray-500" />
                  <div>
                    <p className="text-white font-light">Av. Aconquija 1090</p>
                    <p className="font-light">Yerba Buena, Tucumán</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-gray-500" />
                  <a href="tel:03814976908" className="hover:text-white transition font-light">
                    0381 497-6908
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-gray-500" />
                  <p className="font-light">Lun - Vie: 08:00 a 17:30 hs</p>
                </div>
              </div>
            </div>

            {/* Sucursal Salta */}
            <div>
              <h4 className="text-xl font-light mb-5 text-white">Salta</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-gray-500" />
                  <div>
                    <p className="text-white font-light">Av. Belgrano 1050</p>
                    <p className="font-light">Salta, Argentina</p>
                    <p className="text-sm mt-2 text-[#BB0A30] font-medium">También Ducati</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-gray-500" />
                  <a href="tel:03814976908" className="hover:text-white transition font-light">
                    0381 497-6908
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-gray-500" />
                  <p className="font-light">Lun - Vie: 08:00 a 17:30 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contactos */}
          <div className="mt-12">
            <h4 className="text-xl font-light mb-6 text-white">Contacto</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((contact) => (
                <div key={contact.title} className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">{contact.title}</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-sm text-gray-400 hover:text-white transition flex items-center gap-2 font-light"
                  >
                    <contact.icon size={16} />
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón Trabaja con Nosotros y Redes Sociales */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 pb-12 border-b border-gray-800">
          {/* Volver arriba */}
          <div>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
              volver arriba
              <ChevronUp size={20} />
            </a>
          </div>

          {/* Botón Trabaja con Nosotros */}
          <div>
            <a 
              href="/trabaja-con-nosotros" 
              className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition rounded-full uppercase tracking-wider text-sm"
            >
              Trabajá con Nosotros
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={label}
                className="text-gray-400 hover:text-white transition"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-6 lg:gap-8 mb-16">
          {footerCategories.map((cat, index) => (
            <div key={cat.title}>
              <button
                onClick={() => setOpenSection(openSection === index ? null : index)}
                className="flex items-center justify-between w-full lg:cursor-default text-left mb-4"
              >
                <h4 className="font-light text-lg">{cat.title}</h4>
                <ChevronDown className={`lg:hidden transition-transform ${openSection === index ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`space-y-3 ${openSection === index || openSection === null ? 'block' : 'hidden'} lg:block`}>
                {cat.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pie de página */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-light">© {new Date().getFullYear()} UB Motors. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <PietroButton  />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}