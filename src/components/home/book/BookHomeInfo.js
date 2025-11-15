import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export default function BookHomeInfo() {
  const [contactType, setContactType] = useState('email');
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubscribe = async () => {
    if (!value) {
      alert("Por favor ingresa tu correo o número de teléfono");
      return;
    }

    setIsSubmitting(true);
    setSuccess(null);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_SUBSCRIPTION_TEMPLATE_ID,
        {
          contact_type: contactType,
          contact_value: value,
        }
      );

      setSuccess(true);
      setValue("");
    } catch (error) {
      console.error("❌ Error al enviar:", error.text || error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#FFF8ED] via-[#FFFDF9] to-white font-luxury">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28 flex flex-col lg:flex-row items-start gap-10">
        {/* Left: numeral y acento dorado */}
        <div className="flex-shrink-0 flex items-start gap-6">
          <div className="text-[180px] md:text-[220px] leading-none font-extrabold text-[#0b132430] select-none pointer-events-none">01</div>
          <div className="h-44 w-1.5 rounded-xl bg-gradient-to-b from-[#F6C85F] to-[#D69E02] shadow-md" />
        </div>

        {/* Centro: título y subtítulo */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#13172A] leading-tight">
            Sección de libros
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
            Una sección dedicada a las lecturas que transforman hábitos, pensamientos y resultados. Explora títulos seleccionados para avanzar desde la intención hasta el logro.
          </p>

          {/* Detalle decorativo */}
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-3 bg-gradient-to-br from-white/80 to-white/40 rounded-full px-4 py-2 shadow-sm">
              <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-sm">
                <div className="text-xs text-gray-500">Colección curada</div>
                <div className="text-sm font-semibold text-[#13172A]">Lecturas transformadoras</div>
              </div>
            </div>

            <div className="hidden md:block flex-1">
              <div className="h-1 rounded-full bg-gradient-to-r from-transparent via-[#F6C85F] to-transparent" />
            </div>
          </div>
        </div>

        {/* Right: suscripción */}
        <div className="w-full lg:w-96 bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col gap-4">
          <div className="text-sm text-gray-500 uppercase tracking-wide">Suscríbete a novedades</div>

          {/* Selector */}
          <div className="relative">
            <label className="block text-xs text-gray-400 mb-2">Elija</label>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-gray-200">
              <button
                type="button"
                onClick={() => setContactType('email')}
                className={`flex-1 text-sm py-2 rounded-lg transition ${contactType === 'email' ? 'bg-white shadow-sm font-semibold' : 'text-gray-600'}`}
              >
                Correo electrónico
              </button>
              <button
                type="button"
                onClick={() => setContactType('phone')}
                className={`flex-1 text-sm py-2 rounded-lg transition ${contactType === 'phone' ? 'bg-white shadow-sm font-semibold' : 'text-gray-600'}`}
              >
                Número de teléfono
              </button>
              <div className="ml-2 text-xs text-gray-400">▼</div>
            </div>
          </div>

          {/* Input */}
          <div>
            <label htmlFor="contact" className="sr-only">
              {contactType === 'email' ? 'Correo electrónico' : 'Número de teléfono'}
            </label>
            <input
              id="contact"
              name="contact"
              type={contactType === 'email' ? 'email' : 'tel'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={contactType === 'email' ? 'tunombre@ejemplo.com' : '+55 21 9 9999-9999'}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6C85F] focus:border-transparent transition"
            />
          </div>

          {/* Botón */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleSubscribe}
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 bg-[#F6C85F] text-[#13172A] rounded-lg font-semibold shadow hover:brightness-95 transition"
            >
              {isSubmitting ? "Enviando..." : "Subscribirme"}
            </button>
          </div>

          {success === true && (
            <p className="text-green-600 text-center font-medium mt-2">
              ✅ Suscripción enviada con éxito!
            </p>
          )}
          {success === false && (
            <p className="text-red-600 text-center font-medium mt-2">
              ❌ Ocurrió un error al enviar. Intenta de nuevo.
            </p>
          )}

          <div className="text-xs text-gray-400 mt-1">
            Recibirás novedades, lanzamientos y recursos exclusivos. Puedes dejar el campo vacío para explorar igualmente.
          </div>

          {/* Detalle visual inferior */}
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.2L21 9.3l-5 4.2L17 21l-5-3.1L7 21l1-7.5-5-4.2 6.1-.9L12 2z" />
            </svg>
            <span>Sin spam · Cancelación fácil</span>
          </div>
        </div>
      </div>

      {/* Divider inferior */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-2 rounded-full bg-gradient-to-r from-transparent via-[#F6C85F] to-transparent" />
        </div>
      </div>
    </header>
  );
}
