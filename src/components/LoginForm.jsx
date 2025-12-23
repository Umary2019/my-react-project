import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import './LoginForm.css';

export default function LoginForm({ onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const showErrorAlert = (message) => {
    alert(`❌ ${message}`);
  };

  const showSuccessAlert = (message) => {
    alert(`✅ ${message}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      // Show field validation errors as alert
      const errorMessages = Object.values(formErrors).join('\n');
      if (errorMessages) {
        showErrorAlert(errorMessages);
      }
      
      // Also set errors for field highlighting
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    try {
      // Attempt login
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        showSuccessAlert(`Welcome back, ${result.user.fullName || result.user.email}!`);
        
        // Reset form
        setFormData({ email: "", password: "" });
        setErrors({});
        
        // Close modal and navigate to dashboard
        if (onClose) onClose();
        navigate('/dashboard/overview');
      } else {
        // Show error as alert popup
        showErrorAlert(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      showErrorAlert("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchToRegister = () => {
    if (onClose) onClose();
    window.dispatchEvent(new CustomEvent('switchToRegister'));
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
              disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button 
              type="submit" 
              className="login-submit-btn"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
            
            <div className="login-switch">
              <p>Don't have an account? 
                <button 
                  type="button" 
                  className="switch-to-register-btn"
                  onClick={handleSwitchToRegister}
                  disabled={loading}
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