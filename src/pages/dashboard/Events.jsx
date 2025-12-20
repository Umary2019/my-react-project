import DashboardTabs from '../../components/DashboardTabs'

const Events = () => {
  return (
    <div style={{ padding: '30px 40px' }}>
      <DashboardTabs />
      
      {/* Filter Section */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', color: '#333', marginBottom: '8px', minWidth: '150px' }}>
            Start date
          </div>
          <div style={{
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '12px 20px',
            fontSize: '14px',
            cursor: 'pointer',
            minWidth: '150px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            is in the last 12 months
            <span style={{ fontSize: '10px', color: '#666' }}>▼</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', color: '#333', marginBottom: '8px', minWidth: '150px' }}>
            Event venue
          </div>
          <div style={{
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '12px 20px',
            fontSize: '14px',
            cursor: 'pointer',
            minWidth: '150px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            is any value
            <span style={{ fontSize: '10px', color: '#666' }}>▼</span>
          </div>
        </div>
      </div>

      {/* Overview Heading */}
      <div style={{
        fontSize: '26px',
        marginTop: '40px',
        marginBottom: '25px',
        fontWeight: '600',
        color: '#333'
      }}>
        Overview
      </div>

      {/* First Row of Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '25px',
        marginBottom: '35px'
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
            8
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Completed events all time
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
            6
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Completed collaborated events
          </div>
        </div>
      </div>

      {/* Second Row of Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
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
            0
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Future events
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
            0
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Future collaborated events
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events