import React, { useState, useEffect } from 'react'

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
  // Initialize from localStorage if available
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem('counter-value')
    return savedCount ? parseInt(savedCount, 10) : 0
  })
  
  // State for tracking history of all count values
  // Initialize from localStorage if available
  const [history, setHistory] = useState<number[]>(() => {
    const savedHistory = localStorage.getItem('counter-history')
    return savedHistory ? JSON.parse(savedHistory) : [count]
  })

  // State to track if save is in progress
  const [isSaving, setIsSaving] = useState<boolean>(false)

  // useEffect to auto-save count and history to localStorage
  useEffect(() => {
    // Set saving indicator
    setIsSaving(true)
    
    // Create a timer to simulate async save operation
    const saveTimer = setTimeout(() => {
      localStorage.setItem('counter-value', count.toString())
      localStorage.setItem('counter-history', JSON.stringify(history))
      setIsSaving(false)
    }, 500) // 500ms delay to show saving state

    // Cleanup function to cancel save if component unmounts or state changes
    return () => {
      clearTimeout(saveTimer)
    }
  }, [count, history]) // Dependencies: run effect when count or history changes

  // Handler function for incrementing the count
  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    setHistory([...history, newCount])
  }

  // Handler function for decrementing the count
  const handleDecrement = () => {
    const newCount = count - 1
    setCount(newCount)
    setHistory([...history, newCount])
  }

  // useEffect for keyboard navigation
  useEffect(() => {
    // Define the keyboard event handler
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        handleIncrement()
      } else if (event.key === 'ArrowDown') {
        handleDecrement()
      }
    }

    // Add event listener to document
    document.addEventListener('keydown', handleKeyPress)

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [count, history]) // Dependencies ensure we use current values

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

      {/* Save indicator */}
      <div style={{ marginTop: '1rem', height: '20px' }}>
        {isSaving && (
          <span style={{ color: '#4CAF50', fontStyle: 'italic' }}>
            Changes saved.
          </span>
        )}
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

      {/* Keyboard navigation hint */}
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
      </div>

      {/* Placeholder for remaining features */}
      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Additional features coming soon:</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Reset functionality</li>
          <li>Custom step value</li>
        </ul>
      </div>
    </div>
  )
}

export default AdvancedCounter