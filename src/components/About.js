import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const headerRef = useRef(null);
  const bubbleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset visibility when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (headerRef.current && bubbleRef.current) {
      observer.observe(headerRef.current);
      observer.observe(bubbleRef.current);
    }

    return () => {
      if (headerRef.current && bubbleRef.current) {
        observer.unobserve(headerRef.current);
        observer.unobserve(bubbleRef.current);
      }
    };
  }, []);

  return (
    <section id="about" style={styles.about}>
      <div
        ref={headerRef}
        style={{
          ...styles.header,
          ...(isVisible ? styles.headerVisible : styles.headerHidden),
        }}
      >
        <h2>Über Uns</h2>
      </div>
      <div
        ref={bubbleRef}
        style={{
          ...styles.bubble,
          ...(isVisible ? styles.bubbleVisible : styles.bubbleHidden),
        }}
      >
        <p>
          <strong>Willkommen bei Taxicules – Ihrem verlässlichen Partner für jede Fahrt!</strong>
        </p>
        <p>
          Bei uns stehen <strong>Pünktlichkeit</strong>, <strong>Zuverlässigkeit</strong> und{' '}
          <strong>Professionalität</strong> an erster Stelle. Mit jahrelanger{' '}
          <strong>Erfahrung</strong> in der Personenbeförderung sorgen wir dafür, dass Sie sicher,
          komfortabel und rechtzeitig Ihr Ziel erreichen.
        </p>
        <p>
          Besonders wichtig ist uns ein engagiertes und zufriedenes Team Ihnen zur Verfügung zu stellen. <strong>
          Und das Europa weit!</strong>
        </p>
        <p>
          Entscheiden Sie sich für Taxicules und erleben Sie einen Service, der durch Qualität und
          Kundenorientierung überzeugt.
        </p>
      </div>
    </section>
  );
};

const styles = {
  about: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '50px 20px',
    minHeight: '100vh',
    backgroundColor: '#222',
  },
  header: {
    flex: 1,
    color: '#FFD700',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
  bubble: {
    flex: 2,
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '30px',
    borderRadius: '20px',
    maxWidth: '600px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'left',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  },
  headerHidden: {
    opacity: 0,
    transform: 'translateX(-50px)',
  },
  headerVisible: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  bubbleHidden: {
    opacity: 0,
    transform: 'translateX(50px)',
  },
  bubbleVisible: {
    opacity: 1,
    transform: 'translateX(0)',
  },
};

export default About;
