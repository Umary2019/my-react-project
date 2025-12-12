import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = [
    { path: '/attendees', label: 'Analytics' },
    { path: '/sidebar-events', label: 'Events' },
    { path: '/emails', label: 'Emails' },
    { path: '/settings', label: 'Settings' },
    { path: '/sidebar-sponsors', label: 'Sponsors' },
  ]

  return (
    <div style={{
      width: '290px',
      background: 'white',
      borderRight: '1px solid #ddd',
      padding: '20px',
      paddingTop: '30px'
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
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            })}
          >
            {({ isActive }) => (
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
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar