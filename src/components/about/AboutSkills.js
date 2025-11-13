import React from "react";
import { TrendingUp, Users, Code, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: TrendingUp,
    title: "VENTAS",
    subtitle: "Ventas y estrategia comercial (más de 140 mil dólares en procesos de ventas)",
    description:
      "Experiencia comprobada en estructuración de procesos comerciales, desde la prospección hasta el cierre. Estrategias basadas en datos y psicología del consumidor que generan resultados medibles. He trabajado con marcas personales y empresas ayudándolas a escalar sus operaciones de venta con un enfoque sistemático.",
  },
  {
    icon: Users,
    title: "LIDERAZGO Y COMUNICACIÓN",
    subtitle: "Liderazgo y dirección de equipos de ventas",
    description:
      "Capacidad para construir, motivar y dirigir equipos de alto rendimiento. Comunicación efectiva que inspira acción y genera confianza. Experiencia en gestión de equipos remotos y presenciales, siempre enfocado en el desarrollo individual y los resultados colectivos.",
  },
  {
    icon: Code,
    title: "SOFTWARE",
    subtitle: "Desarrollo de software: diseño, arquitectura y programación moderna",
    description:
      "Dominio de arquitecturas web modernas, bases de datos y tecnologías. Desde el frontend hasta el backend, creo sistemas robustos y escalables. Experiencia en React, Node.js, Python y más. Enfoque en código limpio, mantenible y que realmente resuelva problemas de negocio.",
  },
  {
    icon: Lightbulb,
    title: "CREATIVIDAD",
    subtitle: "Generación de ideas, visión de negocio y enfoque estructurado",
    description:
      "La creatividad no es caos, es visión estructurada. Capacidad para ver oportunidades donde otros ven obstáculos, y convertir ideas abstractas en planes ejecutables.",
  },
];

export default function AboutSkills() {
  return (
    <section className="bg-fondoClaro py-24 font-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-5xl font-bold text-center text-[#111827] mb-20">
          Habilidades y Experiencia
        </h2>

        {/* Lista de habilidades */}
        <div className="space-y-12">
          {skills.map(({ icon: Icon, title, subtitle, description }, i) => (
            <article
              key={i}
              className="bg-fondoGrayClaro rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Ícono */}
                <div className="bg-[#111827] p-5 rounded-xl flex-shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Texto */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    ✅ {subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
