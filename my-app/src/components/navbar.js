import React from 'react'
import logo1 from "../images/nav-logo1.png";
import logo2 from "../images/nav-logo2.png";

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-start">
        <a className="navbar-brand" href="#"> <img src={logo1}/> </a>
        <a className="navbar-brand" href="#"> <img src={logo2}/></a>
  </div>
</nav>
    </div>
  )
}

export default Navbar
