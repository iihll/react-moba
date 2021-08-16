import React from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Login from '@/pages/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function router() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Router>
  )
}

export default router
