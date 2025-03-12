import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className=''>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
