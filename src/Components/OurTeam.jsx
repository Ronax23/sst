import { useRef,useLayoutEffect } from 'react'
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

useLayoutEffect(() => {
    if (team.length === 0) return;

    let ctx = gsap.context(() => {
        // We use a function for 'x' so it's calculated at the MOMENT of scroll
        gsap.to(trackRef.current, {
            x: () => -(trackRef.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                // Use a function here too to prevent "random" length
                end: () => `+=${trackRef.current.scrollWidth - window.innerWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });
    }, sectionRef);

    // Give the browser a split second to render the Bootstrap cols
    // Then tell ScrollTrigger to "look again" at the widths
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

    return () => ctx.revert();
}, [team]);

    return (
        <div>
            <HeaderReusable title="Our Team" image="/Headers/overview.jpg" />
            
            <section ref={sectionRef} id="OurTeam">
                <div className="container-fluid sticky-box  overflow-hidden">
                    <div ref={trackRef} className="horizontal-scroll-track d-flex flex-nowrap">
                        {team.map((member, i) => (
                           <div className="col-12 col-lg-6 flex-shrink-0">
                             <div key={i} className="cards">
                                <div className="team-member text-center p-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-12 bg-danger"><LazyImage src={member.photo} alt={member.name} className="img-fluid mb-3 w-100" /></div>
                                    <div className="col-lg-6 col-12 bg-warning">
                                     <h5 className="fw-bold">{member.name}</h5>
                                    <p className="text-muted">{member.role}</p>
                                   </div>
                                    </div>
                                   
                                </div>
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