import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      enableDeclineButton
      cookieName="taxikulesCookieConsent"
      style={{ background: "#222", color: "#FFD700" }}
      buttonStyle={{ background: "#FFD700", color: "#000", fontSize: "14px" }}
      declineButtonStyle={{ background: "#444", color: "#FFD700", fontSize: "14px" }}
    >
      Wir verwenden Cookies, um die Benutzererfahrung zu verbessern. <a href="/datenschutz" style={{ color: "#FFD700" }}>Mehr erfahren</a>.
    </CookieConsent>
  );
};

export default CookieBanner;
