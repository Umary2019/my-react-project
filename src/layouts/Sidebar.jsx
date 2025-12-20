import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/dashboard/overview', label: 'Analytics' },
    { path: '/dashboard/sidebar-events', label: 'Events' },
    { path: '/dashboard/emails', label: 'Emails' },
    { path: '/dashboard/settings', label: 'Settings' },
    { path: '/dashboard/sidebar-sponsors', label: 'Sponsors' },
  ];

  // Check if current path is any dashboard tab route
  const isDashboardRoute = location.pathname.startsWith('/dashboard/') && 
    ['/dashboard/overview', '/dashboard/members', '/dashboard/events', 
     '/dashboard/attendees', '/dashboard/tickets', '/dashboard/sponsors', 
     '/dashboard/website'].includes(location.pathname);

  return (
    <div style={{
      width: '290px',
      background: 'white',
      borderRight: '1px solid #ddd',
      padding: '20px',
      paddingTop: '30px',
      height: '100%',
      overflowY: 'auto'
    }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '1.4',
        marginBottom: '20px'
      }}>
        GDG on Campus Gombe State University - Gombe, Nigeria
      </div>

      <ul style={{
        listStyle: 'none',
        padding: '0',
        margin: '0'
      }}>
        {menuItems.map((item, index) => {
          // Special handling for Analytics - show active for all dashboard routes
          const isActive = item.label === 'Analytics' 
            ? isDashboardRoute 
            : location.pathname === item.path;
          
          return (
            <NavLink
              key={index}
              to={item.path}
              style={({ isActive: navLinkActive }) => ({
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              })}
            >
              <li
                style={{
                  padding: '15px 0',
                  fontSize: '15px',
                  cursor: 'pointer',
                  color: isActive ? '#1a73e8' : '#444',
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: isActive ? '#f0f7ff' : 'transparent',
                  borderLeft: isActive ? '3px solid #1a73e8' : 'none',
                  paddingLeft: isActive ? '17px' : '0',
                  marginLeft: isActive ? '-20px' : '0'
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{
                    color: '#1a73e8',
                    fontWeight: 'bold',
                    marginRight: '10px'
                  }}>
                    →
                  </span>
                )}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;