import React from 'react'
import View from '../pages/View'
import { Outlet } from 'react-router'

function ViewLayout() {
  return (
    <div>
      <View/>
      <Outlet/>
    </div>
  )
}

export default ViewLayout
