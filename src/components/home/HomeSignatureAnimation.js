// import React from "react";

// export default function HomeSignatureAnimation() {
//   return (
//     <section className="bg-fondoGrayClaro font-luxury py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <blockquote className="text-2xl md:text-3xl font-medium text-fondoDev leading-relaxed italic font-luxury">
//           "No hay límites cuando tu visión tiene propósito, tu esfuerzo tiene 
//           dirección y tu corazón tiene hambre de grandeza."
//         </blockquote>
//         <p className="mt-6 text-xl text-gray-600">— Luis Daniel Fernández</p>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { motion } from "framer-motion";

// const HomeSignatureAnimation = React.memo(() => {
//   return (
//     <section
//       className="bg-fondoGrayClaro font-luxury py-20"
//       aria-labelledby="signature-heading"
//     >
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <figure>
//           {/* Cita animada */}
//           <motion.blockquote
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             id="signature-heading"
//             className="text-2xl md:text-3xl font-medium text-fondoDev leading-relaxed italic tracking-wide"
//           >
//             “No hay límites cuando tu visión tiene propósito, tu esfuerzo tiene
//             dirección y tu corazón tiene hambre de grandeza.”
//           </motion.blockquote>

//           {/* Firma animada */}
//           <motion.figcaption
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 1.2 }}
//             viewport={{ once: true }}
//             className="mt-6 text-xl text-gray-600"
//           >
//             — Luis Daniel Fernández
//           </motion.figcaption>
//         </figure>
//       </div>
//     </section>
//   );
// });

// HomeSignatureAnimation.displayName = "HomeSignatureAnimation";
// export default HomeSignatureAnimation;



import React from "react";
import { motion } from "framer-motion";

const HomeSignatureAnimation = React.memo(() => {
  return (
    <section
      className="bg-fondoGrayClaro font-luxury py-20 overflow-x-hidden"
      aria-labelledby="signature-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <figure>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            id="signature-heading"
            className="text-2xl md:text-3xl font-medium text-fondoDev leading-relaxed italic tracking-wide max-w-full break-words"
          >
            “No hay límites cuando tu visión tiene propósito, tu esfuerzo tiene
            dirección y tu corazón tiene hambre de grandeza.”
          </motion.blockquote>

          <motion.figcaption
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            viewport={{ once: true }}
            className="mt-6 text-xl text-gray-600"
          >
            — Luis Daniel Fernández
          </motion.figcaption>
        </figure>
      </div>
    </section>
  );
});

HomeSignatureAnimation.displayName = "HomeSignatureAnimation";
export default HomeSignatureAnimation;
