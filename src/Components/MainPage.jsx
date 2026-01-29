import React from 'react'
import Nav from '../assets/Reusable/Nav.jsx'
import { Outlet} from 'react-router-dom'
import Footer from '../assets/Reusable/Footer'
import { Dataprovider } from '../context/Context.jsx'
import ScrollToTop from '../assets/Reusable/ScrollToTop.jsx'
function MainPage() {
  return (
   <>
  <Dataprovider>
    <ScrollToTop/>
   <Nav />
  <section>
    <Outlet />
   </section>
   <Footer/>
   </Dataprovider>
   </>
  )
}

export default MainPage