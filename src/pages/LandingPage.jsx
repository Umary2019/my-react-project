import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
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
      text: 'Oct 12-14, 2025',
      subtext: 'Date'
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'San Francisco & Online',
      subtext: 'Location'
    },
    {
      icon: 'fas fa-users',
      text: '10k+ Attendees',
      subtext: 'Participants'
    }
  ];

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    console.log('Opening login modal');
    setShowLogin(true);
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    console.log('Opening register modal');
    setShowRegister(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    
    if (path.startsWith('/')) {
      navigate(path);
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

  return (
    <div className="landing-page">
      {/* Header & Navigation */}
      <header>
        <div className="container header-container">
          <a href="#" className="logo">EventFlow</a>
          
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
            <i className="fas fa-bolt"></i> TECH SUMMIT 2025 - EARLY BIRD LIVE
          </div>
          
          <h1>Design the Future of Tech</h1>
          
          <p>
            Join 10,000+ developers, founders, and investors for three days of radical innovation. 
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
      
      {/* Sections for anchor links */}
      <section id="events" style={{ padding: '50px 0', minHeight: '100px' }}>
        <div className="container">
          <h2>Events Section</h2>
          <p>This is the events section content.</p>
        </div>
      </section>
      
      <section id="speakers" style={{ padding: '50px 0', minHeight: '100px' }}>
        <div className="container">
          <h2>Speakers Section</h2>
          <p>This is the speakers section content.</p>
        </div>
      </section>
      
      <section id="sponsors" style={{ padding: '50px 0', minHeight: '100px' }}>
        <div className="container">
          <h2>Sponsors Section</h2>
          <p>This is the sponsors section content.</p>
        </div>
      </section>
      
      <section id="partners" style={{ padding: '50px 0', minHeight: '100px' }}>
        <div className="container">
          <h2>Partners Section</h2>
          <p>This is the partners section content.</p>
        </div>
      </section>
      
      <section id="tickets" style={{ padding: '50px 0', minHeight: '100px' }}>
        <div className="container">
          <h2>Tickets Section</h2>
          <p>This is the tickets section content.</p>
        </div>
      </section>

      {/* Login Form Modal */}
      {showLogin && (
        <LoginForm 
          onClose={handleCloseLogin} 
          onSwitchToRegister={switchToRegister}
        />
      )}

      {/* Register Form Modal */}
      {showRegister && (
        <RegisterForm 
          onClose={handleCloseRegister} 
          onSwitchToLogin={switchToLogin}
        />
      )}
    </div>
  );
};

export default LandingPage;