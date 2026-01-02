"use client"

import { 
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PietroButton() {
  const socialLinks = [
    { 
      name: 'Portfolio', 
      icon: ExternalLink, 
      href: 'https://pietrocode.com',
      color: 'hover:bg-[#BB0A30]/10'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/Pietro923',
      color: 'hover:bg-gray-700/10'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/pietrobonacossa',
      color: 'hover:bg-blue-600/10'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:jpbonacossa@gmail.com',
      color: 'hover:bg-red-600/10'
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
          aria-label="Información del desarrollador"
        >
          <Code className="w-4 h-4 text-[#BB0A30] group-hover:text-[#bb0a30d5] transition-colors" />
          <span className="text-sm font-medium">Desarrollado por Pietro</span>
        </button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-80 p-0 bg-[#0a0d11] text-white rounded-xl shadow-2xl border border-white/10 overflow-hidden" 
        side="top" 
        sideOffset={12}
        align="center"
      >
        {/* Header con estilo Audi */}
        <div className="relative p-6 bg-linear-to-r from-[#101319] to-[#1a1f2b] overflow-hidden">
          {/* Línea característica Audi */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#BB0A30] to-transparent" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-xl text-white">Pietro Bonacossa</h3>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  Full Stack Developer
                </p>
              </div>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                Disponible
              </span>
            </div>
          </div>
        </div>
        
        {/* Descripción */}
        <div className="p-5">
          <p className="text-sm text-gray-300 leading-relaxed mb-5">
            Especialista en desarrollo de aplicaciones web modernas. 
            Transformo ideas en experiencias digitales excepcionales con 
            <span className="text-white font-semibold"> tecnología de vanguardia</span>.
          </p>
          
          {/* Social Links Grid - Estilo minimalista Audi */}
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-2.5 p-3 bg-white/5 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/30 hover:bg-white/10 ${link.color}`}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  
                  {/* Flecha que aparece en hover */}
                  <ExternalLink className="w-3 h-3 text-gray-600 opacity-0 group-hover:opacity-100 absolute right-2 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" />
                </a>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}