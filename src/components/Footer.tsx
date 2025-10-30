const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-[#C7A14A]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold italic text-white mb-2">
              Mar de Viña
            </h3>
            <p className="text-white/60 text-sm font-light">
              Cafetería
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm font-light">
              © {currentYear} Mar de Viña Cafetería. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-xs mt-2 font-light">
              Santiago, Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
