import React from "react";

const Cookies = () => {
  return (
    <section style={styles.overlay}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Datenschutzerklärung</h2>
        <p>Hier erklären wir, welche Cookies wir verwenden...</p>
        <h3>Welche Cookies setzen wir?</h3>
        <ul style={styles.list}>
          <li>✔ Essenzielle Cookies (notwendig für die Website-Funktionalität)</li>
          {/* <li>✔ Analyse-Cookies (z.B. Google Analytics)</li>
          <li>✔ Marketing-Cookies (z.B. Facebook Pixel)</li> */}
        </ul>
      </div>
    </section>
  );
};

const styles = {
  overlay: {
    // position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  container: {
    backgroundColor: "#FFD700", // Yellow bubble
    color: "#000",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    maxWidth: "600px",
    width: "90%",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "15px",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
  },
};

export default Cookies;
