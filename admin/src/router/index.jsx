import React from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function router() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )
}

export default router
