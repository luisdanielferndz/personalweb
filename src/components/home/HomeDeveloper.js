// import React from 'react';
// import { Home, Building2, Repeat } from 'lucide-react';

// export default function HomeDeveloper() {
//   return (
//     <section className="bg-fondoDev w-full font-luxury py-16 px-6 md:px-12">
//       <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Texto */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-colorTextClaro mb-4">
//           Como corredor inmobiliario y CEO de Inmuebles Imperio
//           </h2>
//           <p className="text-lg text-gray-300 leading-relaxed">
//           Fundada en Cuba con expanción al mercado brasileiro, acompaña a sus clientes en todo el proceso de compra o venta de propiedades. Gestiona cada operación con visión comercial, asesoría y compromiso por generar oportunidades reales.
//           </p>
//         </div>

//         {/* Imagen */}
//         <div>
//           <img
//             src="/assets/soft2.jpg"
//             alt="Oficina de bienes raíces"
//             className="w-full h-auto rounded-xl shadow-lg object-cover"
//             loading="lazy"
//           />
//         </div>
//       </div>

//       {/* Iconos */}
// <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//   <div className="flex flex-col items-center space-y-3">
//     <Home size={50} className="text-colorTextClaro" />
//     <h3 className="font-semibold text-xl text-gray-400">Propiedades Exclusivas</h3>
//     <p className="text-gray-300 text-base max-w-xs">
//       Seleccionamos cuidadosamente cada propiedad para garantizar calidad, ubicación y rentabilidad.
//     </p>
//   </div>

//   <div className="flex flex-col items-center space-y-3">
//     <Building2 size={50} className="text-colorTextClaro" />
//     <h3 className="font-semibold text-xl text-gray-400">Asesoría Profesional</h3>
//     <p className="text-gray-300 text-base max-w-xs">
//       Nuestro equipo de expertos te acompaña durante todo el proceso de compra, venta o inversión.
//     </p>
//   </div>

//   <div className="flex flex-col items-center space-y-3">
//     <Repeat size={50} className="text-colorTextClaro" />
//     <h3 className="font-semibold text-xl text-gray-400">Transacciones Seguras</h3>
//     <p className="text-gray-300 text-base max-w-xs">
//       Garantizamos transparencia, legalidad y confianza en cada operación inmobiliaria.
//     </p>
//   </div>
// </div>

//     </section>
//   );
// }




// import React from 'react';
// import { Home, Building2, Repeat, Code2, Cpu, Globe } from 'lucide-react';

// const HomeDeveloper = React.memo(() => {
//   const realEstateFeatures = [
//     {
//       icon: Home,
//       title: 'Propiedades Exclusivas',
//       description:
//         'Seleccionamos cuidadosamente cada propiedad para garantizar calidad, ubicación y rentabilidad.',
//     },
//     {
//       icon: Building2,
//       title: 'Asesoría Profesional',
//       description:
//         'Nuestro equipo de expertos te acompaña durante todo el proceso de compra, venta o inversión.',
//     },
//     {
//       icon: Repeat,
//       title: 'Transacciones Seguras',
//       description:
//         'Garantizamos transparencia, legalidad y confianza en cada operación inmobiliaria.',
//     },
//   ];

//   const devFeatures = [
//     {
//       icon: Code2,
//       title: 'Desarrollo de Software a Medida',
//       description:
//         'Diseño y construcción de aplicaciones web, sistemas de gestión y plataformas digitales personalizadas.',
//     },
//     {
//       icon: Cpu,
//       title: 'Optimización y Automatización',
//       description:
//         'Implemento soluciones que mejoran la eficiencia, reducen costos y escalan procesos empresariales.',
//     },
//     {
//       icon: Globe,
//       title: 'Presencia Digital Estratégica',
//       description:
//         'Ayudo a marcas y negocios a proyectarse en el entorno digital con claridad, estrategia y diseño profesional.',
//     },
//   ];

