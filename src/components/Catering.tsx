const Catering = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold italic text-white mb-6">
              Servicio de Catering
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C7A14A] to-transparent mb-6 animate-pulse-slow"></div>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
              Ofrecemos un servicio de catering completo para tus eventos y ocasiones especiales. 
              Desde reuniones corporativas hasta celebraciones privadas, nuestro equipo se encarga 
              de crear una experiencia gastronómica memorable con la calidad y el sabor que nos caracteriza.
            </p>
            <p className="text-base text-white/70 font-light leading-relaxed mb-6">
              Contáctanos para conocer nuestras opciones de menú y personalizar tu evento.
            </p>
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-[#C7A14A] text-black hover:bg-[#d4b056] hover:scale-105 transition-all duration-300 text-lg font-light tracking-wide"
            >
              Solicitar Cotización
            </button>
          </div>
          
          <div className="order-1 md:order-2 relative h-96 md:h-[500px] overflow-hidden group animate-fade-in">
            <img
              src="/images/Catering.jpg"
              alt="Servicio de Catering"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;

