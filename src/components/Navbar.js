import React from 'react'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
export default function Navbar (props) {
  return (
    <>
    
    <nav className= {`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.tiltle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-5" >
        <a className="nav-link active"  href="/">Home</a>
        {/* <Link className="nav-link active"  to="/about">About</Link> */}
        {/* <Link className="nav-link active"  to="/textform">Textform</Link> */}
       
        
      </div>
      
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
  </div>
  
</nav>

      
    </>
  );
}
