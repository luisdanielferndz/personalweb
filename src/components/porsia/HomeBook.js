import React, { useState } from "react";
import { Book } from "lucide-react";

const books = [
  {
    title: "Diario de un Emprendedor",
    description:
      "Reflexiones, aprendizajes y experiencias en el camino del emprendimiento. Una guía honesta sobre los desafíos y triunfos de construir una vida y lleva a cabo un proceso de desarrollo personal.",
    image: "/assets/diario.jpeg",
  },
  {
    title: "Los Senderos de la Vida",
    description:
      "Un viaje introspectivo sobre las decisiones que nos definen. Historias y lecciones sobre crecimiento personal, propósito y autenticidad en un mundo acelerado.",
    image: "/assets/arte.png",
  },
  {
    title: "El arte de estar solo",
    description:
      "Descubre la diferencia entre soledad y estar solo. Una exploración profunda sobre la introspección, el autoconocimiento y la paz interior en tiempos de conexión constante.",
    image: "/assets/senderos.jpeg",
  },
];

export default function HomeBook() {
  const [hoveredBook, setHoveredBook] = useState(null);

  return (
    <section className="bg-fondoClaro py-20 font-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <Book className="w-12 h-12 mx-auto mb-4 text-fondoDev" />
          <h2 className="text-4xl font-bold text-fondoDev">Mis Libros</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Pensamientos y reflexiones plasmados en papel
          </p>
        </div>

        {/* Grid de libros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredBook(index)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
                <div className="relative w-full aspect-[3/4] bg-gray-200">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 bg-fondoGrayClaro text-center">
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">
                    {book.title}
                  </h3>
                </div>
              </div>

              {/* Popup al pasar el mouse */}
              {hoveredBook === index && (
                <div className="absolute inset-0 bg-white bg-opacity-95 rounded-xl p-6 flex items-center justify-center z-10 transition-all duration-300">
                  <div className="text-center px-2">
                    <h3 className="text-xl font-bold text-[#111827] mb-4">
                      {book.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
