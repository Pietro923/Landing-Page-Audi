'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';

const footerCategories = [
  { title: 'Modelos', links: ['Todos los modelos', 'Sportback', 'SUV', 'e-tron', 'Sedán', 'Coupé', 'Sport']},
  { title: 'Servicios y Accesorios', links: ['Servicios al cliente', 'Asistencia Audi', 'Red de Servicio Oficial', 'Accesorios originales Audi', 'Consultas Recall', 'Eficiencia energética'] },
  { title: 'Mundo Audi', links: ['Audi Lounge', 'Audi Driving Center'] },
  { title: 'Innovación', links: ['E-movilidad', 'Tecnología', 'Audi Sport'] },
  { title: 'Compañía', links: ['Ventas Corporativas', 'Contacto', 'Historia'] },
  { title: 'Concesionarios', links: ['Nuestros servicios', 'Red de Concesionarios'] },
];

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/AudiArg', label: 'Facebook' },
  { Icon: Youtube, href: 'https://www.youtube.com/user/AudiArg', label: 'Youtube' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/audi-argentina/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://instagram.com/AudiArg', label: 'Instagram' },
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

        {/* Categorías */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-6 lg:gap-8">
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
                  <li key={link.label || link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition">
                      {link.label || link}
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
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={24} className="hover:text-gray-300 transition" />
            </a>
          ))}
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Legal y copyright */}
        <div className="text-center lg:text-left">
          <p className="text-xs text-gray-500 mb-4">© 2023 Audi Argentina división de Volkswagen Argentina</p>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white">MyAudi</a></li>
            <li><a href="#" className="hover:text-white">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-white">Políticas de Privacidad</a></li>
            <li><a href="#" className="hover:text-white">Políticas de Cookies</a></li>
            <li><a href="#" className="hover:text-white">Defensa del consumidor</a></li>
            <li><a href="#" className="hover:text-white">Ayuda</a></li>
            <li><a href="#" className="hover:text-white">Contacto</a></li>
            <li><button className="hover:text-white">0800-888-2834</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}