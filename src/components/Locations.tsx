import { MapPin, Clock } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Local La Reina',
    address: 'Avda Alcalde Fernando Castillo Velasco 9100, Tercer Nivel, La Reina',
    hours: 'Lunes a Viernes: 7:00 - 19:00 | Sábados, Domingos y Festivos: 9:00 - 16:00',
    phone: '+56 9 1234 5678',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Local Las Condes',
    address: 'Avenida las Condes 8631, Las Condes',
    hours: 'Lunes a Viernes: 7:00 - 19:00 | Sábados, Domingos y Festivos: 9:00 - 16:00',
    phone: '+56 9 8765 4321',
    image: 'https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Local Fleming',
    address: 'Fleming 7889, Las Condes',
    hours: 'Lunes a Viernes: 7:00 - 19:00 | Sábados, Domingos y Festivos: 9:00 - 16:00',
    phone: '+56 9 5555 6666',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold italic text-white mb-4">
            Nuestros Locales
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C7A14A] to-transparent mx-auto mb-6 animate-pulse-slow"></div>
          <p className="text-lg text-white/70 font-light">
            Visítanos en nuestras tres sedes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="group bg-zinc-900 overflow-hidden hover:shadow-2xl hover:shadow-[#C7A14A]/20 hover:-translate-y-2 transition-all duration-500"
              style={{
                animation: `fadeIn 1s ease-in ${index * 0.2}s forwards`,
                opacity: 0
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold italic text-white group-hover:translate-x-2 transition-transform duration-300">
                  {location.name}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-[#C7A14A] flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                  <p className="text-white/80 font-light">{location.address}</p>
                </div>

                <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-[#C7A14A] flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                  <p className="text-white/80 font-light">{location.hours}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
