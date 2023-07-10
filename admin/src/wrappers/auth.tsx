import React from 'react'
import { Navigate, Outlet, useRouteProps } from 'umi'

function Auth() {
  const routeProps = useRouteProps()

  if (!routeProps.isPublic && !localStorage.token)
    return <Navigate to="/login" />
  else
    return <Outlet />
}

export default Auth
