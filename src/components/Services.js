import React, { useEffect, useRef, useState } from 'react';

const services = [
  { title: 'Gruppenfahrten', description: 'Ideal für Gruppenreisen mit maximalem Komfort.' },
  { title: 'Großraumtaxi', description: 'Geräumige Taxis für größere Gruppen oder Gepäck.' },
  { title: 'Flughafentransfer', description: 'Pünktlich und zuverlässig zum Flughafen.' },
  { title: '24/7 Service', description: 'Rund um die Uhr für Sie im Einsatz.' },
  { title: 'Kartenzahlung', description: 'Bequem und sicher per Karte bezahlen.' },
  { title: 'Stadtrundfahrten', description: 'Entdecken Sie die Stadt mit unseren erfahrenen Fahrern.' },
  { title: 'Geschäftsreisen', description: 'Professionelle Fahrten für Ihre Business-Bedürfnisse.' },
  { title: 'Krankenfahrten', description: 'Zuverlässige Fahrten für medizinische Zwecke.' },
  { title: 'Kurierfahrten', description: 'Schneller und sicherer Kurierdienst.' },
  { title: 'Rollstuhltaxi', description: 'Barrierefreie Fahrten für Rollstuhlfahrer.' },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset visibility for repeat animations
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
    <section
      id="services"
      ref={sectionRef}
      style={styles.services}
    >
      <h2
        style={{
          ...styles.heading,
          ...(isVisible ? styles.headingVisible : styles.headingHidden),
        }}
      >
        Unsere Dienstleistungen
      </h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(isVisible ? styles.cardVisible : styles.cardHidden),
            }}
          >
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  services: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#FFD700',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
  headingHidden: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },
  headingVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  card: {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
  cardHidden: {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  cardVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#FFF',
  },
};

export default Services;
