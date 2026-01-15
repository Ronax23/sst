import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeaderReusable from '../assets/Reusable/HeaderReusable'
import LazyImage from '../assets/Reusable/LazyImage'

gsap.registerPlugin(ScrollTrigger)

function OurTeam() {
    const team = [
        { name: "John Doe", role: "Project Manager", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Jane Smith", role: "Lead Developer", photo: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Mike Johnson", role: "UI/UX Designer", photo: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Emily Davis", role: "QA Engineer", photo: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "David Wilson", role: "DevOps Engineer", photo: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Sarah Brown", role: "Marketing Specialist", photo: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Chris Lee", role: "Backend Developer", photo: "https://randomuser.me/api/portraits/men/7.jpg" },
        { name: "Anna Garcia", role: "Frontend Developer", photo: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "James Martinez", role: "Data Scientist", photo: "https://randomuser.me/api/portraits/men/9.jpg" }
    ]

    const sectionRef = useRef(null)
    const trackRef = useRef(null)



    return (
        <div>
            <HeaderReusable title="Our Team" image="/Headers/OurTeam.jpg" />
            
            <section ref={sectionRef} id="sec5">
                <div className="container-fluid sticky-box">
                    <div ref={trackRef} className="horizontal-scroll-track">
                        {team.map((member, i) => (
                            <div key={i} className="cards dynamicSizer">
                                <div className="team-member text-center p-4">
                                    <LazyImage 
                                        src={member.photo} 
                                        alt={member.name}
                                        className="img-fluid mb-3 rounded-circle"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                    />
                                    <h5 className="fw-bold">{member.name}</h5>
                                    <p className="text-muted">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurTeam