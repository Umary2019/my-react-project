import DashboardTabs from '../../components/DashboardTabs'

const Tickets = () => {
  return (
    <div style={{ padding: '30px 40px' }}>
      <DashboardTabs />
      
      {/* Filter Section */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', color: '#333', marginBottom: '8px', minWidth: '150px' }}>
            Event start date
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
            Last 365 Days
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
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', color: '#333', marginBottom: '8px', minWidth: '150px' }}>
            Event title
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

      {/* Metrics Row */}
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
            5,600
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Available ticket quantity
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
            392
          </div>
          <div style={{
            fontSize: '15px',
            color: '#666'
          }}>
            Completed ticket orders
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tickets