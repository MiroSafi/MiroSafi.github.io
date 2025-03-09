import React, { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const CookieBanner = () => {
  useEffect(() => {
    // Check if consent has been given, then load Google Tag Manager
    if (getCookieConsentValue("cookieConsent") === "true") {
      loadGoogleTagManager();
    }
  }, []);

  const loadGoogleTagManager = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MH75LJKT";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      enableDeclineButton
      cookieName="cookieConsent"
      style={styles.banner}
      buttonStyle={styles.acceptButton}
      declineButtonStyle={styles.declineButton}
      expires={150} // Cookie will expire in 150 days
      onAccept={() => {
        loadGoogleTagManager();
      }}
    >
      <p style={styles.text}>
        Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.{" "}
        <a href="/cookies" style={styles.link}>Mehr erfahren</a>
      </p>
    </CookieConsent>
  );
};

const styles = {
  banner: {
    background: "#222",
    color: "#FFD700",
    textAlign: "center",
    fontSize: "14px",
    padding: "15px",
  },
  text: {
    margin: 0,
  },
  acceptButton: {
    background: "#FFD700",
    color: "#000",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  declineButton: {
    background: "#555",
    color: "#FFD700",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  link: {
    color: "#FFD700",
    textDecoration: "underline",
  },
};

export default CookieBanner;
