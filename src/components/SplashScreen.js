import React, { useState, useEffect } from "react";
import "./SplashScreen.css";
import logo from "../assets/logo.png"; // Import your logo image

const SplashScreen = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 300); // Small delay before animation starts
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      <img 
        src={logo} 
        alt="Logo" 
        className={`splash-logo ${showLogo ? "fade-in" : ""}`}
      />
    </div>
  );
};

export default SplashScreen;