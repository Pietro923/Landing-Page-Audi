"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MapPin, ChevronDown, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar oscura (solo desktop) - ESTÁTICA */}
      <div className="hidden md:flex justify-between items-center bg-[#101319] px-5 py-2 md:px-10 lg:px-20 text-xs text-gray-300 z-60">
  <div className="flex gap-6">
    <Link href="/contacto" className="hover:text-white transition-colors duration-200">
      CONTÁCTENOS
    </Link>
  </div>

  <div className="relative group">
    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-200">
      <MapPin size={14} />
      <span className="text-gray-400 group-hover:text-white">NUESTRAS SUCURSALES</span>
      <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
    </div>

    {/* Dropdown al hover */}
    <div className="absolute right-0 top-full mt-2 w-64 bg-[#101319] border border-white/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="py-3">
        <Link
          href="https://maps.app.goo.gl/T5q3Wp6M3vaJyFka9"
          target="_blank"                  // ← Abre en nueva pestaña
          rel="noopener noreferrer"        // ← Seguridad recomendada
          className="flex items-center px-5 py-3 hover:bg-white/10 transition-colors duration-200 text-sm"
        >
          <MapPin size={14} className="mr-2 shrink-0" />
          <div>
            <p className="">Tucumán Centro</p>
            <p className="text-xs text-gray-400">Santiago del Estero 902</p>
          </div>
        </Link>

        <Link
          href="https://maps.app.goo.gl/D2NWdvHjD7kXUvLy5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-3 hover:bg-white/10 transition-colors duration-200 text-sm"
        >
          <MapPin size={14} className="mr-2 shrink-0" />
          <div>
            <p className="">Tucumán Yerba Buena</p>
            <p className="text-xs text-gray-400">Av. Aconquija 1090</p>
          </div>
        </Link>

        <Link
          href="https://maps.app.goo.gl/NdJzWHRAxTDTK4Wz8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-3 hover:bg-white/10 transition-colors duration-200 text-sm"
        >
          <MapPin size={14} className="mr-2 shrink-0" />
          <div>
            <p className="">Salta</p>
            <p className="text-xs text-gray-400">Av. Belgrano 1050</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>

      {/* Main navbar - STICKY con efecto glassmorphism */}
      <nav
        className={`
          fixed left-0 w-full z-50
          flex justify-between items-center gap-4
          text-sm  lg:px-20 px-6 py-4
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "top-0 bg-[#101319]/95 backdrop-blur-xl text-white shadow-2xl border-b border-white/10"
              : "md:top-8 top-0 bg-transparent text-white"
          }
        `}
      >
        {/* Logo a la izquierda con absolute */}
        <div className="flex items-center absolute left-6 md:left-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logos/Audi.svg"
              alt="Audi Argentina"
              width={96}
              height={24}
              className="w-20 md:w-24 h-auto brightness-0 invert hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent side="right" className="w-full bg-[#101319] text-white p-0 border-none">
              <MobileMenu close={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu - CON ml-auto PARA EMPUJARLO A LA DERECHA */}
        <div className="hidden md:flex gap-8 items-center ml-auto">
          <MegaMenuDropdown title="Modelos" scrolled={scrolled} />
          <NavLink href="/nosotros" scrolled={scrolled}>
            Nosotros
          </NavLink>
          <NavLink href="/post-venta" scrolled={scrolled}>
            Post Venta
          </NavLink>
          <NavLink href="/Grupo-Pueble" scrolled={scrolled}>
           Grupo Pueble
          </NavLink>
          <NavLink href="/contacto" scrolled={scrolled}>
            Contacto
          </NavLink>
          <NavLink href="/denuncias" scrolled={scrolled}>
            Denuncias
          </NavLink>
        </div>
      </nav>
    </>
  );
}

