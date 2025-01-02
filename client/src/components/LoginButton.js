import React, { useState } from "react";
import "./LoginButton.css";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogin = () => {
    // Implement actual authentication logic here
    setIsLoggedIn(true);
    setShowMenu(false);
  };

  const handleLogout = () => {
    // Implement logout logic (e.g., clearing tokens)
    setIsLoggedIn(false);
    setShowMenu(false);
  };

  return (
    <div className="login-button-container">
      {isLoggedIn ? (
        <div className="dropdown">
          <button
            className="login-button"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            Profile
          </button>
          {showMenu && (
            <ul className="dropdown-menu">
              <li>My Account</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
