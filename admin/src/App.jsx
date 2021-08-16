import React, { useState } from 'react'
import './App.css'
import Router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </button>
        <Router />
      </header>
    </div>
  )
}

export default App
