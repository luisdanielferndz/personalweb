import React from 'react';
import { Code2, Cpu, Globe } from 'lucide-react';

const HomeDeveloper = React.memo(() => {
  const devFeatures = [
    {
      icon: Code2,
      title: 'Desarrollo de Software a Medida',
      description:
        'Diseño y construcción de aplicaciones web, sistemas de gestión y plataformas digitales personalizadas.',
    },
    {
      icon: Cpu,
      title: 'Optimización y Automatización',
      description:
        'Implemento soluciones que mejoran la eficiencia, reducen costos y escalan procesos empresariales.',
    },
    {
      icon: Globe,
      title: 'Presencia Digital Estratégica',
      description:
        'Ayudo a marcas y negocios a proyectarse en el entorno digital con claridad, estrategia y diseño profesional.',
    },
  ];

  return (
    <section
      className="bg-fondoDev w-full font-luxury py-16 px-6 md:px-12 overflow-x-hidden"
      aria-labelledby="home-dev-heading"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            id="home-dev-heading"
            className="text-3xl md:text-4xl font-bold text-colorTextClaro mb-4"
          >
            ¿Eres emprendedor, empresa o marca en crecimiento?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {`Con mi equipo, convertimos tus ideas en soluciones digitales que funcionan: desde plataformas web personalizadas hasta sistemas internos que optimizan procesos y multiplican resultados.

Nuestros servicios incluyen:
• Desarrollo web y sistemas a medida
• Automatización de procesos y gestión de datos
• Consultoría tecnológica para negocios
• Integración de herramientas y plataformas
• Diseño de experiencias digitales efectivas`}

            <br />
            <br />
            <strong>
              Si tienes un proyecto, una necesidad o una visión que quieres llevar al siguiente nivel, hablemos. Estamos listos para construir contigo.
            </strong>
          </p>
        </div>

        <figure className="overflow-hidden">
          <img
            src="/assets/soft2.jpg"
            alt="Oficina moderna de desarrollo"
            className="w-full h-auto rounded-xl shadow-lg object-cover max-w-full"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </figure>
      </div>

      <div className="mt-24 text-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {devFeatures.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center space-y-3 p-4">
              <Icon size={50} className="text-colorTextClaro" aria-hidden="true" />
              <h3 className="font-semibold text-xl text-gray-400">{title}</h3>
              <p className="text-gray-300 text-base max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

HomeDeveloper.displayName = 'HomeDeveloper';
export default HomeDeveloper;
