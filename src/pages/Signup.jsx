import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import './Auth.css'

const Signup = () => {
  return (
    <div className="signup-page">
       <SignUp/>
    </div>
    
  )
}

export default Signup