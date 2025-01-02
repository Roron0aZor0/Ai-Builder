import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CTAButton } from './CTA-button';
import '../styles/Navbar-css.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        setIsAuthenticated(true);
        setSuccess('Login successful!');
        setError('');
        localStorage.setItem('token', data.token);
        setShowLoginModal(false);
      } else {
        setError(data.message || 'Login failed!');
      }
    } catch (err) {
      setError('An error occurred while logging in.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyApp</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/how-it-works">How It Works</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="d-flex">
            {!isAuthenticated ? (
              <>
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </button>
                <CTAButton to="#" text="Get Started" />
              </>
            ) : (
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={() => setShowLoginModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
