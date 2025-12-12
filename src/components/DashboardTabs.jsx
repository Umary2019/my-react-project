import { NavLink } from 'react-router-dom'

const DashboardTabs = () => {
  const tabs = [
    { path: '/overview', label: 'Overview' },
    { path: '/members', label: 'Members' },
    { path: '/events', label: 'Events' },
    { path: '/attendees', label: 'Attendees' },
    { path: '/tickets', label: 'Tickets' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/website', label: 'Website' },
  ]

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
  )
}

export default DashboardTabs