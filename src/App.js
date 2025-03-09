import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Cookies from "./components/Cookies";
import CookieConsent from "react-cookie-consent";
import CookieBanner from "./components/CookieBanner";


const App = () => {
  return (
    // <Router basename="/kassel">
    <Router >
      {/* 👈 Set basename to /kassel */}
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
        {/* Kassel Page Route */}
        <Route path="/kassel" element={<>
              <Hero />
              <Contact />
              <About />
              <Services />
              <Pricing />
            </>} />
        {/* Impressum Page Route */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/Cookies" element={<Cookies />} />
      </Routes>
      <Footer />
      {/* <CookieConsent
            location="bottom"
            buttonText="Akzeptieren"
            declineButtonText="Ablehnen"
            enableDeclineButton
            cookieName="taxikulesCookieConsent"
            style={{ background: "#222", color: "#FFD700" }}
            buttonStyle={{ background: "#FFD700", color: "#000", fontSize: "14px" }}
            declineButtonStyle={{ background: "#444", color: "#FFD700", fontSize: "14px" }}
          >
            Wir verwenden Cookies, um die Benutzererfahrung zu verbessern. <a href="/datenschutz" style={{ color: "#FFD700" }}>Mehr erfahren</a>.
          </CookieConsent> */}
      <CookieBanner />
    </Router>
  );
};

export default App;
