import { useState } from "react";
import './LoginForm.css';

export default function LoginForm({ onClose, onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Simulate login success
    alert(`Login successful! Welcome back!`);
    
    // Reset form and close modal
    setFormData({
      email: "",
      password: "",
    });
    setErrors({});
    
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-card">
          <div className="login-header">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Please login to your account</p>
            <button 
              className="login-close-btn" 
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
            
            <div className="login-switch">
              <p>Don't have an account? 
                <button 
                  type="button" 
                  className="switch-to-register-btn"
                  onClick={onSwitchToRegister}
                >
                  Create Account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}