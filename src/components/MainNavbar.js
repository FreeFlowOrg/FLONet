import React, { Component } from 'react';
import '../App.css';

class MainNavbar extends Component {
  render() {
    return (
      <nav className="navbar main-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand main" href="#">FloNET</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-left">
              <div className="form-group main-group">
                <input type="text" className="form-control top-search" placeholder="Search" />
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" className="meet main1"></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default MainNavbar;
