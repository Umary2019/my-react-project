import DashboardTabs from '../../components/DashboardTabs'

const Members = () => {
  return (
    <div style={{ padding: '30px 40px' }}>
      <DashboardTabs />
      
      {/* Overview Heading */}
      <div style={{
        fontSize: '26px',
        marginBottom: '25px',
        fontWeight: '600',
        color: '#333'
      }}>
        Overview
      </div>

      {/* Metrics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '25px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '35px 20px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            679
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Chapter members all time
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '35px 20px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            597
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            New chapter members
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '35px 20px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            8
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Departed chapter members
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '35px 20px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '40px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            139
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            First-time attendees
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members