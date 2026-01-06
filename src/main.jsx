import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './assets/Reusable/Nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './assets/Reusable/Footer.jsx';
import LandingPage from './Components/LandingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </BrowserRouter>
  </StrictMode>,
)
