import { NavLink } from 'react-router-dom';

const DashboardTabs = () => {
  const tabs = [
    { path: '/dashboard/overview', label: 'Overview' },
    { path: '/dashboard/members', label: 'Members' },
    { path: '/dashboard/events', label: 'Events' },
    { path: '/dashboard/attendees', label: 'Attendees' },
    { path: '/dashboard/tickets', label: 'Tickets' },
    { path: '/dashboard/sponsors', label: 'Sponsors' },
    { path: '/dashboard/website', label: 'Website' },
  ];

  return (
    <div style={{
      display: 'flex',
      gap: '35px',
      fontSize: '17px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '15px',
      marginBottom: '20px'
    }}>
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#1a73e8' : '#333',
            cursor: 'pointer',
            paddingBottom: '8px',
            borderBottom: isActive ? '3px solid #1a73e8' : 'none'
          })}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardTabs;