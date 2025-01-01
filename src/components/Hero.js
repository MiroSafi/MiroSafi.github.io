import React, { useEffect, useRef, useState } from 'react';
import Header from './Header'; // Import Header component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome component
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const Hero = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset visibility for repeat animations
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+491234567890', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+491234567890';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:taxikules@gmail.com';
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={styles.hero}
    >
      {/* Header */}
      <Header />

      {/* Background video */}
      <video autoPlay loop muted style={styles.video}>
        <source src="/videos/bg_video01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centralized Content */}
      <div
        style={{
          ...styles.overlay,
          ...(isVisible ? styles.visible : styles.hidden),
        }}
      >
        {/* Icon */}
        <div style={styles.icon}>
          <img src="/icons/logo.jpeg" alt="Taxi Icon" style={styles.iconImage} />
        </div>

        {/* Heading */}
        <h2 style={styles.heading}>Taxikules</h2>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, backgroundColor: '#25D366' }} onClick={handleWhatsAppClick}>
            <FontAwesomeIcon icon={faWhatsapp} style={styles.iconStyle} />
            WhatsApp
          </button>
          <button id='tel-button' style={{ ...styles.button, backgroundColor: '#FFD700' }} onClick={handleCallClick}>
            <FontAwesomeIcon icon={faPhone} style={styles.iconStyle} />
            056143083015
          </button>
          <button style={{ ...styles.button, backgroundColor: '#FFD700' }} onClick={handleEmailClick}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} />
            Email
          </button>
        </div>

        {/* Legend */}
        <p style={styles.legend}>
          Pünktlich. Zuverlässig. Kassel, Vienna, Frankfurt am Main, Hamburg, Berlin.
        </p>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
    opacity: 0.8,
  },
  overlay: {
    position: 'relative',
    color: '#FFF',
    zIndex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
  hidden: {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  icon: {
    marginBottom: '15px',
  },
  iconImage: {
    width: '60px',
    height: '60px',
  },
  heading: {
    fontSize: '2rem',
    margin: '10px 0 15px',
    fontWeight: 'bold',
    fontFamily: "'Roboto', sans-serif",
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    color: '#000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  iconStyle: {
    fontSize: '1.2rem',
  },
  legend: {
    fontSize: '1rem',
    marginTop: '10px',
    color: '#FFD700',
    fontStyle: 'italic',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
  },
};

export default Hero;
