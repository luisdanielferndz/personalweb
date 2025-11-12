import React from 'react';

export default function Prueba() {
  return (
    <header className="w-full bg-gradient-to-r from-[#FFF7E6] via-[#FFFDF2] to-white font-luxury py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-stretch gap-6">
        {/* Left: vertical accent + micro-label */}
        <div className="flex items-center md:items-start gap-4 md:w-48">
          <div className="w-1.5 h-32 bg-gradient-to-b from-[#F1C40F] to-[#D69E02] rounded-xl shadow-md" />
          <div className="hidden md:block">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Colección Transformación</span>
            <h4 className="mt-2 text-sm text-[#6B7280]">Edición limitada</h4>
          </div>
        </div>

        {/* Center: creative main title with rotated subtitle and large numeral */}
        <div className="flex-1 relative flex flex-col justify-center items-center md:items-start">
          <div className="absolute -left-6 -top-6 text-[120px] md:text-[160px] font-extrabold text-[#00000008] select-none pointer-events-none leading-none">03</div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#13172A] leading-tight z-10">
            Desarrolla tu potencial
          </h1>
          <div className="mt-3 z-10 flex items-center gap-4">
            <p className="text-sm md:text-base text-gray-600 italic">El libro dorado · El libro del éxito</p>
            <span className="hidden md:inline-block w-px h-6 bg-gray-200" />
            <div className="transform rotate-6 bg-[#FEF3C7] text-[#92400E] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Rutina 5:00 AM</div>
          </div>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-600 z-10">
            Un llamado a la acción íntimo y directo: transforma hábitos en resultados. Este libro es un plan práctico para quienes quieren pasar de intención a logro.
          </p>
        </div>

        {/* Right: floating CTA and decorative mock badge */}
        <div className="md:w-56 flex flex-col items-center md:items-end gap-4">
          <div className="bg-white rounded-2xl shadow-lg px-4 py-3 flex flex-col items-center">
            <span className="text-xs text-gray-400">Autor</span>
            <strong className="text-sm text-[#13172A]">Luis Daniel</strong>
            <span className="mt-2 text-[13px] text-gray-600 text-center">Edición especial · Recursos descargables</span>
          </div>
          <div className="w-full">
            <a href="#comprar-potencial" className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#13172A] text-white rounded-lg shadow hover:bg-black transition">
              Comprar ahora
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 mt-1">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.2L21 9.3l-5 4.2L17 21l-5-3.1L7 21l1-7.5-5-4.2 6.1-.9L12 2z" />
            </svg>
            <span>Garantía de satisfacción</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#F1C40F] to-transparent rounded" />
        </div>
      </div>
    </header>
  );
}
