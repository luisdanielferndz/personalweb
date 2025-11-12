
import React from "react";
import { FaLaptopCode, FaBuilding, FaChartLine } from "react-icons/fa"; // 👈 Importamos los íconos

export default function HomeAboutSection() {
  return (
    <section className="bg-fondoDev text-white font-luxury py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Sobre Daniel
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Daniel fundador de Inmuebles Imperio es un emprendedor e ingeniero de software,  que ayuda a marcas, personas y negocios a proyectarse con claridad, estrategia y diseño. Su enfoque conecta ideas con resultados tangibles, desde el desarrollo de sistemas personalizados hasta la gestión comercial de ventas y propiedades. Con más de tres años de experiencia, ha alcanzado resultados superiores a los 140 mil dólares en procesos de ventas en un solo año. Además, es autor de libros como Diario de un Emprendedor, El arte de estar solo, Los Senderos de la vida y Desarrolla tu potencial, donde comparte su visión sobre propósito, crecimiento y liderazgo.
            
          </p>

          
        </div>
      </div>
    </section>
  );
}
