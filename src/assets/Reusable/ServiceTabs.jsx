import {useState} from 'react'
import LazyImage from './LazyImage'

const dynamicSelector={
  HYDRO:{
    img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    p:"Discover the power of water with our comprehensive Hydrology courses. Dive into the study of water cycles, distribution, and management to make a splash in your career."
  },
  Water_Heaters:{
    img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    p:"Heat things up with our expert-led Water Heater courses. Learn the ins and outs of installation, maintenance, and repair to keep the warmth flowing."
  },
  Die_Moulding:{
    img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMGluJTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    p:"Shape your future with our specialized Die Moulding courses. Master the techniques of mould design, fabrication, and production to create precision-engineered components."
  },
  Press_Machine:{
    img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMGluJTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    p:"Get hands-on with our Press Machine courses. Learn the operation, safety protocols, and maintenance of press machinery to excel in manufacturing environments."
  }
}


function ServiceTabs() {
    const [selected,setSelected] =useState(Object.keys(dynamicSelector)[0]);

    
  return (
    <section id="sec4">
        <div className='container my-5'>
            <div className='row'>
                    <h2>Our Courses</h2>
                    <p>Explore our diverse range of courses designed to empower you with the skills and knowledge needed to excel in your career.</p>
                </div>
                 <div className='row'>

              <div className="col-lg-3 col-md-4">
                <div className="list-group" id="list-tab" role="tablist">
                 {Object.entries(dynamicSelector).map(([key, item]) => (
          <button 
            onClick={() => setSelected(key)} // Just set the string
            className={`list-group-item ${selected === key ? 'SelectionActive animate-content' : ''}`}
          >
            {key.replace(/_/g, ' ')}
          </button>
        ))}
                </div>
              </div>
            
              <div className="col-lg-8 col-md-7 overflow-hidden">
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                   <div className="row">
                     <div 
          className="col-lg-6 text-animate" 
          key={`text-${selected}`} // Forces animation restart
        >
          <h1 className="fw-bold text-primary">
            {selected.replace("_", " ")}
          </h1>
          <p className="lead">{dynamicSelector[selected].p}</p>
        </div>
        
        {/* IMAGE COLUMN */}
        <div 
          className="col-lg-6 img-animate" 
          key={`img-${selected}`} // Forces animation restart
        > 
          <LazyImage 
            src={dynamicSelector[selected].img} 
            alt="Course" 
            className="img-fluid rounded shadow-lg border" 
          />
        </div>
                   </div>
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
           
       
    </section>
  )
}

export default ServiceTabs