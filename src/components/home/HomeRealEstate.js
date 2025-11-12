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
              Inmuebles Imperio
            </p>

            <h2
              id="real-estate-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-colorTextClaro"
            >
              Como corredor inmobiliario y CEO de Inmuebles Imperio
            </h2>
          </header>

          <p className="text-gray-300 max-w-lg leading-relaxed">
            Fundada en <strong>Cuba</strong> con expansión al mercado <strong>brasileño</strong>, 
            Inmuebles Imperio acompaña a sus clientes en todo el proceso de compra o venta de propiedades. 
            Gestiona cada operación con visión comercial, asesoría y compromiso, 
            generando oportunidades reales y sostenibles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Feature
              title="Propiedades Exclusivas"
              description="Seleccionamos cuidadosamente cada propiedad para garantizar calidad, ubicación y rentabilidad."
            />
            <Feature
              title="Asesoría Profesional"
              description="Nuestro equipo de expertos te acompaña durante todo el proceso de compra, venta o inversión."
            />
            <Feature
              title="Transacciones Seguras"
              description="Garantizamos transparencia, legalidad y confianza en cada operación inmobiliaria."
            />
            <Feature
              title="Compromiso Local"
              description="Apoyamos el desarrollo inmobiliario local, con visión de crecimiento y sostenibilidad."
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
