import { Routes, Route } from "react-router";

import DashboardLayout from "../layouts/DashboardLayout";

// navbar pages
import Overview from "../pages/dashboard/Overview";
import Members from "../pages/dashboard/Members";
import Events from "../pages/dashboard/Events";
import Attendees from "../pages/dashboard/Attendees";
import Tickets from "../pages/dashboard/Tickets";
import Sponsors from "../pages/dashboard/Sponsors";
import Website from "../pages/dashboard/Website";

// sidebar pages
import Analytics from "../pages/sidebar/Analytics";
import Emails from "../pages/sidebar/Emails";
import Settings from "../pages/sidebar/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>

        {/* Top Navbar routes */}
        <Route path="/" element={<Overview />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/attendees" element={<Attendees />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/website" element={<Website />} />

        {/* Sidebar routes */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
