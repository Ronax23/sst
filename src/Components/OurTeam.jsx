import React from 'react'
import HeaderReusable from '../assets/Reusable/HeaderReusable'

function OurTeam() {
  return (
    <div>
       <header className="hero-container">
      {/* 1. The Video Background */}
      <video 
        src="../public/Headers/sage.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="back-video"
      />

      {/* 2. The Dark Overlay (Makes text easier to read) */}
      <div className="overlay"></div>

      {/* 3. The Content on top */}
      <div className="content">
        <h1 className="display-1 fw-bold text-white">Precision Engineering</h1>
        <p className="lead text-white">Quality services for your workshop needs.</p>
        <button className="btn btn-primary btn-lg">Explore Services</button>
      </div>
    </header>
       </div>
  )
}

export default OurTeam