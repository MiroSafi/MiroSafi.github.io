import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About.js';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';

const App = () => {
  return (
    <div >
      <Header />
      <Hero />
      <Contact />
      <About />
      <Services />
      <Pricing />
      <Impressum />
      <Footer />
    </div>
  );
};

export default App;
