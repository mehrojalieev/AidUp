import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Auth.scss"
import Container from '../../utils/Utils'

const Auth = () => {
  return (
        <div className="auth">
      <Outlet/>
        </div>
  )
}

export default Auth
