import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../component/api/userApi'

const PrivateRoute = () => {
  return (
    isAuthenticated() && isAuthenticated().user.role === 0?
    <Outlet/> :
    <Navigate to='/signin'/>
  )
}

export default PrivateRoute