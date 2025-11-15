import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function DeveloperHeroSection() {
  return (
    <section className="w-full bg-fondoDev text-white font-luxury flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        
        {/* Título principal */}
        <h1 className="text-4xl md:text-7xl font-bold">Este es mi espacio cibernético</h1>
        
        {/* Subtítulo animado */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-300">
          Soy{" "}
          <span className="text-blue-400">
            <Typewriter
              words={[
                "Ingeniero de Software",
                "Desarrollador Web",
                "Emprendedor Digital",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        {/* Texto jerárquico */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Desarrollo de Software con Propósito
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Creo soluciones digitales que conectan ideas con resultados. 
            Mi enfoque combina estrategia, diseño y tecnología para entregar 
            proyectos funcionales, escalables y de impacto real.
          </p>
        </div>

        {/* Botones */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Ver mi trabajo
          </button>

          <a
            href="/assets/CV_Daniel.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
