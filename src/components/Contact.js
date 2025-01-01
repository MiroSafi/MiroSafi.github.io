import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    abholadresse: '',
    zieladresse: '',
    termin: '',
    zeit: '',
    passagiere: '',
    message: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      telefon: formData.telefon,
      abholadresse: formData.abholadresse,
      zieladresse: formData.zieladresse,
      termin: formData.termin,
      zeit: formData.zeit,
      passagiere: formData.passagiere,
      message: formData.message,
    };

    emailjs
      .send(
        'service_qm7qwh2', // Replace with your EmailJS Service ID
        'template_41fhqfo', // Replace with your EmailJS Template ID
        templateParams,
        'bwPHfgFQTuUM__WLi' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={styles.contact}
    >
      <div
        style={{
          ...styles.overlay,
          ...(isVisible ? styles.visible : styles.hidden),
        }}
      >
        <h2 style={styles.heading}>Reservieren</h2>
        <p style={styles.subheading}>Einfach und unkompliziert!</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {formFields.map(({ id, type, placeholder, label, isTextArea, ...rest }) => (
            <div key={id} style={styles.formGroup}>
              <label htmlFor={id} style={styles.label}>{label}</label>
              {isTextArea ? (
                <textarea
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  style={styles.textarea}
                  {...rest}
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  style={styles.input}
                  {...rest}
                />
              )}
            </div>
          ))}
          <button type="submit" style={styles.submitButton}>Senden</button>
        </form>
      </div>
    </section>
  );
};

const formFields = [
  { id: 'name', type: 'text', placeholder: 'Ihr Name', label: 'Name' },
  { id: 'email', type: 'email', placeholder: 'Ihre Email', label: 'Email' },
  { id: 'telefon', type: 'tel', placeholder: 'Ihre Telefonnummer', label: 'Telefon' },
  { id: 'abholadresse', type: 'text', placeholder: 'Abholadresse', label: 'Abholadresse' },
  { id: 'zieladresse', type: 'text', placeholder: 'Zieladresse', label: 'Zieladresse' },
  { id: 'termin', type: 'date', placeholder: '', label: 'Termin' },
  { id: 'zeit', type: 'time', placeholder: '', label: 'Zeit' },
  { id: 'passagiere', type: 'number', placeholder: 'Anzahl der Passagiere', label: 'Passagiere', min: '1' },
  { id: 'message', isTextArea: true, placeholder: 'Ihre Nachricht', label: 'Nachricht' },
];

const styles = {
  contact: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
    color: '#FFD700',
    padding: '20px',
  },
  overlay: {
    position: 'relative',
    maxWidth: '500px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#282828',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
    fontSize: '2rem',
    margin: '0 0 10px 0',
  },
  subheading: {
    fontSize: '1rem',
    marginBottom: '15px',
    color: '#aaa',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '0.9rem',
    color: '#ccc',
  },
  input: {
    padding: '8px',
    fontSize: '0.9rem',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#444',
    color: '#FFF',
  },
  textarea: {
    padding: '8px',
    fontSize: '0.9rem',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#444',
    color: '#FFF',
    resize: 'vertical',
    minHeight: '80px',
  },
  submitButton: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};

export default Contact;
