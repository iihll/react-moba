import React from 'react'
import Home from '@/pages/home'
import About from '../pages/about'
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
