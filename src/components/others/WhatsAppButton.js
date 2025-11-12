// WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ href = "https://chat.whatsapp.com/LFUsMvFXvVv7B6RfSqVLN1?mode=wwc", text = "Únete a nuestro grupo especial" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#1F2937] text-white font-bold text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#424555] transition-all duration-300"
    >
      {text}
      <FaWhatsapp className="w-5 h-5" />
    </a>
  );
};

export default WhatsAppButton;
