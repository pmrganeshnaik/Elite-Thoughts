import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
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
import AllBlogs from './sub-pages/AllBlogs'
import BlogDetail from './components/BlogDetail'
import EditBlog from './components/EditBlog'
import FullBlogLayout from './layout/FullBlogLayout'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='views' element={<ViewLayout/>}>
              <Route index element={<AllBlogs/>}/>
              <Route path='Finance-Business' element={<Finance_Bissness/>}/>
              <Route path='Health' element={<Health/>}/>
              <Route path='Travel' element={<Travel/>}/>
              <Route path='Food' element={<Food/>}/>
              <Route path='General' element={<General/>}/>
              <Route path=':category/:id' element={<FullBlogLayout/>}>
                  <Route index element={<BlogDetail/>}/>
                  <Route path='edit-update-post' element={<EditBlog/>}/>
              </Route>
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
