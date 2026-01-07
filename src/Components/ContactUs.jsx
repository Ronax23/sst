import React from 'react'

function ContactUs() {
  const callig="./public/Headers/Contact.jpg";

  return (
   <>   
   <header id='contactus' style={{ '--image-url': `url(${callig})` }}>
        <div className='container'>
            <div className='row' >
                <div className='col-lg-12 text-center'>
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
     </header>
   
   
   </>
  )
}

export default ContactUs