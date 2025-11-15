import React from "react";

const RealEstateHome = () => {
  return (
    <div className="w-full font-luxury text-gray-900 bg-fondoDev">
    
      {/* Contenido inferior */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 bg-white/80 backdrop-blur-md rounded-t-2xl shadow-xl -mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Margen Profesional de Trabajo
        </h2>

        <p className="text-center text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Mi enfoque en bienes raíces y ventas se basa en la transparencia, la estrategia comercial y la atención personalizada. 
          Cada cliente recibe un acompañamiento integral desde la prospección hasta el cierre, garantizando seguridad y resultados tangibles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Prospección
            </h4>
            <p className="text-gray-600">
              Identificación de oportunidades de negocio y clientes potenciales mediante análisis de mercado y networking.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Estrategia
            </h4>
            <p className="text-gray-600">
              Diseño de planes de venta claros, con objetivos medibles y estrategias de negociación efectivas.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Gestión
            </h4>
            <p className="text-gray-600">
              Administración de propiedades, coordinación de visitas y seguimiento constante con clientes interesados.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Transparencia
            </h4>
            <p className="text-gray-600">
              Comunicación clara y honesta en cada etapa del proceso, asegurando confianza y credibilidad.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Resultados
            </h4>
            <p className="text-gray-600">
              Cierres exitosos que reflejan el valor real de cada propiedad y maximizan la inversión del cliente.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-1">
              Consideraciones
            </h4>
            <p className="text-gray-600">
              Adaptación a las necesidades específicas de cada cliente, respetando tiempos, presupuestos y expectativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateHome;
