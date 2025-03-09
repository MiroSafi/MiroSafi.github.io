import React from "react";

const Cookies = () => {
  return (
    <section style={styles.container}>
      <h2>Datenschutzerklärung</h2>
      <p>Hier erklären wir, welche Cookies wir verwenden...</p>
      <h3>Welche Cookies setzen wir?</h3>
      <ul>
        <li>Essenzielle Cookies (notwendig für die Website-Funktionalität)</li>
        <li>Analyse-Cookies (z.B. Google Analytics)</li>
        <li>Marketing-Cookies (z.B. Facebook Pixel)</li>
      </ul>
    </section>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#FFD700",
    color: "#000",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
  },
};

export default Cookies;
