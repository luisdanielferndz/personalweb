// import React from "react";

// export default function AboutStory() {
//   return (
//     <section className="bg-white py-20 font-luxury">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-[#111827] mb-8 text-center">
//           Un poco de mi historia
//         </h2>

//         <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//           <p>
//             Mi camino comenzó con una pregunta que aún guía cada paso que doy: <strong>¿Cómo puedo provocar un cambio en el mundo?</strong> Desde niño, me fascinaba la ciencia y todo aquello que escapaba a lo común. Lo maravilloso, lo inexplicable, lo transformador.
//           </p>

//           <p>
//             Años más tarde ingresé a la Universidad de las Ciencias Informáticas (UCI) en La Habana, Cuba. Allí no solo me formé como ingeniero de software, sino que inicié un profundo proceso de desarrollo personal. Descubrí mi pasión por las ventas, los negocios y el conocimiento. Empecé a desarrollar software porque me atraía la idea de construir soluciones para problemas reales. Cada línea de código era una oportunidad para mejorar vidas. Con el tiempo entendí que la tecnología no es solo código: es estrategia, es diseño, es entender profundamente las necesidades del usuario. 
//           </p>

//           <p>
//             Pero mi búsqueda no terminó ahí. Me sumergí en libros, seminarios y experiencias que me acercaran a ese cambio que quería provocar. Así nació mi interés por el sector inmobiliario, un mundo tangible donde una propiedad puede transformar la vida de una familia o asegurar el futuro de una persona. Fundé <strong>Inmuebles Imperio</strong>, y desde entonces he tenido el privilegio de acompañar a muchas personas en decisiones que marcan sus vidas, construyendo relaciones que perduran.
//           </p>

//           <p>
//             Las ventas llegaron como una evolución natural. Aprendí que vender no es persuadir, es conectar. Me formé con referentes como Brian Tracy, Alex Day y Grant Cardone, y viví el proceso desde la calle: tocando puertas, conversando con clientes, enfrentando objeciones. Los más de <strong>$140,000 USD</strong> en procesos de venta —el equivalente a más de 26 millones de pesos cubanos en su momento— no son solo cifras: son historias de esfuerzo, visión y resultados. Liderar equipos me enseñó que el verdadero poder está en las conexiones y en cómo decidimos ver el mundo.
//           </p>

//           <p>
//             Hoy combino estas tres pasiones —tecnología, estrategia comercial e inversión inmobiliaria— para ofrecer un enfoque integral. No soy solo un desarrollador, un agente inmobiliario o un vendedor. Soy alguien que cree que el trabajo con propósito, la disciplina constante y el enfoque claro pueden transformar vidas.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function AboutStory() {
  return (
    <section
      id="about-story"
      className="bg-white py-20 font-luxury text-gray-700 leading-relaxed"
      aria-labelledby="about-story-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="about-story-title"
          className="text-4xl font-bold text-[#111827] mb-10 text-center"
        >
          Un poco de mi historia
        </h2>

        <article className="space-y-6 text-lg">
          <p>
            Mi camino comenzó con una pregunta que aún guía cada paso que doy:{" "}
            <strong>¿Cómo puedo provocar un cambio en el mundo?</strong> Desde
            niño, me fascinaba la ciencia y todo aquello que escapaba a lo
            común: lo maravilloso, lo inexplicable, lo transformador.
          </p>

          <p>
            Años más tarde ingresé a la{" "}
            <strong>Universidad de las Ciencias Informáticas (UCI)</strong> en
            La Habana, Cuba. Allí no solo me formé como ingeniero de software,
            sino que inicié un profundo proceso de desarrollo personal.
            Descubrí mi pasión por las ventas, los negocios y el conocimiento.
            Empecé a desarrollar software porque me atraía la idea de construir
            soluciones para problemas reales. Cada línea de código era una
            oportunidad para mejorar vidas.
          </p>

          <p>
            Con el tiempo entendí que la tecnología no es solo código: es
            estrategia, es diseño, es entender profundamente las necesidades del
            usuario.
          </p>

          <p>
            Pero mi búsqueda no terminó ahí. Me sumergí en libros, seminarios y
            experiencias que me acercaran a ese cambio que quería provocar. Así
            nació mi interés por el sector inmobiliario, un mundo tangible donde
            una propiedad puede transformar la vida de una familia o asegurar el
            futuro de una persona. Fundé{" "}
            <strong>Inmuebles Imperio</strong>, y desde entonces he tenido el
            privilegio de acompañar a muchas personas en decisiones que marcan
            sus vidas, construyendo relaciones que perduran.
          </p>

          <p>
            Las ventas llegaron como una evolución natural. Aprendí que vender
            no es persuadir, es conectar. Me formé con referentes como{" "}
            <strong>Brian Tracy, Alex Day y Grant Cardone</strong>, y viví el
            proceso desde la calle: tocando puertas, conversando con clientes,
            enfrentando objeciones. Los más de{" "}
            <strong>$140,000 USD</strong> en procesos de venta —el equivalente a
            más de <strong>26 millones de pesos cubanos</strong> en su
            momento— no son solo cifras: son historias de esfuerzo, visión y
            resultados.
          </p>

          <p>
            Liderar equipos me enseñó que el verdadero poder está en las
            conexiones y en cómo decidimos ver el mundo. Hoy combino estas tres
            pasiones —<strong>tecnología, estrategia comercial e inversión
            inmobiliaria</strong>— para ofrecer un enfoque integral.
          </p>

          <p>
            No soy solo un desarrollador, un agente inmobiliario o un vendedor.
            Soy alguien que cree que el trabajo con propósito, la disciplina
            constante y el enfoque claro pueden transformar vidas.
          </p>
        </article>
      </div>
    </section>
  );
}
