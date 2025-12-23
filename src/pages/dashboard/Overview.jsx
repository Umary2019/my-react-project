import DashboardTabs from '../../components/DashboardTabs'

const Overview = () => {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      <DashboardTabs />
      
      {/* Main Content Container */}
      <div style={{ marginTop: '20px' }}>
        {/* Top Section */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            fontSize: '46px',
            fontWeight: '400',
            color: '#202124',
            marginBottom: '12px',
            lineHeight: '1'
          }}>
            679
          </div>
          
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            marginBottom: '6px',
            lineHeight: '1.4'
          }}>
            Total members <span style={{ color: '#0d652d', fontWeight: '500' }}>▲ 255</span>
          </div>
          
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            lineHeight: '1.4'
          }}>
            Members with registration(s) <span style={{ color: '#d93025', fontWeight: '500' }}>▼ -100%</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: '#e8eaed',
          margin: '30px 0',
          width: '100%'
        }}></div>

        {/* Middle Section */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            marginBottom: '10px',
            lineHeight: '1.4'
          }}>
            Days to next event
          </div>
          
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            marginBottom: '10px',
            lineHeight: '1.4'
          }}>
            Registrations
          </div>
          
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            lineHeight: '1.4'
          }}>
            Hosted events <span style={{ color: '#d93025', fontWeight: '500' }}>▼ -100%</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: '#e8eaed',
          margin: '30px 0',
          width: '100%'
        }}></div>

        {/* Registration Rate Section */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            fontSize: '38px',
            fontWeight: '400',
            color: '#202124',
            marginBottom: '8px',
            lineHeight: '1'
          }}>
            0%
          </div>
          
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            lineHeight: '1.4'
          }}>
            Member registration rate <span style={{ color: '#d93025', fontWeight: '500' }}>▼ -100%</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: '#e8eaed',
          margin: '30px 0',
          width: '100%'
        }}></div>

        {/* Bottom Section */}
        <div>
          <div style={{
            fontSize: '38px',
            fontWeight: '400',
            color: '#202124',
            marginBottom: '12px',
            lineHeight: '1'
          }}>
            0%
          </div>
          
          <div style={{
            fontSize: '14.5px',
            color: '#202124',
            lineHeight: '1.4'
          }}>
            Collaborated events <span style={{ color: '#d93025', fontWeight: '500' }}>▼ -3...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview