import React, { useEffect, useRef, useState } from 'react';

const Pricing = () => {
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
      id="pricing"
      ref={sectionRef}
      style={styles.pricing}
    >
      <div style={styles.overlay}>
        <h2
          style={{
            ...styles.heading,
            ...(isVisible ? styles.headingVisible : styles.headingHidden),
          }}
        >
          Unsere Tarife in Kassel
        </h2>
        <p style={styles.subheading}>Transparente Preise für alle Dienstleistungen.</p>

        <div style={styles.priceList}>
          {priceData.map((price, index) => (
            <div
              key={index}
              style={{
                ...styles.priceCard,
                ...(isVisible ? styles.cardVisible : styles.cardHidden),
              }}
            >
              <h3 style={styles.priceTitle}>{price.title}</h3>
              <ul style={styles.priceDetails}>
                {price.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const priceData = [
  {
    title: 'Tarif Kassel',
    details: [
      'Grundgebühr: 4.00€',
      'Kilometerpreis: 2.10€',
      'Wartezeit: 36.00€ / 1h',
      'Zuschlag Großraumtaxi: 6.00€',
    ],
  },
  {
    title: 'Tarif außerhalb Kassel',
    details: ['Bis zu 20% Rabatt'],
  },
  {
    title: 'Krankenfahrten',
    details: ['Komplette Kostenübernahme bei Genehmigung'],
  },
  {
    title: 'Flughafentransfers',
    details: ['Feste Preise auf Anfrage', '24/7 Verfügbarkeit'],
  },
  {
    title: 'Nachtzuschlag',
    details: ['Zusätzliche Gebühr: 10% von 22:00 bis 6:00'],
  },
];

const styles = {
  pricing: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#2E2E2E',
    color: '#FFD700',
    padding: '20px',
  },
  overlay: {
    position: 'relative',
    maxWidth: '1200px',
    width: '100%',
    padding: '0 20px',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
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
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  priceList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  priceCard: {
    backgroundColor: '#444',
    color: '#FFF',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    textAlign: 'left',
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
  priceTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    borderBottom: '2px solid #FFD700',
    paddingBottom: '5px',
  },
  priceDetails: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    fontSize: '1rem',
    lineHeight: '1.8',
  },
};

export default Pricing;
