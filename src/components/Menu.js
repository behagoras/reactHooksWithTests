import React from 'react'
import { NavLink } from 'react-router-dom'
import router from './router'

export default function Menu() {
  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {router.map((route) => (
              <NavLink activeClassName="active" to={route.route} className="nav-link">
                {route.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>

  )
}
