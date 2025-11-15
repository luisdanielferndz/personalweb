import React from 'react';

const HomeAbInformation = React.memo(() => {
  const imageSrc = '/assets/fotto.png';
  const altText = 'Daniel, fundador de Inmuebles Imperio';

  return (
    <section className="bg-grayCream w-full font-luxury pt-10 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16">

        {/* Texto primero en móvil */}
        <article className="flex flex-col md:items-start md:justify-center items-center text-center md:text-left space-y-4 px-2 order-1">
          <h2 className="text-3xl md:text-6xl font-bold text-[#13172A] leading-tight">Sobre Daniel</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide">
            Daniel, fundador de <strong>Inmuebles Imperio</strong>, es un emprendedor e ingeniero de software que ayuda a marcas, personas y negocios a proyectarse con claridad, estrategia y diseño. Su enfoque conecta ideas con resultados tangibles, desde el desarrollo de sistemas personalizados hasta la gestión comercial de ventas y propiedades. Con más de tres años de experiencia, ha alcanzado resultados superiores a los <strong>140 mil dólares</strong> en procesos de ventas en un solo año. Además, es autor de libros como <em>Diario de un Emprendedor</em>, <em>El arte de estar solo</em>, <em>Los Senderos de la vida</em> y <em>Desarrolla tu potencial</em>, donde comparte su visión sobre propósito, crecimiento y liderazgo.
          </p>
        </article>

        {/* Imagen móvil debajo */}
        <figure className="block md:hidden w-full flex justify-center relative mt-2 mb-4 order-2">
          <div className="relative w-full h-[580px] box-border overflow-hidden rounded-xl">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-full object-contain rounded-xl z-10"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-grayCream via-transparent to-transparent z-20 pointer-events-none" aria-hidden="true" />
          </div>
        </figure>

        {/* Imagen escritorio */}
        <figure className="hidden md:flex justify-center items-center px-0 pb-0 pt-0">
          <div className="relative w-full h-[95vh] flex justify-center items-center">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-full object-contain rounded-xl shadow-2xl transition duration-500 ease-in-out"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
        </figure>
      </div>
    </section>
  );
});

HomeAbInformation.displayName = 'HomeAbInformation';
export default HomeAbInformation;
