import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import View from './pages/View'
import Help from './pages/Help'
import Post from './pages/Post'
import { RouterProvider } from 'react-router-dom'
import './index.css';  
import ViewLayout from './layout/ViewLayout'
import General from './sub-pages/General'
import Health from './sub-pages/Health'
import Finance_Bissness from './sub-pages/Finance_Bissness'
import Travel from './sub-pages/Travel'
import Food from './sub-pages/Food'
import BlogDetail from './sub-pages/blogDetail'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='views' element={<ViewLayout/>}>
              <Route index element={<General/>}/>
              <Route path='Finance-Business' element={<Finance_Bissness/>}/>
              <Route path='Health' element={<Health/>}/>
              <Route path='Travel' element={<Travel/>}/>
              <Route path='Food' element={<Food/>}/>
              <Route path=':category/:id' element={<BlogDetail/>}/>
          </Route>
          <Route path='help' element={<Help/>}/>
          <Route path='new-post' element={<Post/>}/>
      </Route>
    )
  )

  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
