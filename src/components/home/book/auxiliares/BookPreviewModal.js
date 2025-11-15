// BookPreviewModal

import React, { useEffect, useRef, useState } from "react";

export default function BookPreviewModal({
  pages = [],             // array de strings o JSX para cada “página” del fragmento
  title = "",
  author = "",
  onClose = () => {},
}) {
  const [current, setCurrent] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollRef = useRef(null);

  const isLastPage = current === pages.length - 1;

  useEffect(() => {
    // Reset de scroll y estado al cambiar de página
    setIsAtEnd(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [current]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 24; // margen
    setIsAtEnd(nearBottom);
  };

  const prevPage = () => setCurrent((c) => Math.max(0, c - 1));
  const nextPage = () => setCurrent((c) => Math.min(pages.length - 1, c + 1));

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-2xl w-[92vw] max-w-4xl h-[88vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-[#13172A] truncate">
              {title || "Vista previa del libro"}
            </h2>
            {author && (
              <p className="text-xs text-gray-500 truncate">{author}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md text-sm bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            Cerrar
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
          <button
            onClick={prevPage}
            disabled={current === 0}
            className={`px-3 py-2 rounded-md text-sm ${
              current === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800"
            }`}
          >
            ← Página anterior
          </button>
          <div className="text-xs text-gray-600">
            Página {current + 1} de {pages.length}
          </div>
          <button
            onClick={nextPage}
            disabled={current === pages.length - 1}
            className={`px-3 py-2 rounded-md text-sm ${
              current === pages.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-800"
            }`}
          >
            Página siguiente →
          </button>
        </div>

        {/* Page content */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative h-[calc(88vh-120px)] overflow-y-auto px-6 py-6"
        >
          <article className="prose prose-gray max-w-none">
            {typeof pages[current] === "string" ? (
              <div className="whitespace-pre-line leading-relaxed text-[15.5px] text-gray-800">
                {pages[current]}
              </div>
            ) : (
              pages[current]
            )}
          </article>

          {/* Fade overlay al final de la última página */}
          {isLastPage && !isAtEnd && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          )}

          {/* Marca final cuando el usuario llega al final */}
          {isLastPage && isAtEnd && (
            <div className="mt-6 text-center text-xs text-gray-500">
              Fin de la muestra disponible
            </div>
          )}
        </div>

        {/* CTA footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 bg-white">
          <p className="text-xs text-gray-500">
            Esta es una vista previa. El contenido completo está disponible en la compra.
          </p>
          <div className="flex gap-2">
            <a
              href="#comprar"
              className="px-4 py-2 rounded-md bg-[#13172A] text-white text-sm hover:bg-black"
            >
              Comprar libro
            </a>
            <a
              href="#agregar-carrito"
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 text-sm bg-white hover:bg-gray-50"
            >
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
