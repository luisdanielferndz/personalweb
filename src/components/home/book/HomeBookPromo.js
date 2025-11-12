// import React, { useState, useEffect } from "react";
// import { Send } from "lucide-react";
// import { useNavigate } from "react-router-dom"; 
// const books = [
//   {
//     title: "Diario de un Emprendedor",
//     subtitle: "UNA HISTORIA VIVIDA",
//     image: "/assets/diario.jpeg",
//     buttonText: "SABER MÁS DE",
//   },
//   {
//     title: "El arte de estar solo",
//     subtitle: "UNA HISTORIA DE CRECIMIENTO",
//     image: "/assets/arte.png",
//     buttonText: "SABER MÁS DE",
//   },
//   {
//     title: "Los Senderos de la Vida",
//     subtitle: "REFLEXIONES DE VIDA",
//     image: "/assets/senderos.jpeg",
//     buttonText: "SABER MÁS DE",
//   },
// ];

// export default function HomeBookPromo() {
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(true);
//   const navigate = useNavigate(); // <-- Inicializa useNavigate

//   // Cambia cada 4 segundos con una animación suave
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // inicia salida
//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % books.length);
//         setFade(true); // inicia entrada
//       }, 500);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const book = books[current];

//   // Función para ir a BookHome
//   const handleSaberMas = () => {
//     navigate("/bookhome"); 
//   };

//   return (
//     <section className="bg-white font-luxury py-24 px-6 md:px-20 overflow-hidden">
//       <div className="relative max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
//         {/* Columna izquierda (texto) */}
//         <div
//           className={`transition-all duration-700 ease-in-out transform ${
//             fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"
//           } space-y-6 text-center md:text-left px-4 md:px-10`}
//         >
//           <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl tracking-wide">
//             {book.subtitle}
//           </h3>

//           <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
//             YA <br />
//             <span className="text-gray-900">DISPONIBLE</span>
//           </h1>

//           <p className="italic text-gray-500 text-2xl md:text-3xl">
//             {book.title}
//           </p>

//           <button
//             onClick={handleSaberMas} // <-- Aquí agregamos la navegación
//             className="mt-6 inline-flex items-center gap-3 bg-fondoDev text-white font-bold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-[#424555] transition-all duration-300"
//           >
//             {book.buttonText} <Send className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Columna derecha (imagen) */}
//         <div
//           className={`flex justify-center md:justify-end mt-10 md:mt-0 transition-all duration-700 ease-in-out transform ${
//             fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[20px]"
//           }`}
//         >
//           <div className="relative w-[260px] md:w-[320px] lg:w-[360px] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
//             <img
//               src={book.image}
//               alt={book.title}
//               className="w-full h-auto object-cover rounded-md"
//             />
//             <div className="absolute inset-0 rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.25)] pointer-events-none" />
//           </div>
//         </div>
//       </div>

//       {/* Indicadores */}
//       <div className="flex justify-center mt-10 space-x-3">
//         {books.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               current === index ? "bg-[#CDBCB6]" : "bg-gray-300"
//             }`}
//             aria-label={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



// import React, { useState, useEffect, useCallback } from "react";
// import { Send } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // 🔹 Datos del carrusel
// const books = [
//   {
//     title: "Diario de un Emprendedor",
//     subtitle: "UNA HISTORIA VIVIDA",
//     image: "/assets/diario.jpeg",
//     buttonText: "SABER MÁS DE",
//   },
//   {
//     title: "El arte de estar solo",
//     subtitle: "UNA HISTORIA DE CRECIMIENTO",
//     image: "/assets/arte.png",
//     buttonText: "SABER MÁS DE",
//   },
//   {
//     title: "Los Senderos de la Vida",
//     subtitle: "REFLEXIONES DE VIDA",
//     image: "/assets/senderos.jpeg",
//     buttonText: "SABER MÁS DE",
//   },
// ];

// export default function HomeBookPromo() {
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(true);
//   const navigate = useNavigate();

//   // 🔹 Cambio automático con animación
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       const timeout = setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % books.length);
//         setFade(true);
//       }, 500);
//       return () => clearTimeout(timeout);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // 🔹 Función optimizada de navegación
//   const handleSaberMas = useCallback(() => {
//     navigate("/bookhome");
//   }, [navigate]);

//   const book = books[current];

