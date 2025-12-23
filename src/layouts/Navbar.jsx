import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div style={{
        background: '#4285f4',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
        position: 'relative'
      }}>
        {isAuthenticated ? (
          <>
            <span>Welcome, {user?.fullName || user?.email}!</span>
            
            {/* Add a link back to landing page */}
            <Link 
              to="/" 
              style={{
                position: 'absolute',
                right: '180px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                background: 'rgba(255,255,255,0.2)',
                padding: '5px 15px',
                borderRadius: '4px'
              }}
            >
              ← Back to Event
            </Link>
            
            {/* Logout button */}
            <button 
              onClick={handleLogout}
              style={{
                position: 'absolute',
                right: '20px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                background: 'rgba(255,255,255,0.2)',
                padding: '5px 15px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            Try out the new dashboard! Please login or register.
            
            {/* Login button to dashboard navbar */}
            <button 
              onClick={handleLogin}
              style={{
                position: 'absolute',
                right: '100px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                background: 'rgba(255,255,255,0.2)',
                padding: '5px 15px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
            
            {/* Register button to dashboard navbar */}
            <button 
              onClick={handleRegister}
              style={{
                position: 'absolute',
                right: '20px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                background: 'rgba(255,255,255,0.3)',
                padding: '5px 15px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Register
            </button>
          </>
        )}
      </div>

      {/* Login Form Modal */}
      {showLogin && (
        <LoginForm onClose={handleCloseLogin} />
      )}

      {/* Register Form Modal */}
      {showRegister && (
        <RegisterForm onClose={handleCloseRegister} />
      )}
    </>
  );
};

export default Navbar;