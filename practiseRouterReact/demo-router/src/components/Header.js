import React,{Component} from "react";
import { NavLink } from "react-router-dom";

import "../App.css";
class Header extends Component {
  render() { 
    return ( 
    
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink 
            to={{
              pathname: "/"
            }}
            className="link"
          >
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to={{pathname: "/about"}} className="link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/topics" className="link">
                  Topics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="link">
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

      </div>
   
     );
  }
}
 
export default Header;

