'use client';
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, MapPin } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    label: 'Modelos',
    href: '/es/modelos/',
    hasDropdown: false,
  },
  {
    label: 'Buscar y comprar',
    href: '/es/buscador-de-stock-nuevo/',
    hasDropdown: true,
    subBlocks: [
      {
        label: 'Buscar',
        links: [
          { text: 'Vehículos en stock', url: '/es/buscador-de-stock-nuevo/' },
          { text: 'Accesorios originales Audi', url: '/es/servicios-cliente/accesorios-originales-audi/' },
        ],
      },
      {
        label: 'Explorar',
        links: [
          { text: 'Comparar modelos', url: '/es/modelos/comparar-modelos/' },
        ],
      },
      {
        label: 'Próximos pasos',
        links: [
          { text: 'Red de concesionarios oficial', url: '/es/concesionarios/red-de-concesionarios/' },
        ],
      },
    ],
  },
  {
    label: 'Servicios y mantenimiento',
    href: '/es/servicios-accesorios/',
    hasDropdown: true,
    subBlocks: [
      {
        label: 'Servicios al cliente',
        links: [
          { text: 'Servicios Audi', url: '/es/servicios-accesorios/' },
          { text: 'Asistencia Audi', url: '/es/servicios-accesorios/asistencia-audi/' },
          { text: 'Workshop test Audi', url: '/es/servicios-accesorios/workshop-test-audi/' },
          { text: 'Manual de usuario', url: 'https://ownersmanual.audi.com/home/es_ES', target: '_blank' },
        ],
      },
      {
        label: 'Mantenimiento',
        links: [
          { text: 'Red de servicio oficial', url: '/es/servicios-accesorios/red-de-servicios/' },
          { text: 'Plan de mantenimiento', url: '/es/servicios-accesorios/plan-de-mantenimiento/' },
          { text: 'Accesorios originales Audi', url: '/es/servicios-cliente/accesorios-originales-audi/' },
        ],
      },
      {
        label: 'Seguridad',
        links: [
          { text: 'Airbag Takata', url: '/es/recall-takata-airbag/' },
          { text: 'Consultas Recall', url: '/es/servicios-cliente/recall_audi/' },
        ],
      },
    ],
  },
  {
    label: 'Mundo Audi',
    href: '/es/mundo-audi/',
    hasDropdown: true,
    subBlocks: [
      {
        label: 'Espacios Audi',
        links: [
          { text: 'Audi Lounge', url: '/es/AudiLounge/' },
          { text: 'Audi Driving Center', url: '/es/mundo-audi/DrivingCenter/', target: '_blank' },
        ],
      },
      {
        label: 'Eventos',
        links: [
          { text: 'Audi quattro Cup', url: '/es/mundo-audi/audiquattrocup/' },
        ],
      },
      {
        label: 'Novedades',
        links: [
          { text: 'Audi F1 ® Project', url: '/es/innovacion-audi/audi-sport/formula-1/' },
        ],
      },
    ],
  },
  {
    label: 'Innovación',
    href: '/es/Innovacion/',
    hasDropdown: true,
    subBlocks: [
      {
        label: 'Eléctricos',
        links: [
          { text: 'E-movilidad', url: '/es/innovacion-audi/e-movilidad/' },
          { text: 'Modelos eléctricos', url: '/es/modelos/?byvehicletype=BEV' },
        ],
      },
      {
        label: 'Descubrí',
        links: [
          { text: 'Tecnología', url: '/es/innovacion-audi/tecnologia/' },
          { text: 'Historia', url: '/es/compania/historia/' },
        ],
      },
      {
        label: 'Sport',
        links: [
          { text: 'Audi Sport', url: '/es/innovacion-audi/audi-sport/' },
          { text: 'Audi F1 ® Project', url: '/es/innovacion-audi/audi-sport/formula-1/' },
        ],
      },
    ],
  },
];

const AudiLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="69"
    height="24"
    viewBox="0 0 69 24"
    fill="none"
    className="w-20 h-6 md:w-24 md:h-7"
  >
    <path
      d="M57.0623 21.3142C54.9409 21.3142 52.9856 20.5922 51.422 19.3822C53.0087 17.3448 53.9585 14.7826 53.9585 12C53.9585 9.21768 53.0087 6.65544 51.422 4.61784C52.9856 3.408 54.9409 2.68584 57.0623 2.68584C62.1714 2.68584 66.3281 6.86424 66.3281 12C66.3281 17.136 62.1714 21.3142 57.0623 21.3142ZM36.3802 19.3822C37.9672 17.3448 38.917 14.7826 38.917 12C38.917 9.21768 37.9672 6.65544 36.3804 4.61784C37.9438 3.408 39.8997 2.68584 42.0208 2.68584C44.1421 2.68584 46.0975 3.408 47.6611 4.61784C46.0743 6.65544 45.1246 9.21768 45.1246 12C45.1246 14.7826 46.0743 17.3448 47.6611 19.3822C46.0975 20.5922 44.1421 21.3142 42.0208 21.3142C39.8997 21.3142 37.9438 20.5922 36.3802 19.3822ZM21.3387 19.3822C22.9257 17.3448 23.8754 14.7826 23.8754 12C23.8754 9.21768 22.9257 6.65544 21.3389 4.61784C22.9023 3.408 24.8581 2.68584 26.9792 2.68584C29.1003 2.68584 31.0562 3.408 32.6196 4.61784C31.0328 6.65544 30.083 9.21768 30.083 12C30.083 14.7826 31.0328 17.3448 32.6196 19.3822C31.0562 20.5922 29.1003 21.3142 26.9792 21.3142C24.8581 21.3142 22.9023 20.5922 21.3387 19.3822ZM2.6719 12C2.6719 6.86424 6.82861 2.68584 11.9377 2.68584C14.0588 2.68584 16.0147 3.408 17.578 4.61784C15.9913 6.65544 15.0415 9.21768 15.0415 12C15.0415 14.7826 15.9913 17.3448 17.578 19.3822C16.0147 20.5922 14.0588 21.3142 11.9377 21.3142C6.82861 21.3142 2.6719 17.136 2.6719 12ZM19.4585 17.4305C18.3619 15.9005 17.7134 14.0256 17.7134 12C17.7134 9.97464 18.3619 8.09952 19.4585 6.56952C20.5551 8.09952 21.2035 9.97464 21.2035 12C21.2035 14.0256 20.5551 15.9005 19.4585 17.4305ZM34.5 17.4305C33.4034 15.9005 32.7549 14.0256 32.7549 12C32.7549 9.97464 33.4034 8.09952 34.5 6.56952C35.5966 8.09952 36.2451 9.97464 36.2451 12C36.2451 14.0256 35.5966 15.9005 34.5 17.4305ZM49.5415 17.4305C48.4449 15.9005 47.7965 14.0256 47.7965 12C47.7965 9.97464 48.4449 8.09952 49.5415 6.56952C50.6381 8.09952 51.2866 9.97464 51.2866 12C51.2866 14.0256 50.6381 15.9005 49.5415 17.4305ZM57.0623 0C54.2135 0 51.5958 1.00968 49.5415 2.68968C47.4873 1.00968 44.8696 0 42.0208 0C39.1719 0 36.5542 1.00968 34.5 2.68968C32.4458 1.00968 29.8278 0 26.9792 0C24.1304 0 21.5127 1.00968 19.4585 2.68968C17.4042 1.00968 14.7863 0 11.9377 0C5.35526 0 0 5.3832 0 12C0 18.617 5.35526 24 11.9377 24C14.7863 24 17.4042 22.9906 19.4585 21.3103C21.5127 22.9906 24.1304 24 26.9792 24C29.8278 24 32.4458 22.9906 34.5 21.3103C36.5542 22.9906 39.1719 24 42.0208 24C44.8696 24 47.4873 22.9906 49.5415 21.3103C51.5958 22.9906 54.2135 24 57.0623 24C63.6447 24 69 18.617 69 12C69 5.3832 63.6447 0 57.0623 0Z"
      fill="white"
    />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <AudiLogo />
        </Link>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center gap-2 text-sm"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          <span>Menú</span>
        </button>

        {/* Navegación desktop */}
        <nav className="hidden lg:flex items-center flex-1 justify-center gap-10 relative">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 hover:text-gray-300 transition text-base"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>

              {/* Dropdown desktop */}
              {item.hasDropdown && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-black text-white shadow-2xl rounded-lg py-8 px-12 w-max max-w-4xl">
                  <div className="grid grid-cols-3 gap-12">
                    {item.subBlocks?.map((block) => (
                      <div key={block.label}>
                        <h4 className="font-bold mb-4 text-lg">{block.label}</h4>
                        <ul>
                          {block.links.map((link) => (
                            <li key={link.text} className="mb-3">
                              <a
                                href={link.url}
                                target={link.target || '_self'}
                                className="hover:text-gray-300 transition"
                              >
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-2 hover:text-gray-300 transition text-sm">
            <MapPin size={20} />
            Seleccionar un concesionario
          </button>
          <button className="p-2 hover:bg-gray-900 rounded transition">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-black border-t border-gray-800 px-6 py-6">
          {menuItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="block py-3 text-lg hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
              {/* Submenús simples en móvil (opcional: expandibles) */}
              {item.hasDropdown && item.subBlocks && (
                <div className="pl-6">
                  {item.subBlocks.map((block) => (
                    <div key={block.label} className="mb-4">
                      <p className="font-bold text-sm mb-2">{block.label}</p>
                      {block.links.map((link) => (
                        <a
                          key={link.text}
                          href={link.url}
                          target={link.target || '_self'}
                          className="block py-1 text-gray-400 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}