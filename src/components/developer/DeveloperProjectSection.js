import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/button";
import { Link } from "react-router-dom";
import { projects } from "./projectData";

export default function DeveloperProjectSection() {
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: "Todos los proyectos" },
    { key: "web", label: "Aplicaciones Web" },
    { key: "design", label: "Diseño UI/UX" },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="px-6 py-20 text-white font-luxury bg-fondoDev"
    >
      <div className="max-w-6xl mx-auto text-center fade-in-section">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Proyectos{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Destacados
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Una selección de mi trabajo en desarrollo y diseño. Haz clic para ver
          cada caso en detalle.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <Button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-6 py-2 border transition-all ${
                filter === f.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
                  : "border-white/20 text-gray-300 hover:bg-white/5"
              }`}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <Link
                key={project.id}
                to={`/developer/ProjectDemo?id=${project.id}`}
                className="block backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 rounded-3xl overflow-hidden transition-all hover:scale-[1.02] shadow-lg group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver caso <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-2 text-center text-gray-400">
              No se encontraron proyectos en esta categoría.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
