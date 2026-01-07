import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './assets/Reusable/Nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footer from './assets/Reusable/Footer.jsx';
import LandingPage from './Components/LandingPage.jsx';
import ContactUs from './Components/ContactUs.jsx';
import MainPage from './Components/MainPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
          
    </BrowserRouter>
  </StrictMode>,
)
