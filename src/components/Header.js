import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Mapping of section names (English) to their German labels
  const menuItems = [
    // { section: 'hero', label: 'Startseite' },
    { section: 'services', label: 'Dienstleistungen' },
    { section: 'contact', label: 'Kontakt' },
    { section: 'about', label: 'Über uns' },
    { section: 'pricing', label: 'Preise' },
  ];

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Taxikules</h1>

      {/* Burger Menu Button */}
      <button style={styles.burgerButton} onClick={toggleMenu} aria-label="Menü öffnen">
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
      </button>

      {/* Navigation Menu */}
      <nav
        style={{
          ...styles.nav,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <ul style={styles.navList}>
          {menuItems.map(({ section, label }) => (
            <li key={section} style={styles.navItem}>
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
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for closing menu */}
      {isMenuOpen && <div style={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#1a1a1a',
    color: '#FFD700',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    maxWidth: '100vw',
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },

  logo: {
    fontSize: '24px',
  },

  burgerButton: {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '10px',
    marginRight: '20px',
    zIndex: 1100,
  },

  burgerLine: {
    width: '30px',
    height: '4px',
    backgroundColor: '#FFD700',
    borderRadius: '2px',
  },

  nav: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: 'auto',
    minHeight: '50vh',
    width: 'auto',
    minWidth: '160px',
    backgroundColor: '#222',
    padding: '20px',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1001,
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px 0 0 8px',
  },

  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },

  navItem: {
    textAlign: 'center',
    width: '100%',
    // padding: '5px 0',
  },

  navLink: {
    color: '#FFD700',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background 0.3s',
    // paddingTop  : '10px',
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

export default Header;
