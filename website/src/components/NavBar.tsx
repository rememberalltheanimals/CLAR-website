import React from "react"
import { Link } from "react-router-dom"
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <nav id="NavBar" className="navbar navbar-inverse navbar-expand-lg">
      <div className="container-fluid">

          <div className="navbar-header">
            <Link className="navbar-brand mr-4 pr-2" to="/">
              <img className="mr-3" src="/src/assets/JunCode_Logo.jpg" alt="logo" />
              <b className="h3 mr-3 mb-0">JunCode</b>
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