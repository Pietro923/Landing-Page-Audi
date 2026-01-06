"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Empresa {
  id: string;
  nombre: string;
  logo: string;
  imagen: string;
  descripcion: string;
  link: string;
}

export default function GrupoPueblePage() {
  const empresas: Empresa[] = [
    {
      id: "pueble-sa",
      nombre: "Pueble S.A.",
      logo: "/GrupoPueble/logo/case.webp",
      imagen: "/GrupoPueble/vehiculo/case_vehiculo.webp",
      descripcion: "Maquinaria agrícola Case IH y JCB para el campo argentino",
      link: "https://www.instagram.com/pueblesa/",
    },
    {
      id: "cp-motors",
      nombre: "CP Motors",
      logo: "/GrupoPueble/logo/kia.webp",
      imagen: "/GrupoPueble/vehiculo/kia_vehiculo.webp",
      descripcion: "Concesionario oficial Kia en Tucumán",
      link: "https://www.instagram.com/kia.tucuman/",
    },
    {
      id: "masi-sa",
      nombre: "Masi S.A",
      logo: "/GrupoPueble/logo/ducati_logo2.webp",
      imagen: "/GrupoPueble/vehiculo/ducati_vehiculo.webp",
      descripcion: "Motocicletas Ducati premium en Tucumán",
      link: "https://www.instagram.com/ducatitucuman/",
    },
    {
      id: "ub-motors",
      nombre: "UB Motors",
      logo: "/GrupoPueble/logo/audi.webp",
      imagen: "/GrupoPueble/vehiculo/A5.avif",
      descripcion: "Concesionario oficial Audi",
      link: "https://www.instagram.com/audiubmotors/",
    },
    {
      id: "semage-sa",
      nombre: "Semage S.A",
      logo: "/GrupoPueble/logo/Semage.PNG",
      imagen: "/GrupoPueble/vehiculo/semage_vehiculo.webp",
      descripcion: "Equipamiento agrícola Acogra",
      link: "https://www.instagram.com/SemageGp/",
    },
    {
      id: "indian-motors",
      nombre: "Indian Motors",
      logo: "/GrupoPueble/logo/Indian_Motorcycle_logo.svg.png",
      imagen: "/GrupoPueble/vehiculo/Indian.jpg",
      descripcion: "Motocicletas Indian en Tucumán",
      link: "https://www.instagram.com/indian_motorcycle_tuc/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] text-white">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        {/* RECOMENDACIÓN: Imagen del grupo de empresas, o vista aérea de los concesionarios, o logo del grupo destacado */}
        <Image
            src="/Concesionarios/salta/exterior.jpg"
            alt="Grupo Pueble - Empresas del Norte Argentino"
            fill
            priority
            className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50" />
        <div className="relative z-10 max-w-screen-2xl mx-auto text-center text-white px-6 flex flex-col justify-center h-full">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Grupo Empresarial
            </span>
            <div className="h-px w-20 bg-white mt-2 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
            Grupo Pueble
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/GrupoPueble/LogoPueble.webp"
              alt="Logo Grupo Pueble"
              width={800}
              height={200}
              className="h-44 w-auto"
            />
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Un grupo empresarial con más de 20 años de trayectoria, líder en maquinaria agrícola, vehículos y motocicletas premium
          </p>
        </div>
      </section>

      {/* Empresas del Grupo */}
      <section className="py-24 px-6 bg-[#101319]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
                Nuestras empresas
              </span>
              <div className="h-px w-20 bg-white mt-2 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Nuestras Empresas
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Líderes en sus respectivos segmentos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empresas.map((empresa) => (
              <div
                key={empresa.id}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-500"
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
                    src={empresa.imagen}
                    alt={empresa.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent" />
                  
                  {/* Logo sobre la imagen */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <Image
                      src={empresa.logo}
                      alt={`Logo ${empresa.nombre}`}
                      width={80}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">
                    {empresa.nombre}
                  </h3>
                  <p className="text-gray-300 mb-6 font-light">
                    {empresa.descripcion}
                  </p>
                  <a
                    href={empresa.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors uppercase tracking-wider text-sm"
                  >
                    Ver más
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-[#0a0d11] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Historia
            </span>
            <div className="h-px w-20 bg-white mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Más de 20 Años de Trayectoria
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            Grupo Pueble es un grupo empresarial argentino con una sólida trayectoria en la comercialización 
            de maquinaria agrícola, vehículos y motocicletas premium. Con presencia en Tucumán y Salta, nos destacamos 
            por nuestro compromiso con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </div>
      </section>
    </div>
  );
}