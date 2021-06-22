import React from 'react'

function Navbar () {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{fontFamily : 'Sacramento'}}>
      <div className="container-fluid" style={{
        backgroundColor: '#798777'}}>
        <a className="navbar-brand" href="#jumbotron" style={{color: '#F8EDE3', fontSize: '5vh'}}>Dio & Clara</a>
        <button className="navbar-toggler" style={{color: '#F8EDE3'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-lg-5" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item ms-lg-5">
              <a className="nav-link active" aria-current="page" href="#jumbotron" style={{color: '#F8EDE3', fontSize: '3vh'}}>Home</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#wedding" style={{color: '#F8EDE3', fontSize: '3vh'}}>Wedding</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#invitation" style={{color: '#F8EDE3', fontSize: '3vh'}}>Invitation</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#gallery" style={{color: '#F8EDE3', fontSize: '3vh'}}>Gallery</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#congratulations" style={{color: '#F8EDE3', fontSize: '3vh'}}>Congratulations</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#maps" style={{color: '#F8EDE3', fontSize: '3vh'}}>Maps</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar