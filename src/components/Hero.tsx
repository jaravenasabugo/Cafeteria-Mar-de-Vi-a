import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToLocations = () => {
    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-bold italic text-white mb-4 tracking-wide">
            Mar de Viña
          </h1>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#C7A14A] to-transparent mx-auto"></div>
          <p className="text-xl md:text-2xl font-light mt-4 text-white/90">
            Cafetería
          </p>
        </div>

        <p className="text-lg md:text-2xl font-light text-white/90 mb-12 animate-fade-in-delay leading-relaxed">
        Te esperamos en Mar de Viña Cafetería. Haz de tu espera un momento tranquilo y agradable, Disfruta de nuestras preparaciones
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <button
            onClick={scrollToLocations}
            className="group px-8 py-4 border-2 border-[#C7A14A] text-white hover:bg-[#C7A14A] hover:text-black hover:scale-105 transition-all duration-300 text-lg font-light tracking-wide"
          >
            Ver nuestros locales
          </button>
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-[#C7A14A] text-black hover:bg-[#d4b056] hover:scale-105 transition-all duration-300 text-lg font-light tracking-wide"
          >
            Contáctanos
          </button>
        </div>
      </div>

      <button
        onClick={scrollToLocations}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-[#C7A14A]" />
      </button>
    </section>
  );
};

export default Hero;
