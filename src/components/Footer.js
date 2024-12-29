import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Address */}
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>Adresse</h4>
          <p style={styles.text}>Musterstraße 123, 12345 Musterstadt</p>
        </div>

        {/* Telephone */}
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>Telefon</h4>
          <p style={styles.text}>+49 170 1234567</p>
        </div>

        {/* Email */}
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>E-Mail</h4>
          <p style={styles.text}>info@taxicules.de</p>
        </div>
      </div>
      {/* Copyright */}
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Taxicules. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222', // Dark background
    color: '#FFD700', // Golden text
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: "'Open Sans', sans-serif",
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 10px',
  },
  infoBlock: {
    margin: '10px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  text: {
    fontSize: '1rem',
    margin: '0',
  },
  copyright: {
    marginTop: '10px',
    fontSize: '0.9rem',
    color: '#bbb',
  },
};

export default Footer;
