import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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
            setIsVisible(false);
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
    window.open('https://wa.me/+4915259090110', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+4956143083015';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:taxikules@gmail.com';
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/taxikassel_taxikules?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  };
  

  return (
    <section id="hero" ref={sectionRef} style={styles.hero}>
      {/* Video Background */}
      <div style={styles.videoContainer}>
        <video autoPlay loop muted playsInline preload="auto" style={styles.video}>
          <source src="/videos/bg_video01_formatted.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.overlay}></div> {/* Dark Overlay */}
      </div>

      {/* Centralized Content */}
      <div style={{ ...styles.content, ...(isVisible ? styles.visible : styles.hidden) }}>
        <h2 style={styles.heading}>Taxikules</h2>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button id="whatsapp-button" style={{ ...styles.button, backgroundColor: '#25D366' }} onClick={handleWhatsAppClick}>
            <FontAwesomeIcon icon={faWhatsapp} style={styles.iconStyle} />
            WhatsApp
          </button>
          <button id="tel-button" style={{ ...styles.button, backgroundColor: '#FFD700' }} onClick={handleCallClick}>
            <FontAwesomeIcon icon={faPhone} style={styles.iconStyle} />
            056143083015
          </button>
          <button id="email-button" style={{ ...styles.button, backgroundColor: '#FFD700' }} onClick={handleEmailClick}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.iconStyle} />
            Email
          </button>
          <button id="insta-button" style={{ ...styles.button, backgroundColor: '#FFD700' }} onClick={handleInstagramClick}>
            <FontAwesomeIcon icon={faInstagram} style={styles.iconStyle} />
            Instagram
          </button>
        </div>

        {/* Legend */}
        <p style={styles.legend}>Pünktlich. Zuverlässig. Kassel, Vienna, Frankfurt am Main, Hamburg, Berlin.</p>
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
    width: '100%',
    maxWidth: '100vw',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2, // Send video behind content
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Darken the background
    zIndex: -1, // Place above video, but below content
  },
  content: {
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
  heading: {
    fontSize: '4rem',
    margin: '10px 0 15px',
    fontWeight: 'bold',
    color: '#FFD700',
    textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px  2px 0 black, 2px  2px 0 black',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.7rem',
    border: 'none',
    borderRadius: '5px',
    color: '#000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  iconStyle: {
    fontSize: '2.2rem',
  },
  legend: {
    fontSize: '2rem',
    marginTop: '10px',
    color: '#FFD700',
    textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px  2px 0 black, 2px  2px 0 black',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
  },
};

export default Hero;
