import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/reducer">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-link" activeClassName="active" aria-current="page" to="/reducer">Home</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/reducer/about">About</NavLink>
            <NavLink exact className="nav-link" activeClassName="active" to="/reducer/login">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
