import React from 'react'
import Nav from '../assets/Reusable/Nav.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../assets/Reusable/Footer'
function MainPage() {
  return (
   <>
   <Nav />
  <section>
    <Outlet />
   </section>
   <Footer/>
   
   </>
  )
}

export default MainPage