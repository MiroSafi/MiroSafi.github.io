import React from 'react';
import Header from './Header'; // Import Header component
import Button from './Button'; // Import Button component
import whatsappIcon from './icons/whatsapp.png';
import phoneIcon from './icons/phone.png';
import emailIcon from './icons/email.png';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/491234567890', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+491234567890';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@taxicules.de';
  };

  return (
    <section style={styles.hero}>
      {/* Header */}
      <Header />

      {/* Background video */}
      <video autoPlay loop muted style={styles.video}>
        <source src="/videos/bg_video01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centralized Content */}
      <div style={styles.overlay}>
        {/* Icon */}
        <div style={styles.icon}>
          <img src="/icons/logo.jpeg" alt="Taxi Icon" style={styles.iconImage} />
        </div>

        {/* Heading */}
        <h2 style={styles.heading}>Taxikules</h2>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <Button
            icon={whatsappIcon}
            title="WhatsApp"
            onClick={handleWhatsAppClick}
            backgroundColor="#25D366"
            textColor="#000"
          />
          <Button
            icon={phoneIcon}
            title="056143083015"
            onClick={handleCallClick}
            backgroundColor="#FFD700"
            textColor="#000"
          />
          <Button
            icon={emailIcon}
            title="Email"
            onClick={handleEmailClick}
            backgroundColor="#FFD700"
            textColor="#000"
          />
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
