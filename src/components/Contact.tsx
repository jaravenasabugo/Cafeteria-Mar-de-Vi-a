import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setSubmitStatus('error');
    } finally {
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold italic text-white mb-4">
            Contáctanos
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C7A14A] to-transparent mx-auto mb-6 animate-pulse-slow"></div>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Te esperamos para compartir un momento único con aroma a mar y café.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-left">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2 font-light">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-[#C7A14A]/30 text-white focus:border-[#C7A14A] focus:scale-105 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 mb-2 font-light">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-[#C7A14A]/30 text-white focus:border-[#C7A14A] focus:scale-105 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2 font-light">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black border border-[#C7A14A]/30 text-white focus:border-[#C7A14A] focus:scale-105 focus:outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`group w-full flex items-center justify-center gap-2 px-6 py-4 transition-all duration-300 font-light tracking-wide disabled:opacity-50 disabled:cursor-not-allowed ${
                submitStatus === 'success' 
                  ? 'bg-green-600 text-white' 
                  : submitStatus === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-[#C7A14A] text-black hover:bg-[#d4b056] hover:scale-105'
              }`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                submitStatus === 'success' ? (
                  '✓ Mensaje enviado exitosamente'
                ) : submitStatus === 'error' ? (
                  '✗ Error al enviar mensaje'
                ) : (
                  'Enviando...'
                )
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="space-y-8 animate-slide-in-right">
            <div className="pt-8 border-t border-[#C7A14A]/30">
              <p className="text-white/60 font-light leading-relaxed">
                Cada taza de café es una invitación a detenerse, respirar y disfrutar.
                En Mar de Viña, creamos momentos especiales donde el café se encuentra con la elegancia.
              </p>
            </div>

            <div className="pt-4">
              <div className="relative h-48 overflow-hidden group">
                <img
                  src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Café"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
