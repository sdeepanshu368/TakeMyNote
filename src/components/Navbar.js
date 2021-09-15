import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

  

const Navbar = () => {
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        history.push("/login")
    }
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TakeMyNote</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                    <Link className="rounded-pill btn btn-success px-4" to="/signup" role="button" style={{marginRight: '10px'}}>New Account</Link>
                    <Link className="rounded-pill btn btn-primary px-4" to="/login" role="button" style={{marginRight: '10px'}}>Login</Link>
                    </form>:<button className="rounded-pill btn btn-primary px-4" onClick={handleLogout} style={{marginRight: '10px'}}>Logout ({localStorage.getItem('username')})</button>}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
