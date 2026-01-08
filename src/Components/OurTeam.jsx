import React from 'react'
import HeaderReusable from '../assets/Reusable/HeaderReusable'

function OurTeam() {

    const team=[
        {
            name:"John Doe",
            role:"Project Manager",
            photo:"https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name:"Jane Smith",
            role:"Lead Developer",
            photo:"https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name:"Mike Johnson",
            role:"UI/UX Designer",
            photo:"https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name:"Emily Davis",
            role:"QA Engineer",
            photo:"https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name:"David Wilson",
            role:"DevOps Engineer",
            photo:"https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            name:"Sarah Brown",
            role:"Marketing Specialist",
            photo:"https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            name:"Chris Lee",
            role:"Backend Developer",
            photo:"https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            name:"Anna Garcia",
            role:"Frontend Developer",
            photo:"https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
            name:"James Martinez",
            role:"Data Scientist",
            photo:"https://randomuser.me/api/portraits/men/9.jpg"
        }
    ]


  return (
    <div>
       <header className="hero-container">
      {/* 1. The Video Background */}
      <video 
        src="/Headers/sage.mp4" 
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


    <secction id="sec5">
        <div className="container-fluid">
            <div className="row g-0 mx-auto">
                {team.map((member, index) => (
                    <div className="cards dynamicSizer" key={index}>
                        <div className="team-member text-center p-4">
                            <img 
                                src={member.photo} 
                                alt={member.name} 
                                className="img-fluid  mb-3" 
                            />
                            <h5 className="fw-bold">{member.name}</h5>
                            <p className="text-muted">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </secction>

       </div>
  )
}

export default OurTeam