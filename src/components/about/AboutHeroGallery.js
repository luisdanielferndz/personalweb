// import React, { useState, useEffect } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
//   "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop",
//   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
//   "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
// ];

// export default function AboutHeroGallery() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden font-luxury">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentImage ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={image}
//             alt={`Gallery ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </div>
//       ))}

//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
//           Conoce un poco más de mi
//         </h1>
//       </div>
//     </section>
//   );
// }



import React, { useState, useEffect, useMemo } from "react";

export default function AboutHeroGallery() {
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
    ],
    []
  );

  const [currentImage, setCurrentImage] = useState(0);

  // Rotación automática con cleanup
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      className="relative h-screen overflow-hidden font-luxury"
      aria-label="Galería de imágenes sobre mí"
    >
      {/* Fondo con transición */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentImage}
        >
          <img
            src={image}
            alt={`Fotografía ${index + 1} de la galería`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Texto superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-lg">
          Conoce un poco más de mí
        </h1>
      </div>
    </section>
  );
}
