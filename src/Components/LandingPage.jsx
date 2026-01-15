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
        content:"Expert Precision in Every Component",
        p:"Specialized job-work for high-quality moulds, dies, and custom industrial parts tailored to your specifications",
        imgsrc:"/Headers/Carousel1.jpg"     
    },
    {
        content:"Hydro-Turbine Part Specialists",
        p:"Delivering durable, high-performance components engineered to withstand the rigors of the power generation industry",
        imgsrc:"/Headers/Carousel2.jpg"     
    },
    {
        content:"Advanced Tooling, Proven Reliability",
        p:"Combining years of workshop expertise with modern machining to ensure your projects are delivered on time and on spec",
        imgsrc:"/Headers/Carousel3.jpg"     
    }
]
    const counterMap=[
        {
            count:15,
            title:"Years of Excellence"
        },
        {
            count:500,
            title:"Projects Delivered"
        },
        {
            count:200,
            title:"Precision Moulds"
        },
        {
            count:120,
            title:"Satisfied Clients"
        }
    ]
    const CardsMap=[
        {
            icon:"bi bi-bullseye",
            title:"Precision-First Approach",
            desc:"Ensuring exact tolerances in every mould and die we craft"
        },
        {
            icon:"bi-gear-wide-connected",
            title:"Technical Mastery",
            desc:"Deep expertise in the specialized manufacturing of hydro-turbine components"
        },
        {
            icon:"bi-patch-check",
            title:"Uncompromising Quality",
            desc:"Rigorous testing protocols to guarantee durability in high-stress environments"
        },
        {
            icon:"bi-clock-history",
            title:"On-Time Execution",
            desc:"Streamlined workshop management to meet your critical project deadlines"
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
                    <div className='col-lg-6 my-5 carousel-mover'>
                        <h1 className='text-white'>{item.content}</h1>
                        <p className='text-white mt-4'>{item.p}</p>
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
