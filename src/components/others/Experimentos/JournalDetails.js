import React from "react";

const JournalDetails = () => {
  return (
    <section className="w-full bg-fondoDev text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Imagen a la izquierda */}
        <div className="w-full h-full">
          <img
            src="/assets/casa.jpg"
            alt="Leatherbound journal on desk"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="px-8 py-16 md:px-16">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Leatherbound Daily Journal
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-colorTextClaro">
          Como corredor inmobiliario y CEO de Inmuebles Imperio
          </h2>

          <p className="text-gray-300 mb-10 max-w-lg">
          Fundada en Cuba con expanción al mercado brasileiro, acompaña a sus clientes en todo el proceso de compra o venta de propiedades. Gestiona cada operación con visión comercial, asesoría y compromiso por generar oportunidades reales.
          </p>

          {/* Cuadrícula de características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-colorTextClaro mb-1">Propiedades Exclusivas</h4>
              <p className="text-gray-400 text-sm">
              Seleccionamos cuidadosamente cada propiedad para garantizar calidad, ubicación y rentabilidad.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-colorTextClaro mb-1">Asesoría Profesional</h4>
              <p className="text-gray-400 text-sm">
              Nuestro equipo de expertos te acompaña durante todo el proceso de compra, venta o inversión.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-colorTextClaro mb-1">
              Transacciones Seguras
              </h4>
              <p className="text-gray-400 text-sm">
              Garantizamos transparencia, legalidad y confianza en cada operación inmobiliaria.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-colorTextClaro mb-1">Locally made</h4>
              <p className="text-gray-400 text-sm">
                Responsibly and sustainably made real close to wherever you are,
                somehow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalDetails;
