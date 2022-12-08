import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="nav">
      <Link to='/' >
      <div className="left-div">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
      </div>
      </Link>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/1296/1296902.png"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
         <li> <Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


