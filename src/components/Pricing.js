import React from 'react';

const Pricing = () => {
  return (
    <section style={styles.pricing}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>Unsere Tarife in Kassel</h2>
        <p style={styles.subheading}>Transparente Preise für alle Dienstleistungen.</p>

        <div style={styles.priceList}>
          {/* Tarif Kassel */}
          <div style={styles.priceCard}>
            <h3 style={styles.priceTitle}>Tarif Kassel</h3>
            <ul style={styles.priceDetails}>
              <li>Grundgebühr: <strong>4.00€</strong></li>
              <li>Kilometerpreis: <strong>2.10€</strong></li>
              <li>Wartezeit: <strong>36.00€ / 1h</strong></li>
              <li>Zuschlag Großraumtaxi: <strong>6.00€</strong></li>
            </ul>
          </div>

          {/* Tarif ausserhalb Kassel */}
          <div style={styles.priceCard}>
            <h3 style={styles.priceTitle}>Tarif außerhalb Kassel</h3>
            <ul style={styles.priceDetails}>
              <li>Bis zu <strong>20% Rabatt</strong></li>
            </ul>
          </div>

          {/* Krankenfahrten */}
          <div style={styles.priceCard}>
            <h3 style={styles.priceTitle}>Krankenfahrten</h3>
            <ul style={styles.priceDetails}>
              <li>Komplette Kostenübernahme bei Genehmigung</li>
            </ul>
          </div>

          {/* Flughafentransfers */}
          <div style={styles.priceCard}>
            <h3 style={styles.priceTitle}>Flughafentransfers</h3>
            <ul style={styles.priceDetails}>
              <li>Feste Preise auf Anfrage</li>
              <li>24/7 Verfügbarkeit</li>
            </ul>
          </div>

          {/* Nachtzuschlag */}
          <div style={styles.priceCard}>
            <h3 style={styles.priceTitle}>Nachtzuschlag</h3>
            <ul style={styles.priceDetails}>
              <li>Zusätzliche Gebühr: <strong>10%</strong> von 22:00 bis 6:00</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles for the Pricing component
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
