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

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Taxikules</h1>

      {/* Burger icon */}
      <button style={styles.burgerButton} onClick={toggleMenu}>
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
        <span style={styles.burgerLine}></span>
      </button>

      {/* Navigation menu */}
      <nav
        style={{
          ...styles.nav,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              style={styles.navLink}
            >
              Home
            </ScrollLink>
          </li>
          <li style={styles.navItem}>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              style={styles.navLink}
            >
              Services
            </ScrollLink>
          </li>
          <li style={styles.navItem}>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              style={styles.navLink}
            >
              About
            </ScrollLink>
          </li>
          <li style={styles.navItem}>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              style={styles.navLink}
            >
              Pricing
            </ScrollLink>
          </li>
          <li style={styles.navItem}>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              style={styles.navLink}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
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
    maxWidth: '100vw',  // Prevents it from exceeding the viewport width
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
    padding: '5px',
    marginRight: '25px', // Add margin to move the button inward
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
    height: '100vh',
    width: '250px',
    maxWidth: '100vw', // Prevents from exceeding viewport
    backgroundColor: '#222',
    padding: '20px',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1001,
    overflowX: 'hidden', // Prevents unintended horizontal scroll
  },
  
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  navItem: {
    textAlign: 'center',
  },
  navLink: {
    color: '#FFD700',
    textDecoration: 'none',
    fontSize: '1.2rem',
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
