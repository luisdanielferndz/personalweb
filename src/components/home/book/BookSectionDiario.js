import React from 'react';

export default function BookSectionDiario() {
  const bgImage = '/assets/diario2.jpeg'; // ruta de la imagen de fondo
  const coverImage = '/assets/diario2.jpeg'; // ruta de la portada en primer plano (puede ser la misma)
  const altText = 'Portada del libro DIARIO DE UN EMPRENDEDOR por Luis D. Fernández Hdz';

  return (
    <section
      className="w-full font-luxury py-16"
      aria-labelledby="diario-title"
      style={{
        backgroundImage: `linear-gradient(rgba(19,23,42,0.55), rgba(19,23,42,0.55)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2 items-stretch">
          {/* Columna izquierda: imagen / mockup sobre el fondo */}
          <figure className="relative hidden md:flex items-center justify-center p-8 bg-transparent">
            <div className="relative w-full max-w-[420px] h-[620px] flex items-center justify-center">
              <img
                src={coverImage}
                alt={altText}
                className="w-full h-full object-contain rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-102"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 text-sm text-gray-700 px-3 py-1 rounded-full shadow">
                Edición limitada
              </span>
            </div>
          </figure>

          {/* Columna derecha: panel de información */}
          <article className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
            <h2 id="diario-title" className="text-3xl md:text-5xl font-bold text-white leading-tight">
              DIARIO DE UN EMPRENDEDOR
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-200 italic">El proyecto de tu vida</p>
            <p className="mt-6 text-base md:text-lg text-gray-100 leading-relaxed">
              Escrito por <strong>Luis D. Fernández Hdz</strong>, este libro combina estrategia práctica y reflexión personal para ayudarte a diseñar y ejecutar tu proyecto de vida. Encontrarás lecciones sobre toma de decisiones, liderazgo y ventas, además de ejercicios aplicables desde el primer día.
            </p>

            <ul className="mt-4 text-sm text-gray-200 list-disc pl-5 max-w-xl mx-auto md:mx-0">
              <li>Formatos disponibles: tapa dura y digital</li>
              <li>Ejercicios prácticos y casos reales</li>
              <li>Ideal para emprendedores y líderes en crecimiento</li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#comprar"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#13172A] rounded-lg font-semibold shadow hover:scale-102 transition transform"
                role="button"
              >
                Comprar ahora
              </a>
              <a
                href="#leer-muestra"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg bg-white/5 hover:bg-white/10 transition"
                role="button"
              >
                Leer muestra gratis
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-300">Envío nacional. Pago seguro con tarjeta o transferencia.</p>
          </article>

          {/* Versión móvil: portada arriba (visible solo en móviles) */}
          <figure className="md:hidden block px-6 pb-8 pt-4 bg-transparent">
            <div className="relative w-full max-w-[95vw] h-[420px] mx-auto overflow-hidden rounded-xl">
              <img
                src={coverImage}
                alt={altText}
                className="w-full h-full object-contain rounded-xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 text-sm text-gray-700 px-3 py-1 rounded-full shadow">
                Edición limitada
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
