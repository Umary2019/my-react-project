import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import './RegisterForm.css';

export default function RegisterForm({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role';
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
      // Register user
      const result = register({
        fullName: formData.fullName.trim(),
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role
      });
      
      if (result.success) {
        showSuccessAlert(`Registration successful! Welcome to EventFlow, ${formData.fullName}!`);
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          role: ""
        });
        setErrors({});
        
        // Close modal and navigate to dashboard
        if (onClose) onClose();
        navigate('/dashboard/overview');
      } else {
        showErrorAlert(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      showErrorAlert("An unexpected error occurred. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchToLogin = () => {
    if (onClose) onClose();
    window.dispatchEvent(new CustomEvent('switchToLogin'));
  };

  return (
    <div className="register-modal-overlay" onClick={onClose}>
      <div className="register-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="register-card">
          <div className="register-header">
            <h2 className="register-title">Join EventFlow</h2>
            <p className="register-subtitle">Create your account to get started</p>
            <button 
              className="register-close-btn" 
              onClick={onClose}
              disabled={loading}
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input 
                name="fullName" 
                placeholder="Full Name" 
                value={formData.fullName} 
                onChange={handleChange}
                disabled={loading}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
            
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
            
            <div className="form-group">
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={formData.confirmPassword} 
                onChange={handleChange}
                disabled={loading}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            
            <div className="form-group">
              <input 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange}
                disabled={loading}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            
            <div className="form-group">
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange}
                disabled={loading}
                className={errors.role ? 'error' : ''}
              >
                <option value="">Select Your Role</option>
                <option value="developer">Developer</option>
                <option value="founder">Founder</option>
                <option value="investor">Investor</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="other">Other</option>
              </select>
              {errors.role && <span className="error-message">{errors.role}</span>}
            </div>

            <button 
              type="submit" 
              className="register-submit-btn"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            
            <div className="register-switch">
              <p>Already have an account? 
                <button 
                  type="button" 
                  className="switch-to-login-btn"
                  onClick={handleSwitchToLogin}
                  disabled={loading}
                >
                  Login here
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}