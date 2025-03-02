import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About.js";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";

const App = () => {
  return (
    <Router basename='/kassel'>
      <Header />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Contact />
              <About />
              <Services />
              <Pricing />
            </>
          }
        />
        {/* Impressum Page Route */}
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
