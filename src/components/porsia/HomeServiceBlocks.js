import React, { useState } from "react";
import { Building2, Code, TrendingUp } from "lucide-react";

import { FaLaptopCode, FaBuilding, FaChartLine } from "react-icons/fa"; // 👈 Importamos los íconos

const services = [
  {
    id: "realestate",
    title: "Real Estate",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description: "Como agente inmobiliario y CEO de Inmuebles Imperio, acompaña a sus clientes en todo el proceso de compra o venta de propiedades. Gestiona cada operación con visión comercial, asesoría y compromiso por generar oportunidades reales.",
  },
  {
    id: "software",
    title: "Desarrollo de Software",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    description: "Desarrolla sistemas digitales adaptados a las necesidades específicas de cada negocio. Desde sitios web funcionales hasta soluciones informáticas personalizadas, su enfoque estratégico permite escalar operaciones, automatizar procesos y mejorar la eficiencia empresarial.",
  },
  {
    id: "sales",
    title: "Ventas",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop",
    description: "Vendedor.Más allá de la estrategia, se involucra activamente en procesos de ventas empresariales. Su enfoque combina experiencia práctica con sensibilidad de mercado, ayudando a negocios a mejorar sus conversiones, expandir su presencia y construir relaciones duraderas con sus clientes.",
  },
];

export default function HomeServiceBlocks() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section className="bg-fondoDev font-luxury py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                  isExpanded ? "md:col-span-3 h-[500px]" : "h-[300px]"
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  
                  {isExpanded && (
                    <p className="text-lg text-gray-200 mt-4 max-w-3xl animate-in fade-in duration-500">
                      {service.description}
                    </p>
                  )}

                  
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
}