function NavLink({ 
  href,  
  children 
}: { 
  href: string; 
  scrolled: boolean; 
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group inline-block py-2"
    >
      <span className="cursor-pointer transition-colors duration-200 whitespace-nowrap">
        {children}
      </span>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MegaMenuDropdown({ title, scrolled }: { title: string; scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const audiModels = [
    { name: "A1", img: "/Vehiculos/A1.webp", link: "/modelos/A1", count: 1 },
    { name: "A3", img: "/Vehiculos/A3.webp", link: "/modelos/A3", count: 6 },
    { name: "A5", img: "/Vehiculos/A5.webp", link: "/modelos/A5", count: 1 },
    { name: "A6", img: "/Vehiculos/A6.webp", link: "/modelos/A6", count: 2 },
    { name: "Q2", img: "/Vehiculos/Q2.webp", link: "/modelos/Q2", count: 1 },
    { name: "Q3", img: "/Vehiculos/Q3.webp", link: "/modelos/Q3", count: 3 },
    { name: "Q5", img: "/Vehiculos/Q5.webp", link: "/modelos/Q5", count: 3 },
    { name: "Q7", img: "/Vehiculos/Q7.webp", link: "/modelos/Q7", count: 1 },
    { name: "Q8", img: "/Vehiculos/Q8.webp", link: "/modelos/Q8", count: 2 },
  ];

  const vehicleCategories = [
    { name: "Serie A", vehicles: audiModels.filter(m => m.name.startsWith("A")) },
    { name: "Serie Q", vehicles: audiModels.filter(m => m.name.startsWith("Q")) },
  ];

  const filteredVehicles = selectedCategory === "all"
    ? audiModels
    : vehicleCategories.find(cat => cat.name === selectedCategory)?.vehicles || [];

  const generateWhatsAppLink = (vehicleName: string) => {
    const message = encodeURIComponent(
      `¡Hola! Estoy interesado en el Audi ${vehicleName}. ¿Podrían enviarme más información sobre versiones disponibles, precios y opciones de financiación? Gracias.`
    );
    return `https://wa.me/5491123456789?text=${message}`;
  };

  const handleLinkClick = () => setIsOpen(false);
  const handleTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Bloquear scroll del body cuando el mega menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative group inline-block py-2">
        <button
          onClick={handleTitleClick}
          className="flex items-center gap-1 bg-transparent border-none text-inherit font-inherit p-0"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {title}
          <ChevronDown size={16} className={isOpen ? 'rotate-180' : ''} />
        </button>
        <div className={`absolute bottom-0 left-0 h-0.5 bg-white ${isOpen ? "w-full" : "w-0 group-hover:w-full"}`} />
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setIsOpen(false)} />
          
          <div 
            className={`fixed inset-x-0 bg-[#101319] text-white shadow-2xl z-50 flex flex-col border-t border-white/10 ${
              scrolled ? "top-0" : "md:top-8 top-0"
            }`}
            style={{ height: scrolled ? '100vh' : 'calc(100vh - 32px)' }}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:right-20 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>

            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-20 py-12">
                <div className="hidden md:flex justify-start gap-12 pb-8 border-b border-white/20">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`text-sm  pb-3 border-b-2 ${
                      selectedCategory === "all"
                        ? "border-white text-white"
                        : "border-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    Todos los modelos
                  </button>
                  {vehicleCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`text-sm  pb-3 border-b-2 ${
                        selectedCategory === category.name
                          ? "border-white text-white"
                          : "border-transparent text-gray-400 hover:text-white"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 pb-10 pt-8">
                  {filteredVehicles.map((model) => (
                    <div 
                      key={model.name} 
                      className="group text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10"
                    >
                      <Link href={model.link} onClick={handleLinkClick}>
                        <div className="aspect-4/3 relative overflow-hidden rounded-xl bg-black/20 mb-6">
                          <Image
                            src={model.img}
                            alt={`Audi ${model.name}`}
                            fill
                            className="object-contain p-6"
                          />
                        </div>
                        <h3 className="text-2xl  mb-2">{model.name}</h3>
                        <p className="text-sm text-gray-400 mb-6">
                          {model.count} {model.count === 1 ? "versión" : "versiones"} disponible{model.count > 1 ? "s" : ""}
                        </p>
                      </Link>
                      <Link
                        href={generateWhatsAppLink(model.name)}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleLinkClick}
                      >
                        <button className="w-full py-3.5 border border-white/30 rounded-full  text-white hover:bg-white hover:text-[#101319]">
                          Consultar por WhatsApp
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#0a0d11]">
              <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-20 py-6 text-center">
                <Link
                  href="/modelos"
                  onClick={handleLinkClick}
                  className="inline-flex items-center text-lg  hover:text-gray-300"
                >
                  Explorar todos los modelos
                  <svg className="ml-3 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Menú móvil con diseño Audi
function MobileMenu({ close }: { close: () => void }) {
  const menuItems = [
    { title: "Modelos", href: "/modelos" },
    { title: "Nosotros", href: "/nosotros" },
    { title: "Post Venta", href: "/post-venta" },
    { title: "Grupo Pueble", href: "/Grupo-Pueble" },
    { title: "Contacto", href: "/contacto" },
    { title: "Denuncias", href: "/denuncias" },
  ];

  return (
    <div className="h-full flex flex-col bg-linear-to-b from-[#101319] to-[#1a1d24]">
      {/* Header del menú móvil */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <Link href="/" onClick={close} className="flex items-center">
          <Image
            src="/Logos/Audi.svg"
            alt="Audi"
            width={96}
            height={24}
            className="brightness-0 invert"
          />
        </Link>
      </div>

      {/* Contenido scrollable */}
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.title} className="border-b border-white/10">
            <Link
              href={item.href}
              onClick={close}
              className="block px-6 py-5 text-lg  hover:bg-white/5 transition-colors duration-200"
            >
              {item.title}
            </Link>
          </div>
        ))}

        {/* Footer contacto */}
        <div className="p-6 mt-6 bg-white/5 border-t border-white/10">
          <Link
            href="/contacto"
            onClick={close}
            className="flex items-center justify-center gap-3 text-white  mb-4"
          >
            <MapPin size={20} />
            CONTÁCTENOS
          </Link>
          <p className="text-center text-sm text-gray-400">DE 08:00 A 17:30 - LUNES A VIERNES</p>
        </div>
      </div>
    </div>
  );
}