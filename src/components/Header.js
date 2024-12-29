import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu on or off
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Taxicules</h1>
      
      {/* Burger icon */}
      <button style={styles.burgerButton} onClick={toggleMenu}>
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
      </button>

      {/* Navigation menu (only visible when isMenuOpen is true) */}
      <nav style={{ ...styles.nav, display: isMenuOpen ? 'block' : 'none' }}>
        <ul style={styles.navList}>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
    color: '#FFD700', // Golden color for text
    width: '100%', // Full width
    position: 'absolute', // Positioned above the video
    top: '0',
    left: '0',
    zIndex: 2, // Ensure it stays above the video
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Optional shadow
  },
  logo: { fontSize: '24px' },
  burgerButton: {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '5px',
  },
  burgerLine: {
    width: '30px',
    height: '4px',
    backgroundColor: '#FFD700',
    borderRadius: '2px',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  navList: {
    display: 'flex',
    gap: '15px',
    padding: 0,
    margin: 0,
  },
  navLink: {
    color: '#FFD700',
    textDecoration: 'none',
  },
};

export default Header;