//   return (
//     <section
//       className="bg-white font-luxury py-24 px-6 md:px-20 overflow-hidden"
//       aria-label="Promoción de libros de Luis Daniel Fernández"
//     >
//       <div className="relative max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
        
//         {/* 🟦 Columna izquierda (Texto y botón) */}
//         <div
//           className={`transition-all duration-700 ease-in-out transform ${
//             fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
//           } space-y-6 text-center md:text-left px-4 md:px-10`}
//         >
//           <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl tracking-wide">
//             {book.subtitle}
//           </h3>

//           <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
//             YA <br />
//             <span className="text-fondoDev">DISPONIBLE</span>
//           </h1>

//           <p className="italic text-gray-500 text-2xl md:text-3xl">
//             {book.title}
//           </p>

//           <button
//             onClick={handleSaberMas}
//             className="mt-6 inline-flex items-center gap-3 bg-fondoDev text-white font-bold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-[#424555] transition-all duration-300 focus:ring-4 focus:ring-fondoDev/30 focus:outline-none"
//             aria-label={`Saber más sobre ${book.title}`}
//           >
//             {book.buttonText} <Send className="w-5 h-5" />
//           </button>
//         </div>

//         {/* 🟨 Columna derecha (Imagen) */}
//         <div
//           className={`flex justify-center md:justify-end mt-10 md:mt-0 transition-all duration-700 ease-in-out transform ${
//             fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
//           }`}
//         >
//           <figure className="relative w-[260px] md:w-[320px] lg:w-[360px] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
//             <img
//               src={book.image}
//               alt={`Portada del libro ${book.title}`}
//               className="w-full h-auto object-cover rounded-md"
//               loading="lazy"
//             />
//             <figcaption className="sr-only">{book.title}</figcaption>
//           </figure>
//         </div>
//       </div>

//       {/* 🔘 Indicadores del carrusel */}
//       <div className="flex justify-center mt-10 space-x-3">
//         {books.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               current === index ? "bg-[#CDBCB6]" : "bg-gray-300"
//             }`}
//             aria-label={`Ir al libro ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useCallback } from "react";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const books = [
  { title: "Diario de un Emprendedor", subtitle: "UNA HISTORIA VIVIDA", image: "/assets/diario.png", buttonText: "SABER MÁS DE" },
  { title: "El arte de estar solo", subtitle: "UNA HISTORIA DE CRECIMIENTO", image: "/assets/arte.png", buttonText: "SABER MÁS DE" },
  { title: "Los Senderos de la Vida", subtitle: "REFLEXIONES DE VIDA", image: "/assets/senderos.jpeg", buttonText: "SABER MÁS DE" },
];

export default function HomeBookPromo() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % books.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSaberMas = useCallback(() => {
    navigate("/bookhome");
  }, [navigate]);

  const book = books[current];

  return (
    <section
      className="bg-white font-luxury py-24 px-6 md:px-20 overflow-hidden overflow-x-hidden"
      aria-label="Promoción de libros de Luis Daniel Fernández"
    >
      <div className="relative max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          } space-y-6 text-center md:text-left px-4 md:px-10`}
        >
          <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl tracking-wide">
            {book.subtitle}
          </h3>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight break-words">
            YA <br />
            <span className="text-fondoDev">DISPONIBLE</span>
          </h1>

          <p className="italic text-gray-500 text-2xl md:text-3xl break-words">
            {book.title}
          </p>

          <button
            onClick={handleSaberMas}
            className="mt-6 inline-flex items-center gap-3 bg-fondoDev text-white font-bold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-[#424555] transition-all duration-300 focus:ring-4 focus:ring-fondoDev/30 focus:outline-none"
            aria-label={`Saber más sobre ${book.title}`}
          >
            {book.buttonText} <Send className="w-5 h-5" />
          </button>
        </div>

        <div
          className={`flex justify-center md:justify-end mt-10 md:mt-0 transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
          }`}
        >
          <figure className="relative w-full max-w-[360px] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex-shrink-0">
            <img
              src={book.image}
              alt={`Portada del libro ${book.title}`}
              className="w-full h-auto object-cover rounded-md max-w-full"
              loading="lazy"
            />
            <figcaption className="sr-only">{book.title}</figcaption>
          </figure>
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-3">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#CDBCB6]" : "bg-gray-300"
            }`}
            aria-label={`Ir al libro ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
