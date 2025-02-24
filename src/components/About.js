import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const headerRef = useRef(null);
  const bubbleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset visibility when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (headerRef.current && bubbleRef.current) {
      observer.observe(headerRef.current);
      observer.observe(bubbleRef.current);
    }

    return () => {
      if (headerRef.current && bubbleRef.current) {
        observer.unobserve(headerRef.current);
        observer.unobserve(bubbleRef.current);
      }
    };
  }, []);

  return (
    <section id="about" style={styles.about}>
      <div
        ref={headerRef}
        style={{
          ...styles.header,
          ...(isVisible ? styles.headerVisible : styles.headerHidden),
        }}
      >
        <h2>Über Uns</h2>
      </div>
      <div
        ref={bubbleRef}
        style={{
          ...styles.bubble,
          ...(isVisible ? styles.bubbleVisible : styles.bubbleHidden),
        }}
      >
        <h2>Taxikules – Ihr zuverlässiges Taxi in Kassel!</h2>
        <p>
          Willkommen bei <strong>Taxikules – Taxi Kassel 1A</strong>! Wir bieten
          schnelle, zuverlässige und preiswerte
          <strong>Taxifahrten in Kassel</strong> und Umgebung –{" "}
          <strong>24/7 für Sie im Einsatz.</strong>
        </p>
        <p>
          Egal ob{" "}
          <strong>
            Flughafentransfer, Krankenfahrt, Geschäftstermin oder Stadttour
          </strong>{" "}
          – unsere erfahrenen Fahrer bringen Sie sicher und komfortabel ans
          Ziel.
        </p>

        <h3>🚖 Warum Taxikules?</h3>
        <ul>
          <li>
            ✔ <strong>Schnell, pünktlich & zuverlässig</strong>
          </li>
          <li>
            ✔ <strong>Faire & transparente Preise</strong> – Keine versteckten
            Kosten
          </li>
          <li>
            ✔ <strong>Krankenfahrten mit Krankenkassen-Abrechnung</strong>
          </li>
          <li>
            ✔ <strong>Bequemer Flughafentransfer</strong> zu allen deutschen
            Airports
          </li>
          <li>
            ✔ <strong>Komfortable & gepflegte Fahrzeuge</strong> für jede Fahrt
          </li>
          <li>
            ✔ <strong>Europaweiter Service</strong> – wir fahren Sie auch über
            Grenzen hinaus
          </li>
        </ul>

        <h3>📲 Die neue Taxikules-App – Taxi digital erleben!</h3>
        <p>
          Bald noch einfacher: Mit der kommenden <strong>Taxikules-App</strong>{" "}
          (Veröffentlichung Ende des Jahres) können Sie
          <strong>Ihr Taxi per Klick bestellen.</strong>
        </p>
        <p>
          ✨ <strong>Exklusiv in unseren Taxis:</strong>
          <ul>
            <li>
              ➡ <strong>Steuern Sie Musik & Innenbeleuchtung per iPad!</strong>
            </li>
            <li>
              ➡ <strong>Premium-Fahrer mit Tourguide-Kenntnissen!</strong>
            </li>
          </ul>
        </p>

        <h3>🚁 Die Zukunft: Flugtaxis in Kassel!</h3>
        <p>
          Taxikules plant, das erste{" "}
          <strong>Flugtaxi-Unternehmen Deutschlands</strong> zu werden!
          Kooperationen mit führenden Firmen sind bereits abgeschlossen.
        </p>
        <ul>
          <li>
            ✅ <strong>Modernste Mobilität für Kassel</strong>
          </li>
          <li>
            ✅ <strong>Neue Arbeitsplätze & Innovation für die Region</strong>
          </li>
          <li>
            ✅ <strong>Effizientere & schnellere Transportmöglichkeiten</strong>
          </li>
        </ul>

        <h3>📍 Jetzt Taxi bestellen!</h3>
        <p>
          Taxikules wächst weiter – bald auch in{" "}
          <strong>Berlin, Frankfurt, Paris & Vienna!</strong>
        </p>
        <p>
          <strong>📞 Jetzt anrufen & Fahrt sichern!</strong>
        </p>
      </div>
    </section>
  );
};

const styles = {
  about: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "50px 20px",
    minHeight: "100vh",
    backgroundColor: "#222",
  },
  header: {
    flex: 1,
    color: "#FFD700",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  },
  bubble: {
    flex: 2,
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "30px",
    borderRadius: "20px",
    maxWidth: "600px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "left",
    transition: "opacity 1s ease-out, transform 1s ease-out",
    fontFamily: "'Roboto', sans-serif",
  },
  headerHidden: {
    opacity: 0,
    transform: "translateX(-50px)",
  },
  headerVisible: {
    opacity: 1,
    transform: "translateX(0)",
  },
  bubbleHidden: {
    opacity: 0,
    transform: "translateX(50px)",
  },
  bubbleVisible: {
    opacity: 1,
    transform: "translateX(0)",
  },
};

export default About;
