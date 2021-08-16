import React, { useState } from 'react'
import Router from '@/router'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </Button>
        <Router />
      </header>
    </div>
  )
}

export default App
