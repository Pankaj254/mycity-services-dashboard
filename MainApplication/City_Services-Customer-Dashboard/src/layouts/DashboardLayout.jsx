import React from 'react'
import SideBar from '../components/SideBar'
import Dashboard from '../pages/Dashboard/Dashboard'

const DashboardLayout = () => {
  return (
    <div className='h-screen flex'>
      <SideBar/>
      <Dashboard/>
    </div>
  )
}

export default DashboardLayout
