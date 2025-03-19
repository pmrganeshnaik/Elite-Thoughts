import React from 'react'
import { Outlet } from 'react-router-dom'

function FullBlogLayout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default FullBlogLayout
