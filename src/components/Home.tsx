import Navbar from './Navbar';
import Hero from './Hero';
import Locations from './Locations';
import Catering from './Catering';
import ConvenioMarco from './ConvenioMarco';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Locations />
      <Catering />
      <ConvenioMarco />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

