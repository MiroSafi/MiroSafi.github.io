import React, { useEffect, useRef, useState } from "react";

const Impressum = () => {
  const textRef = useRef(null);
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

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="impressum" style={styles.container}>
      <div
        ref={textRef}
        style={{
          ...styles.content,
          ...(isVisible ? styles.visible : styles.hidden),
        }}
      >
        <h2 style={styles.heading}>Impressum</h2>
        <h3 style={styles.subheading}>Angaben gemäß § 5 TMG</h3>
        <p><strong>Mierweiss Safi</strong></p>
        <p>Am Bettenhäuser Bahnhof 5</p>
        <p>34123 Kassel</p>

        <h3 style={styles.subheading}>Kontakt</h3>
        <p>
          Telefon: <a href="tel:+4917688366883" style={styles.link}>+49 561 43083015</a>
        </p>
        <p>
          E-Mail: <a href="mailto:info@herkulestaxikassel.de" style={styles.link}>taxikules@gmail.com</a>
        </p>

        <h3 style={styles.subheading}>Bildrechte</h3>
        <p>Die Bilder wurden von uns selbst aufgenommen und erstellt.</p>

        <h3 style={styles.subheading}>Webseite</h3>
        <p>Die Webseite wurde von uns entwickelt.</p>

        <h3 style={styles.subheading}>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen 
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die 
          auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen 
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer 
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir 
          diese Inhalte umgehend entfernen.
        </p>

        <h3 style={styles.subheading}>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
          wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum 
          Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
          umgehend entfernen.
        </p>

        <h3 style={styles.subheading}>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
          beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "50px 20px",
    backgroundColor: "#222",
    color: "#FFD700",
    textAlign: "center",
  },
  content: {
    maxWidth: "800px",
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "left",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  },
  hidden: {
    opacity: 0,
    transform: "translateY(50px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.5rem",
    marginTop: "20px",
    fontWeight: "bold",
    color: "#FFD700",
  },
  link: {
    color: "#222",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Impressum;
