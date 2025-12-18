import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full h-screen p-2 flex justify-center items-center bg-primary'>
      Welcome {localStorage.getItem("username")}
    </div>
  )
}

export default Dashboard
