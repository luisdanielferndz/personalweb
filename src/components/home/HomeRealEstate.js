// import React from 'react';

// const HomeRealEstate = React.memo(() => {
//   const imageSrc = '/assets/casa.jpg';
//   const altText = 'Casa moderna gestionada por Inmuebles Imperio';

//   return (
//     <section
//       className="w-full bg-fondoDev text-gray-800 font-sans overflow-x-hidden"
//       aria-labelledby="real-estate-heading"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
//         {/* Imagen a la izquierda */}
//         <figure className="w-full h-full overflow-hidden">
//           <img
//             src={imageSrc}
//             alt={altText}
//             className="w-full h-full object-cover max-w-full"
//             loading="lazy"
//             decoding="async"
//             fetchpriority="low"
//           />
//         </figure>

//         {/* Contenido a la derecha */}
//         <article className="px-8 py-16 md:px-16 space-y-8">
//           <header>
//             <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
//               ¿Quieres vender o adquirir una propiedad?
//             </p>

//             <h2
//               id="real-estate-heading"
//               className="text-3xl md:text-4xl font-bold mb-4 text-colorTextClaro"
//             >
//               Ofrecemos estrategia, seguridad y resultados reales
//             </h2>
//           </header>

//           <p className="text-gray-300 max-w-lg leading-relaxed whitespace-pre-line">
//             Como corredor inmobiliario y CEO de Inmuebles Imperio, lidero un equipo que acompaña a cada cliente en todo el proceso de compra y venta, desde la evaluación inicial hasta el cierre exitoso.

//             Fundada en Cuba y con expansión al mercado brasileño, gestionamos operaciones con visión comercial, asesoría experta y compromiso total.

//             Nuestros pilares:
//             • Propiedades Exclusivas: calidad, ubicación y rentabilidad
//             • Asesoría Profesional: acompañamiento experto en cada paso
//             • Transacciones Seguras: transparencia y legalidad garantizadas
//             • Compromiso Local: desarrollo sostenible en tu comunidad

//             <strong className="block mt-4 text-gray-100">
//               Si estás listo para vender, nosotros estamos listos para ayudarte.
//               Conviértelo en una experiencia rentable, clara y sin complicaciones.
//             </strong>
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
//             <Feature
//               title="Propiedades Exclusivas"
//               description="Seleccionamos cuidadosamente cada propiedad para garantizar calidad, ubicación y rentabilidad."
//             />
//             <Feature
//               title="Asesoría Profesional"
//               description="Nuestro equipo de expertos te acompaña durante todo el proceso de compra, venta o inversión."
//             />
//             <Feature
//               title="Transacciones Seguras"
//               description="Garantizamos transparencia, legalidad y confianza en cada operación inmobiliaria."
//             />
//             <Feature
//               title="Compromiso Local"
//               description="Apoyamos el desarrollo inmobiliario local, con visión de crecimiento y sostenibilidad."
//             />
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// });

// const Feature = React.memo(({ title, description }) => (
//   <div>
//     <h3 className="font-semibold text-colorTextClaro mb-1 text-lg">{title}</h3>
//     <p className="text-gray-400 text-sm leading-snug">{description}</p>
//   </div>
// ));

// Feature.displayName = 'Feature';
// HomeRealEstate.displayName = 'HomeRealEstate';

// export default HomeRealEstate;



import React from 'react';

const HomeRealEstate = React.memo(() => {
  const imageSrc = '/assets/casa.jpg';
  const altText = 'Casa moderna gestionada por Inmuebles Imperio';

  return (
    <section
      className="w-full bg-fondoDev text-gray-800 font-sans overflow-x-hidden"
      aria-labelledby="real-estate-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Imagen a la izquierda */}
        <figure className="w-full h-full overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover max-w-full"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </figure>

        {/* Contenido a la derecha */}
        <article className="px-8 py-16 md:px-16 space-y-8">
          <header>
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
              ¿Quieres vender o adquirir una propiedad?
            </p>

            <h2
              id="real-estate-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-colorTextClaro"
            >
              Ofrecemos estrategia, seguridad y resultados reales
            </h2>
          </header>

          <p className="text-gray-300 max-w-lg leading-relaxed whitespace-pre-line">
            Como corredor inmobiliario y CEO de Inmuebles Imperio, lidero un equipo que acompaña a cada cliente en todo el proceso de compra y venta, desde la evaluación inicial hasta el cierre exitoso.

            Fundada en Cuba y con expansión al mercado brasileño, gestionamos operaciones con visión comercial, asesoría experta y compromiso total.

            <strong className="block mt-4 text-gray-100">
              Si estás listo para vender, nosotros estamos listos para ayudarte.
              Conviértelo en una experiencia rentable, clara y sin complicaciones.
            </strong>
          </p>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#propiedades"
              className="inline-block px-6 py-3 bg-white/10 text-white rounded-lg font-semibold shadow hover:brightness-90 transition"
            >
              Ver Propiedades
            </a>
            <a
              href="#contacto"
              className="inline-block px-6 py-3 border border-gray-300 text-gray-100 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium"
            >
              Contáctame
            </a>
          </div>

          {/* Secciones de pilares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
            <Feature
              title="Propiedades Exclusivas"
              description="Calidad, ubicación y rentabilidad en cada inmueble que gestionamos."
            />
            <Feature
              title="Asesoría Profesional"
              description="Acompañamiento experto en cada paso del proceso de compra o venta."
            />
            <Feature
              title="Transacciones Seguras"
              description="Transparencia, legalidad y confianza garantizadas en cada operación."
            />
            <Feature
              title="Compromiso Local"
              description="Impulsamos el desarrollo inmobiliario sostenible en tu comunidad."
            />
          </div>
        </article>
      </div>
    </section>
  );
});

const Feature = React.memo(({ title, description }) => (
  <div>
    <h3 className="font-semibold text-colorTextClaro mb-1 text-lg">{title}</h3>
    <p className="text-gray-400 text-sm leading-snug">{description}</p>
  </div>
));

Feature.displayName = 'Feature';
HomeRealEstate.displayName = 'HomeRealEstate';

export default HomeRealEstate;
