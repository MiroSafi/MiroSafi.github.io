import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About.js';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div >
      <Header />
      <Hero />
      <Contact />
      <About />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
};

const styles = {
  container:{
     
      width: '100%',
      maxWidth: '100vw',
    
    
  }
};

export default App;
