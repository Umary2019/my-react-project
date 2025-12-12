import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div style={{ display: 'flex', height: 'calc(100vh - 42px)' }}>
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout