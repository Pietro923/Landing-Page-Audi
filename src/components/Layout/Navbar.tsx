"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
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
      {/* Top bar negra (solo desktop) - ESTÁTICA */}
      <div className="hidden md:flex justify-between items-center bg-[#05141F] px-5 py-1 md:px-10 lg:px-20 text-xs font-semibold text-white z-60">
        <div className="flex gap-4">
          <Link href="/contacto" className="hover:underline">CONTÁCTENOS</Link>
        </div>
        <div className="flex gap-4">
          <h2>DE 08:00 A 17:30 - LUNES A VIERNES</h2>
        </div>
      </div>

      {/* Main navbar - STICKY con efecto Kia */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          flex justify-between items-center gap-2
          text-[1rem] font-semibold text-base lg:px-20
          transition-all duration-200 ease-in-out
          ${
            scrolled
              ? "bg-white text-[#05141F] border-gray-200"
              : "bg-transparent text-white border-white/20 hover:bg-white hover:text-[#05141F]"
          }
        `}
      >
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-current hover:bg-transparent"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
               <SheetTitle></SheetTitle> {/*esta linea para evitar un error de next */}
            <SheetContent side="right" className="w-full bg-white p-0 border-none">
              <MobileMenu close={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Left menu (desktop) */}
        <div className="hidden md:flex gap-10">
          <MegaMenuDropdown title="Modelos" scrolled={scrolled} />
          <Link
            href="/repuestos"
            className="relative group inline-block"
          >
            <p className="cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap">
              Servicios y Mantenimiento
            </p>
            <div
              className={`
              absolute bottom-0.5 left-0 w-full h-px
              transition-all duration-200 bg-transparent
              ${scrolled ? "group-hover:bg-[#05141F]" : "group-hover:bg-[#05141F]"}
            `}
            />
          </Link>
        </div>

        {/* Logo central con efecto de color */}
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            {/* Logo Kia */}
            <Image
              src="/Logos/Audi.svg"
              alt="Kia Argentina"
              width={96}
              height={24}
              className={`
                w-20 md:w-24 h-auto
                transition-all duration-300 ease-in-out
                ${scrolled ? "brightness-0" : "brightness-100 group-hover:brightness-0"}
              `}
              priority
            />
            {/* <div 
              className={`
                h-6 md:h-8 w-px
                transition-all duration-300 ease-in-out
                ${scrolled ? "bg-[#05141F]" : "bg-white group-hover:bg-[#05141F]"}
              `}
            />
            <Image
              src="/Logos/CP-Motors-Logo.png"
              alt="CP Motors"
              quality={100}
              width={96}
              height={32}
              className={`
                w-28 md:w-32 h-24
                transition-all duration-300 ease-in-out
                ${scrolled ? "brightness-0" : "brightness-100 group-hover:brightness-0"}
              `}
              priority
            /> */}
          </Link>
        </div>

        {/* Right menu (desktop) */}
        <div className="hidden md:flex gap-10">
          <Link
            href="/grupo-pueble"
            className="relative group inline-block"
          >
            <p className="cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap">
              Grupo Pueble
            </p>
            <div
              className={`
              absolute bottom-0.5 left-0 w-full h-px
              transition-all duration-200 bg-transparent
              ${scrolled ? "group-hover:bg-[#05141F]" : "group-hover:bg-[#05141F]"}
            `}
            />
          </Link>
          <Link
            href="/sobre-nosotros"
            className="relative group inline-block"
          >
            <p className="cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap">
              Sobre Nosotros
            </p>
            <div
              className={`
              absolute bottom-0.5 left-0 w-full h-px
              transition-all duration-200 bg-transparent
              ${scrolled ? "group-hover:bg-[#05141F]" : "group-hover:bg-[#05141F]"}
            `}
            />
          </Link>
        </div>

        {/* Espacio vacío para balancear en móvil */}
        <div className="md:hidden w-6" />
      </nav>
    </>
  );
}

function MegaMenuDropdown({ title }: { title: string; scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const audiModels = [
    { name: "A1", img: "/Vehiculos/A1.webp", link: "/modelos/a1", count: 1 },
    { name: "A3", img: "/Vehiculos/A3.webp", link: "/modelos/a3", count: 6 },
    { name: "A5", img: "/Vehiculos/A5.webp", link: "/modelos/a5", count: 1 },
    { name: "A6", img: "/Vehiculos/A6.webp", link: "/modelos/a6", count: 2 },
    { name: "Q2", img: "/Vehiculos/Q2.webp", link: "/modelos/q2", count: 1 },
    { name: "Q3", img: "/Vehiculos/Q3.webp", link: "/modelos/q3", count: 3 },
    { name: "Q5", img: "/Vehiculos/Q5.webp", link: "/modelos/q5", count: 3 },
    { name: "Q7", img: "/Vehiculos/Q7.webp", link: "/modelos/q7", count: 1 },
    { name: "Q8", img: "/Vehiculos/Q8.webp", link: "/modelos/q8", count: 2 },
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
    return `https://wa.me/5491123456789?text=${message}`; // Cambiá el número real
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

  // Calculamos la altura disponible: desde debajo del navbar hasta el final de la pantalla
  // 80px es la altura aproximada del navbar, ajustalo si cambia
  //const maxHeight = typeof window !== "undefined" ? window.innerHeight - 80 : "calc(100vh - 80px)";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón "Modelos" */}
      <div className="relative group inline-block">
        <button
          onClick={handleTitleClick}
          className="cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap block bg-transparent border-none text-inherit font-inherit p-0"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {title}
        </button>
        <div
          className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
            isOpen ? "bg-current w-full" : "bg-transparent group-hover:bg-current group-hover:w-full"
          }`}
        />
      </div>

      {/* Mega menú con scroll interno */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[80px] bg-white text-[#05141F] shadow-2xl z-50 flex flex-col" style={{ height: `calc(100vh - 80px)` }}>
          {/* Área con scroll */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-20 py-10">
              {/* Filtros */}
              <div className="hidden md:flex justify-start gap-12 pb-8 border-b border-gray-200">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`text-sm font-medium pb-3 border-b-2 transition ${
                    selectedCategory === "all"
                      ? "border-[#05141F] text-[#05141F]"
                      : "border-transparent text-gray-600 hover:text-[#05141F]"
                  }`}
                >
                  Todos los modelos
                </button>
                {vehicleCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`text-sm font-medium pb-3 border-b-2 transition ${
                      selectedCategory === category.name
                        ? "border-[#05141F] text-[#05141F]"
                        : "border-transparent text-gray-600 hover:text-[#05141F]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Grid de modelos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-10">
                {filteredVehicles.map((model) => (
                  <div key={model.name} className="group text-center">
                    <Link href={model.link} onClick={handleLinkClick}>
                      <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-gray-50 mb-6">
                        <Image
                          src={model.img}
                          alt={`Audi ${model.name}`}
                          fill
                          className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                          priority
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                      <p className="text-sm text-gray-600 mb-6">
                        {model.count} {model.count === 1 ? "versión" : "versiones"} disponible{model.count > 1 ? "s" : ""}
                      </p>
                    </Link>

                    <Link
                      href={generateWhatsAppLink(model.name)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleLinkClick}
                    >
                      <button className="w-full py-3.5 border border-[#05141F] rounded-full font-semibold text-[#05141F] hover:bg-[#05141F] hover:text-white transition duration-300">
                        Consultar por WhatsApp
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer fijo al fondo (siempre visible) */}
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-20 py-6 text-center">
              <Link
                href="/modelos"
                onClick={handleLinkClick}
                className="inline-flex items-center text-lg font-bold hover:text-gray-700 transition"
              >
                Explorar todos los modelos
                <svg className="ml-3 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Menú móvil actualizado
function MobileMenu({ close }: { close: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // DATOS DE VEHÍCULOS (mismo que antes)
  const vehicleCategories = [
    {
      name: "Autos",
      vehicles: [
        {
          name: "All-new K3 Sedán",
          img: "/navbar/k3sedan.webp",
          link: "/todos-los-modelos/K3-Sedan",
          prices: [{ version: "EX*" }, { version: "GT-Line*" }],
        },
      ],
    },
    {
      name: "SUV",
      vehicles: [
        { name: "All-new K3 Cross", img: "/navbar/k3cross.webp", link: "/todos-los-modelos/K3-Cross", prices: [{ version: "EX*" }, { version: "GT-Line*" }] },
        { name: "Seltos", img: "/navbar/seltos.webp", link: "/todos-los-modelos/Seltos", prices: [{ version: "LX 1.5 A/T*" }] },
        { name: "Sportage", img: "/navbar/sportage.webp", link: "/todos-los-modelos/Sportage", prices: [{ version: "EX 2.0 4x2 ATT*" }, { version: "X-line 2.0R AWD AT*" }] },
        { name: "Carnival", img: "/navbar/carnival.webp", link: "/todos-los-modelos/Carnival", prices: [{ version: "EX 2.2R A/T*" }, { version: "SX 2.2R A/T*" }] },
      ],
    },
    {
      name: "Utilitarios",
      vehicles: [
        { name: "K2500", img: "/navbar/k2500.webp", link: "/todos-los-modelos/K2500", prices: [{ version: "CS 2.5T MT*" }] },
      ],
    },
  ];

  const filteredVehicles = selectedCategory === "all"
    ? vehicleCategories.flatMap(cat => cat.vehicles)
    : vehicleCategories.find(cat => cat.name === selectedCategory)?.vehicles || [];

  const generateWhatsAppLink = (vehicleName: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el ${vehicleName}. ¿Podrían enviarme más detalles y precios?`);
    return `https://wa.me/5493814132674?text=${message}`;
  };

  const handleLinkClick = () => close();

  const menuItems = [
    { title: "Ventas", expandable: true },
    { title: "Post Venta", href: "/post-venta" },
    { title: "Repuestos", href: "/repuestos" },
    { title: "Grupo Pueble", href: "/grupo-pueble" },
    { title: "Sobre Nosotros", href: "/sobre-nosotros" },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header del menú móvil */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3">
          <Image
            src="/Logos/Audi.svg"
            alt="Kia"
            width={96}
            height={24}
            className="brightness-0"
          />
          {/* <div className="h-6 w-px bg-gray-300" />
          <Image
            src="/Logos/CP-Motors-Logo.png"
            alt="CP Motors"
            width={110}
            height={40}
            className="brightness-0"
          /> */}
        </Link>
        {/* <button
          onClick={close}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Cerrar menú"
        >
          <svg className="w-6 h-6 text-[#05141F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
      </div>

      {/* Contenido scrollable */}
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.title} className="border-b border-gray-100">
            {item.href ? (
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className="block px-6 py-4 text-lg font-medium hover:bg-gray-50 transition"
              >
                {item.title}
              </Link>
            ) : (
              <button
                onClick={() => setOpenSection(openSection === item.title ? null : item.title)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium hover:bg-gray-50 transition"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openSection === item.title ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}

            {/* Contenido expandido: solo para Ventas */}
            {item.expandable && openSection === item.title && (
              <div className="pb-6">
                {/* Filtros móviles */}
                <div className="px-4 pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {["all", "Autos", "SUV", "Utilitarios"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`py-2 px-4 rounded-full text-sm font-medium transition ${
                          selectedCategory === cat
                            ? "bg-[#05141F] text-white"
                            : "bg-gray-100 text-[#05141F] hover:bg-gray-200"
                        }`}
                      >
                        {cat === "all" ? "Todos" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid de vehículos */}
                <div className="mt-6 grid grid-cols-1 gap-6 px-4">
                  {filteredVehicles.map((vehicle) => (
                    <div key={vehicle.name} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                      <Link href={vehicle.link} onClick={handleLinkClick}>
                        <Image
                          src={vehicle.img}
                          alt={vehicle.name}
                          width={400}
                          height={250}
                          className="w-full h-48 object-contain"
                        />
                        <div className="p-4 text-center">
                          <h4 className="font-bold text-lg">{vehicle.name}</h4>
                          <div className="mt-2 space-y-1">
                            {vehicle.prices.map((p, i) => (
                              <p key={i} className="text-sm text-gray-600">{p.version}</p>
                            ))}
                          </div>
                        </div>
                      </Link>
                      <div className="px-4 pb-4">
                        <Link
                          href={generateWhatsAppLink(vehicle.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="block w-full"
                          onClick={handleLinkClick}
                        >
                          <button className="w-full bg-[#05141F] text-white py-3 rounded-full font-semibold hover:bg-[#37434C] transition flex items-center justify-center gap-2">
                            Consultar por WhatsApp
                            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
                              <rect width="32" height="32" rx="16" fill="white" />
                              <path d="M19.9 16.2L13.8 24.5H12L18.3 16.5L12 8.5H13.8L19.9 16.2Z" fill="#05141F" />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ver todos los modelos */}
                <div className="px-4 mt-6 pb-4">
                  <Link
                    href="/todos-los-modelos"
                    onClick={handleLinkClick}
                    className="block text-center text-[#05141F] font-bold py-3 border border-[#05141F] rounded-full hover:bg-[#05141F] hover:text-white transition"
                  >
                    Ver todos los modelos →
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer contacto */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <Link
            href="/contacto"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-3 text-[#05141F] font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            CONTÁCTENOS
          </Link>
          <p className="text-center text-sm text-gray-600 mt-2">DE 08:00 A 17:30 - LUNES A VIERNES</p>
        </div>
      </div>
    </div>
  );
}