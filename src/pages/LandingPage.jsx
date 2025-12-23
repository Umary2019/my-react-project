import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard/overview');
    }
  }, [isAuthenticated, navigate]);

  // Handle event listeners for switching between modals
  useEffect(() => {
    const handleSwitchToRegister = () => {
      setShowLogin(false);
      setShowRegister(true);
    };

    const handleSwitchToLogin = () => {
      setShowRegister(false);
      setShowLogin(true);
    };

    window.addEventListener('switchToRegister', handleSwitchToRegister);
    window.addEventListener('switchToLogin', handleSwitchToLogin);

    return () => {
      window.removeEventListener('switchToRegister', handleSwitchToRegister);
      window.removeEventListener('switchToLogin', handleSwitchToLogin);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/dashboard/overview' },
    { name: 'Events', path: '#events' },
    { name: 'Speakers', path: '#speakers' },
    { name: 'Sponsors', path: '#sponsors' },
    { name: 'Partners', path: '#partners' },
    { name: 'Tickets', path: '#tickets' }
  ];
  
  const eventDetails = [
    {
      icon: 'far fa-calendar-alt',
      text: 'Today, 2025',
      subtext: 'Date'
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Gombe State University',
      subtext: 'Location'
    },
    {
      icon: 'fas fa-users',
      text: '5k+ Attendees',
      subtext: 'Participants'
    }
  ];

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setShowLogin(true);
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    setShowRegister(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    
    if (path.startsWith('/')) {
      // If trying to access dashboard without login, show login modal
      if (!isAuthenticated) {
        setShowLogin(true);
      } else {
        navigate(path);
      }
    } else if (path.startsWith('#')) {
      const targetElement = document.querySelector(path);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  // Don't show landing page if authenticated
  if (isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="landing-page">
      {/* Header & Navigation */}
      <header>
        <div className="container header-container">
          <a href="#" className="logo">GDG Gombe</a>
          
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    onClick={(e) => handleNavClick(e, item.path)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="nav-buttons">
            <button 
              className="btn-login" 
              onClick={handleLogin}
            >
              Login
            </button>
            <button 
              className="btn-primary" 
              onClick={handleRegister}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="badge">
            <i className="fas fa-bolt"></i> Landing Page 2025
          </div>
          
          <h1>GDG Academy Gombe</h1>
          
          <p>
            Join 5,000+ developers, founders, and investors for three days of radical innovation. 
            Discover the next generation of AI, Web3, and Cloud computing.
          </p>
          
          <div className="event-details">
            {eventDetails.map((detail, index) => (
              <div className="detail-item" key={index}>
                <div className="detail-icon">
                  <i className={detail.icon}></i>
                </div>
                <div className="detail-text">{detail.text}</div>
                <div className="detail-subtext">{detail.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Login Form Modal */}
      {showLogin && (
        <LoginForm onClose={handleCloseLogin} />
      )}

      {/* Register Form Modal */}
      {showRegister && (
        <RegisterForm onClose={handleCloseRegister} />
      )}
    </div>
  );
};

export default LandingPage;