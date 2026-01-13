import React, { useState,useEffect,useRef } from 'react'
import BrandSection from '../assets/Reusable/BrandSection'
import ContactUs from './ContactUs'
import ServiceTabs from '../assets/Reusable/ServiceTabs'
import { Link } from 'react-router-dom'
import CardsSec from '../assets/Reusable/CardsSec'
import LazyImage from '../assets/Reusable/LazyImage'

export default function LandingPage() {

    const dynamics=[
    {
        content:"Welcome to SSTC",
        imgsrc:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"     
    },
    {
        content:"Explore Our Courses",
        imgsrc:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"     
    },
    {
        content:"Join Our Community",
        imgsrc:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMGluJTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"     
    }
]
    const counterMap=[
        {
            count:150,
            title:"Courses"
        },
        {
            count:1000,
            title:"Students"
        },
        {
            count:50,
            title:"Instructors"
        },
        {
            count:25,
            title:"Awards"
        }
    ]
    const CardsMap=[
        {
            icon:"bi bi-google",
            title:"Web Development",
            desc:"Learn to build modern, responsive websites and web applications using the latest technologies and frameworks."
        },
        {
            icon:"bi bi-android",
            title:"Mobile App Development",
            desc:"Master the art of creating mobile applications for iOS and Android platforms using popular development tools."
        },
        {
            icon:"bi bi-database",
            title:"Data Science",
            desc:"Dive into data analysis, visualization, and machine learning techniques to extract insights from complex datasets."
        },
        {
            icon:"bi bi-cloud",
            title:"Cloud Computing",
            desc:"Gain expertise in cloud platforms like AWS, Azure, and Google Cloud to deploy and manage scalable applications."
        }
    ];
    const ref = useRef();
    const [adder, setAdder] = useState(0);
const maxCount = Math.max(...counterMap.map(item => item.count));
useEffect(() => {
    let interval = null;
    
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            interval = setInterval(() => {
                setAdder(prev => prev < maxCount ? prev + 1 : prev);
            }, 2); // Speed of the count
        } else {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }
    }, { threshold: 1 });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
        if (interval) clearInterval(interval);
        observer.disconnect();
    };
}, []); // Runs once when page opens


  return (
    <>
    <header id='main'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {dynamics.map((item, index)=>(
        <div className={`carousel-item${index===0 ? " active":""}`} key={index}>
        <div className='dynamicCaroe d-block' 
    style={{ '--image-url': `url(${item.imgsrc})` }}>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-lg-6 my-5 '>
                        <h1>{item.content}</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    ))}
  </div>
    </div>
    </header>
   <BrandSection/>
    
    <section id="sec3">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 overflow-hidden hover-effect">
                <LazyImage  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" alt="Our Vision" className="img-fluid" />
            </div>
            <div className="col-lg-6">
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="/workshop">Learn More</Link>
            </div>
        </div>
    </div>

    </section>

   <CardsSec dynamicdat={CardsMap}/>
    <section id="counterSection" className='my-5' ref={ref}>
        <div className="container">
            <div className="row text-center">
                {counterMap.map((item, index)=>(
                    <div className="col-lg-3 col-6" key={index}>
                        <h2>{Math.min(adder, item.count)}+</h2>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    <ServiceTabs/>

    

    </>
  )
}
