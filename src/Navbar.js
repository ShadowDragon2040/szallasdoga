import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

function Navbar(props) {
    
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>

            {props.bejelenkezve ?
            <li className="nav-item">
              <Link className="nav-link" to="/AdminHome">Admin</Link>
            </li> : <div></div>
            } 

            {props.bejelenkezve ?
            <li className="nav-item">
              <Link className="nav-link" to="/NewCard">New Card</Link>
            </li> : <div></div>
            }

          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navbar