import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToLocations = () => {
    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#C7A14A]/30">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black border border-[#C7A14A] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/Logo.png" 
                alt="Mar de Viña Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold italic text-white">Mar de Viña</h2>
              <p className="text-xs text-white/70 font-light">Cafetería</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToLocations}
              className="text-white/90 hover:text-[#C7A14A] transition-colors duration-300 font-light"
            >
              Locales
            </button>
            <button
              onClick={scrollToContact}
              className="text-white/90 hover:text-[#C7A14A] transition-colors duration-300 font-light"
            >
              Contacto
            </button>
            <Link
              to="/login"
              className="px-6 py-2 bg-[#C7A14A] text-black hover:bg-[#d4b056] hover:scale-105 transition-all duration-300 font-light rounded-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/90 hover:text-[#C7A14A] transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
