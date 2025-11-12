// import React from "react";

// export default function RealEstateVideo() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Video como fondo */}
//       <iframe
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://www.youtube.com/embed/B62oS40o4cA?autoplay=1&mute=1&loop=1&playlist=B62oS40o4cA&controls=0&showinfo=0&modestbranding=1"
//         title="Bienes Raices Video"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//       ></iframe>

//       {/* Capa oscura */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

//       {/* Texto centrado */}
//       <div className="relative z-20 flex items-center justify-center h-full">
//         <h1 className="text-white text-5xl md:text-7xl font-bold font-luxury tracking-wide text-center">
//           Bienes Raíces
//         </h1>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function RealEstateVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden font-luxury">
      {/* 🎥 Video como fondo */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/B62oS40o4cA?autoplay=1&mute=1&loop=1&playlist=B62oS40o4cA&controls=0&showinfo=0&modestbranding=1"
          title="Video de Bienes Raíces"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* 🖤 Capa de superposición */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* ✨ Texto centrado */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wide text-center drop-shadow-lg">
          Bienes Raíces
        </h1>
      </div>
    </section>
  );
}

