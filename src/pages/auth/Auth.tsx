import { Outlet } from 'react-router-dom'
import "./Auth.scss"

const Auth = () => {
  return (
        <div className="auth">
      <Outlet/>
        </div>
  )
}

export default Auth
