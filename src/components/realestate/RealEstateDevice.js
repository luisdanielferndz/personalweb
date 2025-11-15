import React from "react";

export default function RealEstateDevice() {
  return (
    <section className="w-full bg-fondoDev text-gray-100 font-luxury">
      {/* Encabezado */}
      <div className="max-w-6xl mx-auto text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Experiencia Inmobiliaria Moderna
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Trabajo con precisión y enfoque. Cada propiedad se gestiona con estrategia, 
          tecnología y atención personalizada, garantizando operaciones seguras y resultados concretos.
        </p>
      </div>

      {/* Sección 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Estrategia Definida y Personalizada
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Cada cliente tiene objetivos claros. Analizo su situación y diseño un plan 
            inmobiliario específico, basado en datos de mercado y experiencia comprobada. 
            Desde la búsqueda hasta el cierre, cada paso está orientado a maximizar valor 
            y reducir riesgos.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1723470918060-5f7c382757cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Estrategia inmobiliaria"
            className="rounded-2xl shadow-xl max-w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Sección 2 */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1757439402214-2311405d70bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gestión profesional"
            className="rounded-2xl shadow-xl max-w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="space-y-5 order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Tecnología y Transparencia
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Utilizo herramientas digitales para seguimiento de propiedades, gestión de clientes 
            y análisis de mercado. La innovación respalda la confianza: cada operación se 
            ejecuta con transparencia, eficiencia y control absoluto.
          </p>
        </div>
      </div>
    </section>
  );
}
