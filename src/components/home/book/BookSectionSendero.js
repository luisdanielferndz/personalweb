import React from 'react';

export default function BookSectionSendero() {
  const imageSrc = '/assets/senderos2.jpg'; // reemplaza con la ruta real
  const altText = 'Portada de Los Senderos de la Vida por Luis D. Fernández HDZ';

  return (
    <section className="w-full bg-grayCream font-luxury py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg grid md:grid-cols-2">
        {/* Columna izquierda: imagen que ocupa toda la altura del componente */}
        <figure className="w-full h-[70vh] md:h-auto md:min-h-[70vh] overflow-hidden bg-gray-50">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Columna derecha: panel claro con espacio para información */}
        <aside className="flex flex-col justify-center p-8 md:p-12 bg-white">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#13172A] leading-tight mb-3">Los Senderos de la Vida</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 italic">Luis D. Fernández HDZ</p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Una reflexión íntima y poética sobre los caminos que recorremos. Este libro combina relatos personales y ejercicios de introspección para ayudarte a encontrar dirección y significado.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mb-6">
              <li>Formato: tapa blanda y digital</li>
              <li>Perfecto para lectura reflexiva y momentos de pausa</li>
              <li>Incluye ejercicios prácticos y citas destacadas</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#comprar-senderos" className="inline-flex items-center justify-center px-6 py-3 bg-[#13172A] text-white rounded-lg shadow hover:bg-black transition">Comprar ahora</a>
              <a href="#leer-senderos" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-800 rounded-lg bg-white hover:bg-gray-50 transition">Leer muestra</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">Envíos nacionales. Pago seguro.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
