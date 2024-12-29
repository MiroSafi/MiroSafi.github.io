import React, { useState } from 'react';

const Contact = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you can handle form submission (e.g., send data to a server or API)
  };

  return (
    <section style={styles.contact}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>Reservieren</h2>
        <p style={styles.subheading}>Einfach und unkompliziert!</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ihre Email"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="telefon" style={styles.label}>Telefon</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              placeholder="Ihre Telefonnummer"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="abholadresse" style={styles.label}>Abholadresse</label>
            <input
              type="text"
              id="abholadresse"
              name="abholadresse"
              value={formData.abholadresse}
              onChange={handleChange}
              placeholder="Abholadresse"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="zieladresse" style={styles.label}>Zieladresse</label>
            <input
              type="text"
              id="zieladresse"
              name="zieladresse"
              value={formData.zieladresse}
              onChange={handleChange}
              placeholder="Zieladresse"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="termin" style={styles.label}>Termin</label>
            <input
              type="date"
              id="termin"
              name="termin"
              value={formData.termin}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="zeit" style={styles.label}>Zeit</label>
            <input
              type="time"
              id="zeit"
              name="zeit"
              value={formData.zeit}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="passagiere" style={styles.label}>Passagiere</label>
            <input
              type="number"
              id="passagiere"
              name="passagiere"
              value={formData.passagiere}
              onChange={handleChange}
              placeholder="Anzahl der Passagiere"
              style={styles.input}
              min="1"
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Nachricht</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ihre Nachricht"
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.submitButton}>Senden</button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#FFD700',
  },
  overlay: {
    position: 'relative',
    padding: '0 20px',
  },
  heading: {
    fontSize: '3rem',
    margin: '0',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '10px',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#333',
    color: '#fff',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#333',
    color: '#fff',
    resize: 'vertical',
    minHeight: '100px',
  },
  submitButton: {
    padding: '12px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#000',
    fontWeight: 'bold',
  },
};

export default Contact;
