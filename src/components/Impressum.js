import React, { useEffect, useState, useRef } from "react";

const Impressum = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
    <section
      id="impressum"
      ref={sectionRef}
      style={{
        ...styles.section,
        ...(isVisible ? styles.visible : styles.hidden),
      }}
    >
      <div style={styles.box}>
        <h2 style={styles.heading}>Impressum</h2>
        <p><strong>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):</strong></p>
        <p>Mierweis Safi<br />Am Bettenhäuser Bahnhof 5<br />34123 Kassel<br />Deutschland</p>
        <p><strong>Kontakt:</strong><br />Telefon: +49 561 4308 3015<br />E-Mail: taxikules@gmail.com</p>
        <p><strong>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</strong><br />DE290085905</p>
        <p><strong>Aufsichtsbehörde:</strong><br />[Hier die zuständige Behörde mit Adresse und Website angeben]</p>

        <h3>Haftungsausschluss</h3>
        <p><strong>Haftung für Inhalte:</strong></p>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p><strong>Haftung für Links:</strong></p>
        <p>Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
        <p><strong>Urheberrecht:</strong></p>
        <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>

        <h3>Datenschutzerklärung</h3>
        <p><strong>1. Datenschutz auf einen Blick</strong></p>
        <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie darüber, welche Daten wir erheben, wie wir sie nutzen und welche Rechte Ihnen zustehen.</p>
        <p><strong>Verantwortlicher für die Datenverarbeitung:</strong></p>
        <p>Mierweis Safi<br />Am Bettenhäuser Bahnhof 5<br />34123 Kassel<br />E-Mail: taxikules@gmail.com</p>

        <h3>2. Erhebung und Speicherung personenbezogener Daten</h3>
        <p><strong>a) Beim Besuch der Website</strong></p>
        <p>Beim Aufrufen unserer Website www.taxikules.de werden automatisch Informationen gespeichert, darunter:</p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Referrer-URL (von welcher Website der Zugriff erfolgt)</li>
          <li>Verwendeter Browser und Betriebssystem</li>
        </ul>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    backgroundColor: "#222",
    color: "#FFD700",
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically if enough space
    minHeight: "100vh", // Ensures it takes the full viewport height
  },
  box: {
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    maxWidth: "800px",
    width: "90%", // Responsive width
    textAlign: "left",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  },
  hidden: {
    opacity: 0,
    transform: "translateY(50px)",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  },
};

export default Impressum;
