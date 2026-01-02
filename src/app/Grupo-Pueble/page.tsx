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
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden pt-24">
        {/* Background */}
        <Image
            src="/Concesionarios/salta/exterior.jpg"
            alt="Exterior concesionario Salta"
            fill
            priority
            className="object-cover"
        />

        {/* Overlay opcional (oscurecer) */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white px-6">
          <p className=" text-black text-sm md:text-base uppercase tracking-wider mb-4 mt-5">
            Grupo Empresarial
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Un grupo empresarial con más de 20 años de trayectoria, líder en maquinaria agrícola, vehículos y motocicletas premium
          </p>
        </div>
      </section>

      {/* Empresas del Grupo */}
      <section className="py-16 md:py-24 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101319] mb-12 text-center">
            Nuestras Empresas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empresas.map((empresa) => (
              <div
                key={empresa.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
                    src={empresa.imagen}
                    alt={empresa.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
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
                  <h3 className="text-2xl font-bold text-[#101319] mb-3">
                    {empresa.nombre}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {empresa.descripcion}
                  </p>
                  <a
                    href={empresa.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#101319] font-bold hover:text-gray-600 transition-colors"
                  >
                    Ver más
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-gray-50 py-16 md:py-20 px-5 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101319] mb-6">
            Más de 20 Años de Trayectoria
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Grupo Pueble es un grupo empresarial argentino con una sólida trayectoria en la comercialización 
            de maquinaria agrícola, vehículos y motocicletas premium. Con presencia en Tucumán y Salta, nos destacamos 
            por nuestro compromiso con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </div>
      </section>
    </div>
  );
}