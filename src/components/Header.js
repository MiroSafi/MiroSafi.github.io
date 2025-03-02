import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom"; // Import React Router Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { section: "services", label: "Dienstleistungen" },
    { section: "contact", label: "Kontakt" },
    { section: "about", label: "Über uns" },
    { section: "pricing", label: "Preise" },
  ];

  return (
    <header style={styles.header}>
      {/* Make "Taxikules" a clickable link to the homepage */}
      <h1 style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          Taxikules
        </Link>
      </h1>

      {/* Burger Button */}
      <button
        style={styles.burgerButton}
        onClick={toggleMenu}
        aria-label="Menü öffnen"
      >
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
      </button>

      {/* Navigation Menu */}
      <nav
        style={{
          ...styles.nav,
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <ul style={styles.navList}>
          {menuItems.map(({ section, label }) => (
            // <li key={section} style={styles.navItem}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                style={styles.navLink}
              >
                {label}
              </ScrollLink>
            // </li>
          ))}
        </ul>
      </nav>

      {/* Overlay to Close Menu */}
      {isMenuOpen && <div style={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1a1a1a",
    color: "#FFD700",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    maxWidth: "100vw",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },

  logo: {
    fontSize: "24px",
    margin: 0,
  },

  logoLink: {
    textDecoration: "none",
    color: "#FFD700",
  },

  burgerButton: {
    background: "transparent",
    border: "none",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    padding: "10px",
    marginRight: "20px",
    zIndex: 1100,
  },

  burgerLine: {
    width: "30px",
    height: "4px",
    backgroundColor: "#FFD700",
    borderRadius: "2px",
  },

  nav: {
    position: "fixed",
    top: "50px",
    right: "20px",
    height: "auto",
    backgroundColor: "#222",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 1001,
  },

  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },

  navItem: {
    textAlign: "center",
    width: "100%",
  },

  navLink: {
    color: "#FFD700",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

export default Header;
