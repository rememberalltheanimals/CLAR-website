import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-inverse navbar-expand-lg">
      <div className="container-fluid">

          <div className="navbar-header">
            <Link className='navbar-brand mr-4 pr-2' to="/">
              <img className="mr-3" src="/src/assets/CLAR_Logo.jpg" alt="logo" />
              <b className='h3 mr-3'>Code Like A River</b>
            </Link>
          </div>

          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link className="mr-3" to="/">Home</Link></li>
              <li><Link className="mr-3" to="/members">Members</Link></li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default NavBar