//   return (
//     <section
//       className="bg-fondoDev w-full font-luxury py-16 px-6 md:px-12"
//       aria-labelledby="home-dev-heading"
//     >
//       <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Texto principal */}
//         <div>
//           <h2
//             id="home-dev-heading"
//             className="text-3xl md:text-4xl font-bold text-colorTextClaro mb-4"
//           >
//             Como corredor inmobiliario y CEO de Inmuebles Imperio
//           </h2>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             Fundada en <strong>Cuba</strong> con expansión al mercado{' '}
//             <strong>brasileño</strong>, Inmuebles Imperio acompaña a sus clientes
//             en todo el proceso de compra o venta de propiedades. Gestiona cada
//             operación con visión comercial, asesoría y compromiso por generar
//             oportunidades reales.
//           </p>
//         </div>

//         {/* Imagen */}
//         <figure>
//           <img
//             src="/assets/soft2.jpg"
//             alt="Oficina de bienes raíces moderna"
//             className="w-full h-auto rounded-xl shadow-lg object-cover"
//             loading="lazy"
//             decoding="async"
//             fetchpriority="low"
//           />
//         </figure>
//       </div>

//       {/* Bloque Desarrollo de Software */}
//       <div className="mt-24 text-center">
      
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//           {devFeatures.map(({ icon: Icon, title, description }) => (
//             <div
//               key={title}
//               className="flex flex-col items-center space-y-3 p-4"
//             >
//               <Icon size={50} className="text-colorTextClaro" aria-hidden="true" />
//               <h3 className="font-semibold text-xl text-gray-400">{title}</h3>
//               <p className="text-gray-300 text-base max-w-xs">{description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// });

// HomeDeveloper.displayName = 'HomeDeveloper';
// export default HomeDeveloper;


import React from 'react';
import { Home, Building2, Repeat, Code2, Cpu, Globe } from 'lucide-react';

const HomeDeveloper = React.memo(() => {
  const realEstateFeatures = [
    { icon: Home, title: 'Propiedades Exclusivas', description: 'Seleccionamos cuidadosamente cada propiedad para garantizar calidad, ubicación y rentabilidad.' },
    { icon: Building2, title: 'Asesoría Profesional', description: 'Nuestro equipo de expertos te acompaña durante todo el proceso de compra, venta o inversión.' },
    { icon: Repeat, title: 'Transacciones Seguras', description: 'Garantizamos transparencia, legalidad y confianza en cada operación inmobiliaria.' },
  ];

  const devFeatures = [
    { icon: Code2, title: 'Desarrollo de Software a Medida', description: 'Diseño y construcción de aplicaciones web, sistemas de gestión y plataformas digitales personalizadas.' },
    { icon: Cpu, title: 'Optimización y Automatización', description: 'Implemento soluciones que mejoran la eficiencia, reducen costos y escalan procesos empresariales.' },
    { icon: Globe, title: 'Presencia Digital Estratégica', description: 'Ayudo a marcas y negocios a proyectarse en el entorno digital con claridad, estrategia y diseño profesional.' },
  ];

  return (
    <section
      className="bg-fondoDev w-full font-luxury py-16 px-6 md:px-12 overflow-x-hidden"
      aria-labelledby="home-dev-heading"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <div>
          <h2
            id="home-dev-heading"
            className="text-3xl md:text-4xl font-bold text-colorTextClaro mb-4"
          >
            Como corredor inmobiliario y CEO de Inmuebles Imperio
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Fundada en <strong>Cuba</strong> con expansión al mercado{' '}
            <strong>brasileño</strong>, Inmuebles Imperio acompaña a sus clientes
            en todo el proceso de compra o venta de propiedades. Gestiona cada
            operación con visión comercial, asesoría y compromiso por generar
            oportunidades reales.
          </p>
        </div>

        {/* Imagen */}
        <figure className="overflow-hidden">
          <img
            src="/assets/soft2.jpg"
            alt="Oficina de bienes raíces moderna"
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
