import React from 'react'
import { Footer_route } from '../Dynamic Routes/Footer_routes'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
     <footer>
        <section className='container'>
            <section className='row'>
                <section className='col-lg-3 col-md-6 col-sm-12'>
                    <h5>Subscribe to our Newsletter</h5>  
            </section>

            {Footer_route.map((item)=>(
                <section className='col-lg-3 col-md-6 col-sm-12'>
                    <h5>{item.title}</h5>
                    <ul className='list-unstyled'>
                        {item.links.map((link)=>(

                            <li key={link.id}>
                                <Link to={link.links} className='text-decoration-none text-muted'>{link.Name}</Link>
                            </li>

                        ))}
                    </ul>
                </section>
            ))} 
            <section className='col-12 text-center py-3'>
            © {new Date().getFullYear()} Ronax. All rights reserved.
            </section>
        </section>
        </section>
    </footer>
  )
}
