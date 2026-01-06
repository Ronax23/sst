import React from 'react'
import { Link } from 'react-router-dom'
import { Nav_Route } from '../Dynamic Routes/Nav_routes'

function Nav() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-transparent">
  <section className="container-fluid p-3">
    <Link className="navbar-brand" to="/">SSTC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <section className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
       {Nav_Route.map((item) => (
         item.Dropdown ? (
            <li className="nav-item dropdown p-2" key={item.id}>
          <Link className="nav-link dropdown-toggle" to={item.links} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {item.Name}
          </Link>
          <ul className="dropdown-menu">
            {item.Dropdown.map((subItem) => (
              <li key={subItem.id}>
                <Link className="dropdown-item" to={subItem.links}>{subItem.Name}</Link>
              </li>
            ))}
          </ul>
        </li>) : (
             <li className="nav-item p-2" key={item.id}>
          <Link className="nav-link active" aria-current="page" to={item.links}>{item.Name}</Link>
        </li>
        )
       ))}
      </ul>
    </section>
  </section>
</nav>
  )
}

export default Nav