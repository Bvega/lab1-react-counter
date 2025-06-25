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
  
  // State for tracking history of all count values
  // We initialize with [0] since our initial count is 0
  const [history, setHistory] = useState<number[]>([0])

  // Handler function for incrementing the count
  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount) // Updates count to current value + 1
    setHistory([...history, newCount]) // Add new count to history
  }

  // Handler function for decrementing the count
  const handleDecrement = () => {
    const newCount = count - 1
    setCount(newCount) // Updates count to current value - 1
    setHistory([...history, newCount]) // Add new count to history
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

      {/* History section */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Count History:</h3>
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '1rem', 
          borderRadius: '4px',
          maxHeight: '100px',
          overflowY: 'auto'
        }}>
          {history.map((value, index) => (
            <span key={index} style={{ margin: '0 4px' }}>
              {value}
              {index < history.length - 1 && ','}
            </span>
          ))}
        </div>
      </div>

      {/* Placeholder for remaining features */}
      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Additional features coming soon:</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Auto-save to localStorage</li>
          <li>Keyboard navigation</li>
          <li>Reset functionality</li>
          <li>Custom step value</li>
        </ul>
      </div>
    </div>
  )
}

export default AdvancedCounter