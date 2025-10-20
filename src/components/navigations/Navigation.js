import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../others/Logo";

export default function Navigation({ activeSection, isDark }) {
  const location = useLocation();

  // Lista de items del navbar
  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/", scroll: "about" },
    { id: "developer", label: "Developer", path: "/developer" },
    { id: "contact", label: "Contact", path: "/", scroll: "contact" },
  ];

  // Función para scroll a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className={`flex items-center gap-6 backdrop-blur-xl rounded-full border px-4 py-2 shadow-lg ${
          isDark
            ? "bg-gray-900/40 border-white/10 shadow-black/20"
            : "bg-white/40 border-black/10 shadow-gray-300/30"
        }`}
      >
        <Logo size="text-xl" />

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div key={item.id} className="relative">
              {item.path === location.pathname ? (
                // Si ya estás en la ruta, permite scroll
                <motion.button
                  onClick={() => item.scroll && scrollToSection(item.scroll)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                    activeSection === item.id
                      ? isDark
                        ? "text-white"
                        : "text-gray-900"
                      : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-full ${
                        isDark ? "bg-white/10" : "bg-black/10"
                      }`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ) : (
                // Si es otra ruta, usa Link de react-router
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                    activeSection === item.id
                      ? isDark
                        ? "text-white"
                        : "text-gray-900"
                      : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
