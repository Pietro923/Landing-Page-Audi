'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, MapPin } from 'lucide-react';

const menuItems = [
  { label: 'Modelos', href: '/es/modelos' },
  {
    label: 'Buscar y comprar',
    href: '/es/buscador-de-stock-nuevo',
    // Submenús simplificados (puedes expandirlos si querés dropdowns completos como antes)
  },
  { label: 'Servicios y mantenimiento', href: '/es/servicios-accesorios' },
  { label: 'Mundo Audi', href: '/es/mundo-audi' },
  { label: 'Innovación', href: '/es/Innovacion' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center gap-2"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          <span>Menú</span>
        </button>

        {/* Navegación desktop */}
        <nav className="hidden lg:flex items-center flex-1 justify-center gap-10">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-gray-300 transition flex items-center gap-1">
              {item.label}
              {item.label !== 'Modelos' && <ChevronDown size={16} />}
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-2 hover:text-gray-300 transition text-sm">
            <MapPin size={20} />
            Seleccionar un concesionario
          </button>
          <button className="p-2 hover:bg-gray-900 rounded">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-black border-t border-gray-800 px-6 py-6">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="block py-3 text-lg hover:text-gray-300">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}