const ConvenioMarco = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden group animate-fade-in bg-zinc-800 rounded-lg">
            <img
              src="/images/Convenio Marco.webp"
              alt="Convenio Marco"
              className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic text-white mb-4 md:mb-6">
              Convenio Marco
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C7A14A] to-transparent mb-4 md:mb-6 animate-pulse-slow"></div>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-4 md:mb-6">
            Estamos presentes en el Convenio Marco de Alimentos, contactanos para más información..
            </p>
            <button
              onClick={scrollToContact}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#C7A14A] text-black hover:bg-[#d4b056] hover:scale-105 transition-all duration-300 text-base sm:text-lg font-light tracking-wide"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvenioMarco;

