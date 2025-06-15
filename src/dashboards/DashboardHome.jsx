import React from 'react'
// import { useUser } from '@clerk/clerk-react'
import Users from './Users'
import Workshops from './Workshops'

const DashboardHome = () => {
 
  return (
    <div style={{ marginBottom: '6rem' , Height: '50vh' }}>
      <Users />
      <Workshops />
    </div>
  )
}

export default DashboardHome