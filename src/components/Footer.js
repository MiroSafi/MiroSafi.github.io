import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>Adresse</h4>
          <p style={styles.text}>Am bettenhäuser Bahnhof 5, 34123 Kassel</p>
        </div>
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>Telefon</h4>
          <p style={styles.text}>+49 561 43083015</p>
        </div>
        <div style={styles.infoBlock}>
          <h4 style={styles.title}>E-Mail</h4>
          <p style={styles.text}>taxikules@gmail.com</p>
        </div>
      </div>
      
      {/* Impressum Link */}
      <div style={styles.impressumLink}>
        <Link to="/impressum" style={styles.navLink}>Impressum</Link>
      </div>

      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Taxikules. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#FFD700",
    padding: "20px 0",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0 10px",
  },
  infoBlock: {
    margin: "10px",
    textAlign: "center",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  text: {
    fontSize: "1rem",
    margin: "0",
  },
  impressumLink: {
    marginTop: "10px",
  },
  navLink: {
    color: "#FFD700",
    textDecoration: "none",
    fontSize: "1rem",
  },
  copyright: {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "#bbb",
  },
};

export default Footer;
