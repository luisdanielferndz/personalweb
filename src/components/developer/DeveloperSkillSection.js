// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Palette,Server, GitMerge } from "lucide-react";

// export default function DeveloperSkillSection() {
//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       icon: Code,
//       skills: [
//         { name: "HTML5", level: 98 },
//         { name: "CSS3 & Tailwind", level: 95 },
//         { name: "JavaScript", level: 95 },
//         { name: "Responsive Design", level: 100 },
//       ],
//     },
//     {
//       title: "Backend",
//       icon: Server,
//       skills: [
//         { name: "Java", level: 75 },
//         { name: "Python", level: 60 },
//         { name: "PostgreSQL & MySQL", level: 80 },
        
//       ],
//     },    
//     {
//       title: "Technologies",
//       icon: GitMerge,
//       skills: [
//         { name: "React", level: 95 },
//         { name: "Next.js", level: 92 },
//         { name: "Django", level: 88 },
//         { name: "Git & GitHub", level: 75 },
//         { name: "Inteligencia Artificial", level: 90 },
//       ],
//     }
    
//   ];

//   return (
//     <section id="skills" className="min-h-screen flex items-center px-6 py-20 bg-[#0A0E1F] text-white font-luxury">
//       <div className="max-w-6xl mx-auto">
//         {/* Título */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             My{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             A comprehensive toolkit for building modern, scalable web applications
//           </p>
//         </motion.div>

//         {/* Categorías */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, categoryIndex) => {
//             const Icon = category.icon;
//             return (
//               <motion.div
//                 key={categoryIndex}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//                 className="backdrop-blur-xl rounded-3xl p-8 bg-white/5 border border-white/10 shadow-lg"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mr-4">
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">
//                     {category.title}
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex}>
//                       <div className="flex justify-between mb-2">
//                         <span className="font-medium text-gray-200">
//                           {skill.name}
//                         </span>
//                         <span className="text-sm text-gray-400">
//                           {skill.level}%
//                         </span>
//                       </div>
//                       <div className="w-full rounded-full h-2 bg-gray-800">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${skill.level}%` }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
//                           className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { Code, Palette, Server, GitMerge } from "lucide-react";

export default function DeveloperSkillSection() {
  const categories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML5", level: 98 },
        { name: "CSS3 & Tailwind", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Responsive Design", level: 100 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Java", level: 75 },
        { name: "Python", level: 60 },
        { name: "PostgreSQL & MySQL", level: 80 },
      ],
    },
    {
      title: "Technologies",
      icon: GitMerge,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "Django", level: 88 },
        { name: "Git & GitHub", level: 75 },
        { name: "AI Tools", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20 bg-[#0A0E1F] text-white font-luxury">
      <div className="max-w-6xl mx-auto text-center fade-in-section">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          A comprehensive toolkit for building modern, scalable web applications.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <div
              key={i}
              className="backdrop-blur-xl rounded-3xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {category.skills.map((skill, j) => (
                <div key={j} className="mb-4 text-left">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-growBar"
                      style={{ "--target-width": `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
