// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Download, Mail } from "lucide-react";
// import Button from "../ui/button";

// export default function DeveloperHeroSection() {
//   const [displayText, setDisplayText] = useState("");
//   const roles = ["Modern Web Developer", "Engineer Developer", "Frontend Expert"];
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // ✨ Efecto de escritura dinámica
//   useEffect(() => {
//     const currentText = roles[currentRole];
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         if (displayText.length < currentText.length) {
//           setDisplayText(currentText.slice(0, displayText.length + 1));
//         } else {
//           setTimeout(() => setIsDeleting(true), 1500);
//         }
//       } else {
//         if (displayText.length > 0) {
//           setDisplayText(displayText.slice(0, -1));
//         } else {
//           setIsDeleting(false);
//           setCurrentRole((prev) => (prev + 1) % roles.length);
//         }
//       }
//     }, isDeleting ? 50 : 100);

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentRole]);

//   const scrollToAbout = () => {
//     const el = document.getElementById("about");
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center px-6 relative bg-fondoDev text-white font-luxury overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         {/* Título principal */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
//               Daniel
//             </span>
//           </h1>
//         </motion.div>

//         {/* Subtítulo animado */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mb-8"
//         >
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-200">
//             I'm a{" "}
//             <span className="font-medium text-blue-400 inline-block text-left">
//               {displayText}
//               <span className="animate-pulse">|</span>
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
//             I build websites that look modern, work fast, and deliver exceptional user experiences.
//           </p>
//         </motion.div>

//         {/* Botones */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//         >
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl transition-all hover:scale-105"
//             onClick={() =>
//               document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             <Mail className="w-5 h-5 mr-2" />
//             View My Work
//           </Button>

//           <Button
//             variant="outline"
//             size="lg"
//             className="px-8 py-3 rounded-2xl border-white/20 text-white hover:bg-white/10 transition-all hover:scale-105"
//           >
//             <Download className="w-5 h-5 mr-2" />
//             Download Resume
//           </Button>
//         </motion.div>

//         {/* Flecha hacia "about" */}
//         <motion.button
//           onClick={scrollToAbout}
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-white/70 hover:text-white"
//         >
//           <ChevronDown className="w-6 h-6" />
//         </motion.button>
//       </div>
//     </section>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Download, Mail } from "lucide-react";
// import Button from "../ui/button";

// export default function DeveloperHeroSection() {
//   const [displayText, setDisplayText] = useState("");
//   const roles = ["Modern Web Developer", "Engineer Developer", "Frontend Expert"];
//   const [currentRole, setCurrentRole] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     conect(() => {
//       const currentText = roles[currentRole];
//       const timeout = setTimeout(() => {
//         if (!isDeleting) {
//           if (displayText.length < currentText.length) {
//             setDisplayText(currentText.slice(0, displayText.length + 1));
//           } else {
//             setTimeout(() => setIsDeleting(true), 1500);
//           }
//         } else {
//           if (displayText.length > 0) {
//             setDisplayText(displayText.slice(0, -1));
//           } else {
//             setIsDeleting(false);
//             setCurrentRole((prev) => (prev + 1) % roles.length);
//           }
//         }
//       }, isDeleting ? 50 : 100);
  
//       return () => clearTimeout(timeout);
//     }, [displayText, isDeleting, currentRole, roles]);
  
//     const scrollToAbout = () => {
//       const el = document.getElementById("about");
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     };
  
//     return (
//       <section
//         id="hero"
//         className="min-h-screen flex items-center justify-center px-6 relative bg-fondoDev text-white font-luxury overflow-hidden"
//       >
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
//               Hi, I'm{" "}
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
//                 Daniel
//               </span>
//             </h1>
//           </motion.div>
  
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mb-8"
//           >
//             <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-200">
//               I'm a{" "}
//               <span className="font-medium text-blue-400 inline-block text-left">
//                 {displayText}
//                 <span className="animate-pulse">|</span>
//               </span>
//             </h2>
//             <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
//               I build websites that look modern, work fast, and deliver exceptional user experiences.
//             </p>
//           </motion.div>
  
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//           >
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl transition-all hover:scale-105"
//               onClick={() =>
//                 document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               <Mail className="w-5 h-5 mr-2" />
//               View My Work
//             </Button>
  
//             <Button
//               variant="outline"
//               size="lg"
//               className="px-8 py-3 rounded-2xl border-white/20 text-white hover:bg-white/10 transition-all hover:scale-105"
//             >
//               <Download className="w-5 h-5 mr-2" />
//               Download Resume
//             </Button>
//           </motion.div>
  
//           <motion.button
//             onClick={scrollToAbout}
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-white/70 hover:text-white"
//           >
//             <ChevronDown className="w-6 h-6" />
//           </motion.button>
//         </div>
//       </section>
//     );
//   }
  



import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import Button from "../ui/button";

export default function DeveloperHeroSection() {
  const [displayText, setDisplayText] = useState("");
  const roles = useMemo(() => [
    "Modern Web Developer",
    "Engineer Developer",
    "Frontend Expert"
  ], []);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative bg-fondoDev text-white font-luxury overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Daniel
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4 text-gray-200">
            I'm a{" "}
            <span className="font-medium text-blue-400 inline-block text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            I build websites that look modern, work fast, and deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl transition-all hover:scale-105"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Mail className="w-5 h-5 mr-2" />
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-2xl border-white/20 text-white hover:bg-white/10 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-white/70 hover:text-white"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
