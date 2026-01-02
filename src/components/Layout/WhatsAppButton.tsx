"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { MessageSquare, ChevronRight, Wrench, Phone } from "lucide-react"
import Image from "next/image"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  
  const options = [
    {
      title: "Ventas",
      description: "Consultas sobre vehículos, precios y financiación",
      phone: "",
      message: "Hola, me gustaría obtener información sobre los modelos de Audi disponibles.",
      icon: <MessageSquare className="w-5 h-5 text-green-600" />
    },
    {
      title: "PostVenta",
      description: "Agenda tu service, consultas técnicas y repuestos",
      phone: "",
      message: "Hola, necesito consultar sobre el service de mi Audi.",
      icon: <Wrench className="w-5 h-5 text-green-600" />
    },
    {
     title: "Repuestos",
     description: "Consultas sobre piezas y accesorios originales",
    phone: "",
     message: "Hola, tengo una consulta sobre los repuestos disponibles.",
     icon: <Phone className="w-5 h-5 text-green-600" />
    },
  ]
  
  const handleOptionClick = (phone: string, message: string) => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
    setIsOpen(false)
  }
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button 
          className="fixed bottom-6 right-6 z-40 p-3 md:p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <div className="relative">
            <Image 
              src="/Logos/whatsapp.svg" 
              width={28} 
              height={28} 
              alt="WhatsApp" 
              className="w-6 h-6 md:w-7 md:h-7"
              priority
            />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-5 md:w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-green-300"></span>
            </span>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm md:text-base font-medium">
            ¿Necesitás ayuda?
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-0 bg-white rounded-xl shadow-xl border-0" 
        side="top" 
        sideOffset={16}
        align="end"
      >
        <div className="p-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-t-xl">
          <h3 className="font-bold text-lg">
            Hola, somos <span className="italic">UB Motors</span>
          </h3>
          <p className="text-green-100 text-sm mt-1">
            ¿En qué podemos ayudarte hoy?
          </p>
        </div>
        <div className="divide-y divide-gray-100">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.phone, option.message)}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-start group last:rounded-b-xl"
            >
              <div className="mr-3 mt-1 bg-green-50 p-2 rounded-full group-hover:bg-green-100 transition-colors">
                {option.icon}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">
                  {option.title}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">
                  {option.description}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-all self-center transform group-hover:translate-x-1 duration-200" />
            </button>
          ))}
        </div>
        
        <div className="p-3 bg-gray-50 text-center text-xs text-gray-500 rounded-b-xl border-t border-gray-100">
          Horario de atención: Lun - Vie 8:00 - 17:30
        </div>
      </PopoverContent>
    </Popover>
  )
}