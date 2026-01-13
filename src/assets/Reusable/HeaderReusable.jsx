import React from 'react'
import { Link, useLocation} from 'react-router-dom'




function HeaderReusable(props) {
    const id=useLocation();
    
  return (
    <header id='contactus' style={{ '--image-url': `url(${props.image})` }}>
        <div className='container'>
            <div className='row' >
                <div className='col-lg-12 text-center '>
                    <h1 className='text-white'>{props.title}</h1>
                    <div aria-label="breadcrumb ">
  <ol className="breadcrumb text-white justify-content-center">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active text-white" aria-current="page">{(id.pathname.split('/').pop()).toUpperCase()}</li>
  </ol>
</div>
                </div>
            </div>
        </div>
     </header>
  )
}

export default HeaderReusable