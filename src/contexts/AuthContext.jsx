import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize users array in localStorage if not exists
  const initializeUsersStorage = () => {
    if (!localStorage.getItem('registeredUsers')) {
      localStorage.setItem('registeredUsers', JSON.stringify([]));
    }
  };

  // Check if user is logged in on initial load
  useEffect(() => {
    // Initialize users storage
    initializeUsersStorage();
    
    // Check for old single user storage and migrate
    const oldUser = localStorage.getItem('user');
    if (oldUser) {
      try {
        const parsedUser = JSON.parse(oldUser);
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        
        // Check if user already exists in registeredUsers
        const userExists = existingUsers.some(u => u.email === parsedUser.email);
        
        if (!userExists) {
          // Add old user to registeredUsers
          existingUsers.push(parsedUser);
          localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
        }
        
        // Set as current user if it's the same as old user
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
          localStorage.setItem('currentUser', oldUser);
        }
        
        localStorage.removeItem('user'); // Clean up old storage
      } catch (error) {
        console.error('Error migrating old user data:', error);
        localStorage.removeItem('user');
      }
    }

    // Check for current logged in user
    const storedCurrentUser = localStorage.getItem('currentUser');
    if (storedCurrentUser) {
      try {
        const parsedUser = JSON.parse(storedCurrentUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('currentUser');
      }
    }
    
    setLoading(false);
  }, []);

  // Register function
  const register = (userData) => {
    try {
      // Get all registered users
      const storedUsers = localStorage.getItem('registeredUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === userData.email);
      if (existingUser) {
        return { success: false, message: 'User with this email already exists. Please login instead.' };
      }

      // Create new user object
      const newUser = {
        id: Date.now().toString(),
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password, // In real app, this should be hashed
        phone: userData.phone,
        role: userData.role,
        createdAt: new Date().toISOString()
      };
      
      // Add to registered users
      users.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      
      // Also set as current user (auto-login after registration)
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
      
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  };

  // Login function
  const login = (email, password) => {
    try {
      // Get all registered users
      const storedUsers = localStorage.getItem('registeredUsers');
      
      if (!storedUsers) {
        return { success: false, message: 'No users registered yet. Please register first.' };
      }

      const users = JSON.parse(storedUsers);
      
      // Find user by email
      const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (!foundUser) {
        return { success: false, message: 'No account found with this email. Please register first.' };
      }
      
      // Check password (in real app, this would compare hashed passwords)
      if (foundUser.password === password) {
        // Set as current user
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        setUser(foundUser);
        setIsAuthenticated(true);
        return { success: true, user: foundUser };
      } else {
        return { success: false, message: 'Invalid password. Please try again.' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('currentUser'); // Only remove current session
    setUser(null);
    setIsAuthenticated(false);
  };

  // Check if user exists
  const checkUserExists = (email) => {
    try {
      const storedUsers = localStorage.getItem('registeredUsers');
      if (!storedUsers) return false;
      
      const users = JSON.parse(storedUsers);
      return users.some(u => u.email.toLowerCase() === email.toLowerCase());
    } catch {
      return false;
    }
  };

  // Get all registered users (for debugging)
  const getAllUsers = () => {
    try {
      const storedUsers = localStorage.getItem('registeredUsers');
      return storedUsers ? JSON.parse(storedUsers) : [];
    } catch {
      return [];
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    register,
    login,
    logout,
    checkUserExists,
    getAllUsers // For debugging
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};