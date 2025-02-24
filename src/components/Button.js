import React from 'react';

const Button = ({ icon, title, backgroundColor, textColor, onClick }) => {
  return (
    <button 
      style={{ 
        ...styles.button, 
        backgroundColor: backgroundColor || '#FFD700', 
        color: textColor || '#000' 
      }} 
      onClick={onClick}
    >
      {/* Icon */}
      <img src={icon} alt={title} style={styles.icon} />
      {/* Title */}
      <span style={styles.title}>{title}</span>
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 40px',  // Larger padding to make the button bigger
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.25rem',  // Increased font size
    fontWeight: 'bold',  // Bold font
    transition: 'background-color 0.3s ease',  // Smooth transition effect
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Subtle shadow for depth
  },
  icon: {
    width: '24px',  // Icon size
    height: '24px',
    marginRight: '10px',  // Space between icon and text
  },
  title: {
    // fontFamily: "'Roboto', sans-serif" !important,  // Use a more robust, modern font
    // fontWeight: 'bold',
  },
};

export default Button;
