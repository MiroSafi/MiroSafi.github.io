import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} style={styles.about}>
      <div
        style={{
          ...styles.header,
          ...(isVisible ? styles.headerVisible : styles.headerHidden),
        }}
      >
        <h2>Über Uns</h2>
      </div>
      <div
        style={{
          ...styles.bubble,
          ...(isVisible ? styles.bubbleVisible : styles.bubbleHidden),
        }}
      >
        <h2>Taxikules – Ihr zuverlässiges Taxi in Kassel!</h2>
        <p>
          Willkommen bei <strong>Taxikules – Taxi Kassel 1A</strong>! Wir bieten
          schnelle, zuverlässige und preiswerte Taxifahrten in Kassel und Umgebung –
          <strong> 24/7 für Sie im Einsatz.</strong>
        </p>

        <h3>Warum Taxikules?</h3>
        <ul>
          <li>Schnell, pünktlich & zuverlässig</li>
          <li>Faire & transparente Preise – Keine versteckten Kosten</li>
          <li>Krankenfahrten mit Krankenkassen-Abrechnung</li>
          <li>Bequemer Flughafentransfer zu allen deutschen Airports</li>
          <li>Komfortable & gepflegte Fahrzeuge für jede Fahrt</li>
          <li>Europaweiter Service – wir fahren Sie auch über Grenzen hinaus</li>
        </ul>

        <h3>Die neue Taxikules-App – Taxi digital erleben!</h3>
        <p>
          Bald noch einfacher: Mit der kommenden <strong>Taxikules-App</strong> 
          (Veröffentlichung Ende des Jahres) können Sie Ihr Taxi per Klick bestellen.
        </p>
        <p><strong>Exklusiv in unseren Taxis:</strong></p>
        <ul>
          <li>Steuern Sie Musik & Innenbeleuchtung per iPad</li>
          <li>Premium-Fahrer mit Tourguide-Kenntnissen</li>
        </ul>

        <h3>Die Zukunft: Flugtaxis in Kassel!</h3>
        <p>
          Taxikules plant, das erste <strong>Flugtaxi-Unternehmen Deutschlands</strong> zu werden!
          Kooperationen mit führenden Firmen sind bereits abgeschlossen.
        </p>
        <ul>
          <li>Modernste Mobilität für Kassel</li>
          <li>Neue Arbeitsplätze & Innovation für die Region</li>
          <li>Effizientere & schnellere Transportmöglichkeiten</li>
        </ul>

        <h3>Jetzt Taxi bestellen!</h3>
        <p>Taxikules wächst weiter – bald auch in Berlin, Frankfurt, Paris & Vienna!</p>
        <p><strong>Jetzt anrufen & Fahrt sichern!</strong></p>
      </div>
    </section>
  );
};

const styles = {
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 20px",
    minHeight: "100vh",
    backgroundColor: "#222",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    color: "#FFD700",
    fontSize: "2.5rem",
    fontWeight: "bold",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  },
  bubble: {
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "700px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "left",
    transition: "opacity 1s ease-out, transform 1s ease-out",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginTop: "20px", // Space between header and text block
  },
  headerHidden: {
    opacity: 0,
    transform: "translateY(-30px)",
  },
  headerVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  bubbleHidden: {
    opacity: 0,
    transform: "translateY(50px)",
  },
  bubbleVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
};

export default About;
