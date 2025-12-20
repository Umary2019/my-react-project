import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import DashboardLayout from '../layouts/DashboardLayout';

// Dashboard pages
import Overview from '../pages/dashboard/Overview';
import Members from '../pages/dashboard/Members';
import Events from '../pages/dashboard/Events';
import Attendees from '../pages/dashboard/Attendees';
import Tickets from '../pages/dashboard/Tickets';
import Sponsors from '../pages/dashboard/Sponsors';
import Website from '../pages/dashboard/Website';

// Sidebar pages (excluding Analytics since it now goes to dashboard)
import SidebarEvents from '../pages/sidebar/Events';
import Emails from '../pages/sidebar/Emails';
import Settings from '../pages/sidebar/Settings';
import SidebarSponsors from '../pages/sidebar/Sponsors';

const AppRouter = () => {
  return (
    <Routes>
      {/* Landing Page Route */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Dashboard Routes - This is what "Home" links to */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/overview" replace />} />
        
        {/* Dashboard tabs (Analytics will show Overview by default) */}
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
        
        {/* Remove Analytics route since it goes to dashboard overview */}
      </Route>
      
      {/* Redirect any unknown routes to landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;