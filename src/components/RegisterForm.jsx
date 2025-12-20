import { useState } from "react";
import './RegisterForm.css';

export default function RegisterForm({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: ""
  });

  const [errors, setErrors] = useState({});

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
    }
    
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Simulate registration success
    alert(`Registration successful! Welcome to EventFlow, ${formData.fullName}!`);
    
    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      role: ""
    });
    setErrors({});
    
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="register-modal-overlay" onClick={onClose}>
      <div className="register-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="register-card">
          <div className="register-header">
            <h2 className="register-title">Join EventFlow</h2>
            <p className="register-subtitle">Create your account to get started</p>
            <button className="register-close-btn" onClick={onClose}>×</button>
          </div>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input 
                name="fullName" 
                placeholder="Full Name" 
                value={formData.fullName} 
                onChange={handleChange}
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
            
            <div className="form-group">
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={formData.confirmPassword} 
                onChange={handleChange}
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
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            
            {/* Role Selection Field */}
            <div className="form-group">
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange}
                className={errors.role ? 'error' : ''}
                required
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

            <button type="submit" className="register-submit-btn">
              Create Account
            </button>
            
            <div className="register-switch">
              <p>Already have an account? 
                <button 
                  type="button" 
                  className="switch-to-login-btn"
                  onClick={onSwitchToLogin}
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