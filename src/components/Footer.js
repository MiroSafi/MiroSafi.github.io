import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Address */}
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>Adresse</h4>
          <p style={styles.text}>Am bettenhäuser Bahnhof 5, 34123 Kassel</p>
        </div>

        {/* Telephone */}
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>Telefon</h4>
          <p style={styles.text}>+49 561 43083015</p>
        </div>

        {/* Email */}
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>E-Mail</h4>
          <p style={styles.text}>taxikules@gmail.com</p>
        </div>
      </div>
      {/* Copyright */}
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Taxikules. Alle Rechte vorbehalten.
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
    // fontFamily: "'Open Sans', sans-serif",
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
