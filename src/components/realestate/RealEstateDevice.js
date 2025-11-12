// import React from "react";

// const RealEstateDevice = () => {
//   return (
//     <section className="w-full bg-fondoDev text-gray-800 font-sans">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto text-center px-6 py-16">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Protect your device
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           As a digital creative, your laptop or tablet is at the center of your
//           work. Keep your device safe with a fabric sleeve that matches in
//           quality and looks.
//         </p>
//       </div>

//       {/* Section 1 */}
//       <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Minimal and thoughtful</h3>
//           <p className="text-gray-600">
//             Our laptop sleeve is compact and precisely fits 13" devices. The
//             zipper allows you to access the interior with ease, and the front
//             pouch provides a convenient place for your charger cable.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <img
//             src="/assets/casa.jpg"
//             alt="Laptop sleeve"
//             className="rounded-lg shadow-md max-w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div className="flex justify-center md:order-1 order-2">
//           <img
//             src="/assets/casa.jpg"
//             alt="Zipper details"
//             className="rounded-lg shadow-md max-w-full h-auto"
//           />
//         </div>
//         <div className="md:order-2 order-1">
//           <h3 className="text-lg font-semibold mb-3">Refined details</h3>
//           <p className="text-gray-600">
//             We design every detail with the best materials and finishes. This
//             laptop sleeve features durable canvas with double-stitched
//             construction, a felt interior, and a high-quality zipper that holds
//             up to daily use.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RealEstateDevice;



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
          Combino tecnología, visión estratégica y experiencia humana para ofrecer un servicio 
          inmobiliario integral. Cada propiedad es más que un espacio: es una oportunidad para 
          construir futuro.
        </p>
      </div>

      {/* Sección 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Enfoque Estratégico y Personalizado
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Cada cliente es único. Analizo su contexto, objetivos y posibilidades para ofrecer 
            estrategias inmobiliarias a medida, basadas en datos y experiencia práctica. 
            Desde la búsqueda hasta el cierre, cada paso está diseñado para maximizar resultados 
            y minimizar riesgos.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/assets/casa.jpg"
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
            src="/assets/casa2.jpg"
            alt="Gestión profesional"
            className="rounded-2xl shadow-xl max-w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="space-y-5 order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Tecnología y Confianza al Servicio del Cliente
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            La innovación tecnológica no reemplaza la confianza, la potencia. 
            Implemento herramientas digitales para seguimiento de propiedades, gestión de 
            clientes y análisis de mercado, asegurando transparencia y eficiencia en cada 
            operación.
          </p>
        </div>
      </div>
    </section>
  );
}
