// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebookF, FaTiktok, FaSpotify } from "react-icons/fa";
// import Button from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     alert("Thank you for your message! I'll get back to you soon.");
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const socialLinks = [
//     { icon: FaGithub, href: "https://github.com/luisdanielferndz", label: "GitHub" },
//     { icon: FaTwitter, href: "https://x.com/luisdanielfendz", label: "Twitter" },
//     { icon: FaYoutube, href: "https://youtube.com/@luisdanielferndz", label: "YouTube" },
//     { icon: FaInstagram, href: "https://www.instagram.com/luisdanielferndz?", label: "Instagram" },
//     { icon: FaFacebookF, href: "https://www.facebook.com/share/14Txc3vHFUy/", label: "Facebook" },
//     { icon: FaTiktok, href: "https://www.tiktok.com/@luisdanielferndz", label: "TikTok" },
//     { icon: FaSpotify, href: "https://open.spotify.com/usuario_o_playlist", label: "Spotify" },
//   ];

//   return (
//     <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-fondoDev font-luxury">
//       <div className="max-w-6xl mx-auto">
//         {/* Encabezado */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
//             Let's{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Connect
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project
//           </p>
//         </motion.div>

//         {/* Contenido */}
//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Información de contacto */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>

//             <div className="space-y-6 mb-8 text-gray-300">
//               {[
//                 {
//                   icon: Mail,
//                   text: "ldanielferndz@gmail.com",
//                   href: "mailto:ldanielferndz@gmail.com",
//                 },
//                 { icon: Phone, text: "+55 (95) 8425-9581", href: "tel:+559584259581" },
//                 { icon: MapPin, text: "Brasil, Rio de Janeiro", href: "#" },
//               ].map((contact, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
//                     <contact.icon className="w-5 h-5 text-white" />
//                   </div>
//                   <a
//                     href={contact.href}
//                     className="text-lg text-gray-300 hover:text-blue-500 transition-colors"
//                   >
//                     {contact.text}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             {/* Redes sociales */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
//               <div className="flex gap-4 flex-wrap">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ scale: 1.1 }}
//                     className="p-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
//                     aria-label={social.label}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <social.icon className="w-5 h-5 text-blue-500" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Formulario */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//   <div className="grid md:grid-cols-2 gap-6">
//     <Input
//       name="name"
//       placeholder="Name"
//       onChange={handleChange}
//       required
//       className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//     />
//     <Input
//       name="email"
//       type="email"
//       placeholder="Email"
//       onChange={handleChange}
//       required
//       className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//     />
//   </div>
//   <Input
//     name="subject"
//     placeholder="Subject"
//     onChange={handleChange}
//     required
//     className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//   />
//   <Textarea
//     name="message"
//     placeholder="Message"
//     rows={5}
//     onChange={handleChange}
//     required
//     className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//   />
//   <Button
//     type="submit"
//     disabled={isSubmitting}
//     className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-2xl"
//   >
//     {isSubmitting ? "Sending..." : "Send Message"}
//   </Button>
// </form>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { Mail, MapPin, Phone } from "lucide-react";
// import {
//   FaGithub,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaFacebookF,
//   FaTiktok,
//   FaSpotify,
// } from "react-icons/fa";
// import Button from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";

// // Inicializa EmailJS con tu clave pública (una sola vez)
// emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     from_name: "",
//     from_email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(null);

//   // Maneja el cambio de campos del formulario
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   // Envía el correo con EmailJS
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSuccess(null);

//     try {
//       await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         formData
//       );

//       setSuccess(true);
//       setFormData({ from_name: "", from_email: "", subject: "", message: "" });
//     } catch (error) {
//       console.error("❌ Error al enviar:", error.text || error);
//       setSuccess(false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const socialLinks = [
//     { icon: FaGithub, href: "https://github.com/luisdanielferndz", label: "GitHub" },
//     { icon: FaTwitter, href: "https://x.com/luisdanielfendz", label: "Twitter" },
//     { icon: FaYoutube, href: "https://youtube.com/@luisdanielferndz", label: "YouTube" },
//     { icon: FaInstagram, href: "https://www.instagram.com/luisdanielferndz", label: "Instagram" },
//     { icon: FaFacebookF, href: "https://www.facebook.com/share/14Txc3vHFUy/", label: "Facebook" },
//     { icon: FaTiktok, href: "https://www.tiktok.com/@luisdanielferndz", label: "TikTok" },
//     { icon: FaSpotify, href: "https://open.spotify.com/usuario_o_playlist", label: "Spotify" },
//   ];

//   return (
//     <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-fondoDev font-luxury">
//       <div className="max-w-6xl mx-auto">
//         {/* Encabezado */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
//             Let's{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Connect
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project.
//           </p>
//         </motion.div>

//         {/* Contenido principal */}
//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Información de contacto */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>

//             <div className="space-y-6 mb-8 text-gray-300">
//               {[
//                 { icon: Mail, text: "ldanielferndz@gmail.com", href: "mailto:ldanielferndz@gmail.com" },
//                 { icon: Phone, text: "+55 (95) 8425-9581", href: "tel:+559584259581" },
//                 { icon: MapPin, text: "Brasil, Rio de Janeiro", href: "#" },
//               ].map((contact, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
//                     <contact.icon className="w-5 h-5 text-white" />
//                   </div>
//                   <a
//                     href={contact.href}
//                     className="text-lg text-gray-300 hover:text-blue-500 transition-colors"
//                   >
//                     {contact.text}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             {/* Redes sociales */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
//               <div className="flex gap-4 flex-wrap">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ scale: 1.1 }}
//                     className="p-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
//                     aria-label={social.label}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <social.icon className="w-5 h-5 text-blue-500" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Formulario */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <Input
//                   name="from_name"
//                   placeholder="Name"
//                   value={formData.from_name}
//                   onChange={handleChange}
//                   required
//                   className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//                 />
//                 <Input
//                   name="from_email"
//                   type="email"
//                   placeholder="Email"
//                   value={formData.from_email}
//                   onChange={handleChange}
//                   required
//                   className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//                 />
//               </div>
//               <Input
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//               />
//               <Textarea
//                 name="message"
//                 placeholder="Message"
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
//               />
//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-2xl"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>

//               {success === true && (
//                 <p className="text-green-400 text-center font-medium mt-4">
//                   ✅ Message sent successfully!
//                 </p>
//               )}
//               {success === false && (
//                 <p className="text-red-400 text-center font-medium mt-4">
//                   ❌ There was an error sending your message. Please try again.
//                 </p>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import Button from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

// Inicializa EmailJS con tu clave pública (una sola vez)
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData
      );

      setSuccess(true);
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error al enviar:", error.text || error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/luisdanielferndz", label: "GitHub" },
    { icon: FaTwitter, href: "https://x.com/luisdanielferndz", label: "Twitter" },
    { icon: FaYoutube, href: "https://youtube.com/@luisdanielferndz", label: "YouTube" },
    { icon: FaInstagram, href: "https://www.instagram.com/luisdanielferndz", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/share/14Txc3vHFUy/", label: "Facebook" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@luisdanielferndz", label: "TikTok" },
    { icon: FaSpotify, href: "https://open.spotify.com/usuario_o_playlist", label: "Spotify" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-fondoDev font-luxury overflow-x-hidden box-border">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>

            <div className="space-y-6 mb-8 text-gray-300">
              {[
                { icon: Mail, text: "ldanielferndz@gmail.com", href: "mailto:ldanielferndz@gmail.com" },
                { icon: Phone, text: "+55 (95) 8425-9581", href: "tel:+559584259581" },
                { icon: MapPin, text: "Brasil, Rio de Janeiro", href: "#" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={contact.href}
                    className="text-lg text-gray-300 hover:text-blue-500 transition-colors break-words"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex-shrink-0"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5 text-blue-500" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="from_name"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
                />
                <Input
                  name="from_email"
                  type="email"
                  placeholder="Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-[#1F2335] text-white placeholder-gray-400 border border-gray-700"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-2xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {success === true && (
                <p className="text-green-400 text-center font-medium mt-4">
                  ✅ Message sent successfully!
                </p>
              )}
              {success === false && (
                <p className="text-red-400 text-center font-medium mt-4">
                  ❌ There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
