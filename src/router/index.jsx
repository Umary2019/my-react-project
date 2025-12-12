import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'

// Dashboard pages
import Overview from '../pages/dashboard/Overview'
import Members from '../pages/dashboard/Members'
import Events from '../pages/dashboard/Events'
import Attendees from '../pages/dashboard/Attendees'
import Tickets from '../pages/dashboard/Tickets'
import Sponsors from '../pages/dashboard/Sponsors'
import Website from '../pages/dashboard/Website'

// Sidebar pages
import Analytics from '../pages/sidebar/Analytics'
import SidebarEvents from '../pages/sidebar/Events'
import Emails from '../pages/sidebar/Emails'
import Settings from '../pages/sidebar/Settings'
import SidebarSponsors from '../pages/sidebar/Sponsors'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* Default route - show Attendees page */}
        <Route index element={<Navigate to="/attendees" replace />} />
        
        {/* Dashboard routes */}
        <Route path="overview" element={<Overview />} />
        <Route path="members" element={<Members />} />
        <Route path="events" element={<Events />} />
        <Route path="attendees" element={<Attendees />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="website" element={<Website />} />
        
        {/* Sidebar routes */}
        <Route path="analytics-page" element={<Analytics />} />
        <Route path="sidebar-events" element={<SidebarEvents />} />
        <Route path="emails" element={<Emails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="sidebar-sponsors" element={<SidebarSponsors />} />
      </Route>
    </Routes>
  )
}

export default AppRouter