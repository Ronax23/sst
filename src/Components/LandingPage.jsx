import React from 'react'
import BrandSection from '../assets/Reusable/BrandSection'
import ContactUs from './ContactUs'
import ServiceTabs from '../assets/Reusable/ServiceTabs'

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


  return (
    <>
    <header id='main '>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    {dynamics.map((item, index)=>(
        <div class={`carousel-item${index===0 ? "active":""}`} key={index}>
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
    
    <section id="sec3"></section>
    <ServiceTabs/>

    

    </>
  )
}
