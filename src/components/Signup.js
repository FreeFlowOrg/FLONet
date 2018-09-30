import React, { Component } from 'react';
import AuthNavbar from './AuthNavbar';
import '../App.css';

class Signup extends Component {
  render() {
    return (
      <div className="App container-fluid" id="signup-screen">
        <AuthNavbar />
      </div>
    );
  }
}

export default Signup;
