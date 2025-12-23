import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';

// Dashboard pages
import Overview from './pages/dashboard/Overview';
import Members from './pages/dashboard/Members';
import Events from './pages/dashboard/Events';
import Attendees from './pages/dashboard/Attendees';
import Tickets from './pages/dashboard/Tickets';
import Sponsors from './pages/dashboard/Sponsors';
import Website from './pages/dashboard/Website';

// Sidebar pages
import SidebarEvents from './pages/sidebar/Events';
import Emails from './pages/sidebar/Emails';
import Settings from './pages/sidebar/Settings';
import SidebarSponsors from './pages/sidebar/Sponsors';

function App() {
  const { isAuthenticated, loading } = useAuth();

  // Show loading screen while checking auth state
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: 'white',
        fontSize: '18px',
        fontWeight: '500'
      }}>
        Loading...
      </div>
    );
  }

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/dashboard/overview" replace />} />
          
          {/* Dashboard tabs */}
          <Route path="overview" element={<Overview />} />
          <Route path="members" element={<Members />} />
          <Route path="events" element={<Events />} />
          <Route path="attendees" element={<Attendees />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="website" element={<Website />} />
          
          {/* Sidebar navigation */}
          <Route path="sidebar-events" element={<SidebarEvents />} />
          <Route path="emails" element={<Emails />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sidebar-sponsors" element={<SidebarSponsors />} />
        </Route>
        
        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;