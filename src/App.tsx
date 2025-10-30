import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
