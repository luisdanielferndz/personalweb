import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';
import { FaYoutube, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const socialLinks = [
    { icon: Github, href: "https://github.com/luisdanielferndz", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/luisdanielfendz", label: "Twitter" },
    { icon: FaYoutube, href: "https://youtube.com/@luisdanielferndz", label: "YouTube" },
    { icon: FaInstagram, href: "https://www.instagram.com/luisdanielferndz?", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/share/14Txc3vHFUy/", label: "Facebook" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@luisdanielferndz", label: "TikTok" },
  ];

  const navLinks = [
    { href: "/about", label: "Sobre Daniel" },
    { href: "/estate", label: "Bienes Raíces" },
    { href: "/developer", label: "Software" },
    { href: "/bookhome", label: "Libros" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <footer className="px-6 py-12 bg-fondoDev text-colorTextoGray font-luxury">
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px mb-12 bg-white/10"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Bio */}
          <div className="md:col-span-1">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo de Luis Daniel Fernández"
                className="h-16 w-auto md:h-20"
              />
            </Link>
            <p className="mt-4 text-sm max-w-xs text-gray-300">
              Que sería de la vida si no pudiéramos provocar un cambio en ella.
            </p>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className={`hover:text-blue-400 transition-colors ${
                      location.pathname === link.href ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-white">Conéctate conmigo</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px my-8 bg-white/10"></div>

        <div className="text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Luis Daniel Fernández Hdz</p>
          <p className="mt-1">Vivamos una vida con propósito</p>
        </div>
      </div>
    </footer>
  );
}
