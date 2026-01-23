import { StrictMode } from 'react'
import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
const LandingPage=lazy(()=> import ('./Components/LandingPage.jsx'));
const ContactUs= lazy(()=> import ('./Components/ContactUs.jsx'));
const MainPage= lazy(()=>import ('./Components/MainPage.jsx'));
const OurTeam= lazy(()=>import ('./Components/OurTeam.jsx'));
const Terms= lazy(()=>import ('./Components/Terms.jsx'));
const Workshop= lazy(()=>import ('./Components/Workshop.jsx'));
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoaderError from './assets/Reusable/LoaderError.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<LoaderError loading={true} />}>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="terms-of-service" element={<Terms />} />
          <Route path="workshop" element={<Workshop />} />
        </Route>
        <Route path="*" element={<LoaderError hasError={true} />} />
      </Routes>
          </Suspense>
    </BrowserRouter>
  </StrictMode>
)
