import React from 'react'
import BlogDetail from '../components/BlogDetail'
import { Outlet } from 'react-router'

function FullBlogLayout() {
  return (
    <div>
        {/* <BlogDetail/> */}
        <Outlet/>
    </div>
  )
}

export default FullBlogLayout
