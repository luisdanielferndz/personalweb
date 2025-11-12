import React from 'react';
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaSpotify,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/luisdanielferndz', label: 'GitHub' },
  { icon: FaTwitter, href: 'https://x.com/luisdanielfendz', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://youtube.com/@luisdanielferndz', label: 'YouTube' },
  { icon: FaInstagram, href: 'https://www.instagram.com/luisdanielferndz', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/share/14Txc3vHFUy', label: 'Facebook' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@luisdanielferndz', label: 'TikTok' },
  { icon: FaSpotify, href: 'https://open.spotify.com/usuario_o_playlist', label: 'Spotify' },
  { icon: FaWhatsapp, href: 'https://wa.me/559584259581', label: 'WhatsApp' },
];

const SocialMarquee = React.memo(() => {
  // repetir para que la animación muestre movimiento continuo
  const repeatedLinks = React.useMemo(() => [...socialLinks, ...socialLinks, ...socialLinks], []);

  return (
    // overflow-hidden ya evita scroll horizontal por la animación
    <section
      className="overflow-hidden w-full h-28 bg-gray-50 flex items-center select-none"
      aria-label="Redes sociales de Daniel"
    >
      <div className="relative w-full">
        {/* Content wrapper con inline-flex para animación y min-width */}
        <div className="inline-flex animate-scroll will-change-transform" aria-hidden="true">
          {repeatedLinks.map(({ icon: Icon, href, label }, index) => (
            <a
              key={`${label}-${index}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mx-3 md:mx-4 
                         bg-white rounded-full shadow transition-transform duration-300 
                         hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-gray-800"
              aria-label={label}
              title={label}
            >
              <Icon size={32} className="text-gray-800" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* -50% asume contenido repetido; ajusta si cambias repetición */
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
});

SocialMarquee.displayName = 'SocialMarquee';
export default SocialMarquee;
