import React, { useState } from 'react'

// Styles for our counter component
const styles = {
  container: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto'
  },
  counter: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#4CAF50',
    margin: '1rem 0'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    margin: '1rem 0'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#2196F3',
    color: 'white',
    transition: 'background-color 0.3s'
  },
  buttonHover: {
    backgroundColor: '#1976D2'
  },
  resetButton: {
    backgroundColor: '#f44336'
  }
}

const AdvancedCounter: React.FC = () => {
  // State for the current count value
  // useState returns an array: [currentValue, setterFunction]
  const [count, setCount] = useState<number>(0)

  // Handler function for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1) // Updates count to current value + 1
  }

  // Handler function for decrementing the count
  const handleDecrement = () => {
    setCount(count - 1) // Updates count to current value - 1
  }

  return (
    <div style={styles.container}>
      <h2>Counter</h2>
      
      {/* Display current count */}
      <div style={styles.counter}>
        Current Count: <strong>{count}</strong>
      </div>

      {/* Control buttons */}
      <div style={styles.buttonGroup}>
        <button 
          style={styles.button}
          onClick={handleDecrement}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1976D2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2196F3'}
        >
          Decrement
        </button>
        
        <button 
          style={styles.button}
          onClick={handleIncrement}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1976D2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2196F3'}
        >
          Increment
        </button>
      </div>

      {/* Placeholder for additional features */}
      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Additional features coming soon:</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>History tracking</li>
          <li>Auto-save to localStorage</li>
          <li>Keyboard navigation</li>
          <li>Custom step value</li>
        </ul>
      </div>
    </div>
  )
}

export default AdvancedCounter