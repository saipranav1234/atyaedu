import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import './Auth.css'

const Login = () => {
  return (
    <div className="Login-page">
      <SignIn/>

    </div>
    
  )
}

export default Login