import React from "react";
import { Code, Palette, Zap, Heart } from "lucide-react";

export default function DeveloperAboutSection() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Heart, label: "Happy Clients", value: "25+" },
    { icon: Zap, label: "Years Experience", value: "3+" },
    { icon: Palette, label: "Designs Created", value: "100+" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-fondoDev text-white font-luxury">
      <div className="max-w-6xl mx-auto text-center md:text-left fade-in-section">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="backdrop-blur-xl rounded-3xl p-8 bg-white/5 border border-white/10 transition-all hover:scale-[1.02]">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-3xl flex items-center justify-center text-6xl bg-gray-900 text-white">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Crafting Digital Experiences</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              I'm passionate about creating modern, responsive websites that not only look stunning
              but also provide seamless user experiences.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              When I'm not coding, you'll find me exploring the latest design trends or contributing
              to open-source projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl rounded-2xl p-6 text-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
