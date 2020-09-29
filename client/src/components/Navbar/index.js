import React from 'react';
import { NavLink } from 'react-router-dom'; 
import MenuContainer from '../MenuContainer';

function Navbar() {
  function handleClick() {
    alert("Coming Soon!");
  }

  return (
    <div>
      <div uk-sticky="sel-target: .nav-container; cls-active: uk-navbar-sticky; bottom: #sticky-navbar">
        <div className="row nav-container">
          <div className="col-md-8">

            <div className="logo-div">
              <a href="/"><h3>Helmet Insurance</h3></a>
              <h5>For Riders. By Riders.</h5>
            </div>

          </div>
          <div className="nav-links col-md-4">

            <ul className="uk-navbar-nav">
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/"
              >Home</NavLink></li>
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/signup"
              >Get Started</NavLink></li>
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/about"
              >About</NavLink></li>
              <li><NavLink
              exact
              className="navbar__link"
              to="/"
              onClick={handleClick}
              >Blog</NavLink></li>
            </ul>

          </div>
        </div>
      </div>

      <div>
        <MenuContainer ><h1>Menu</h1></MenuContainer>
      </div>

    </div>
  )
};

export default Navbar;