import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function router() {
  return (
    <Suspense fallback={React.Fragment}>
      <Router>
        <Route path="/" exact component={lazy(() => import('@/pages/Home'))}>
          {/* <Route path="/welcome" component={Welcome} /> */}
        </Route>
        <Route path="/about" component={lazy(() => import('@/pages/About'))} />
        <Route path="/login" component={lazy(() => import('@/pages/Login'))} />
      </Router>
    </Suspense>
  )
}

export default router
