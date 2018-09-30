import React, { Component } from 'react';
import AuthNavbar from './AuthNavbar';
import SignupForm from './SignupForm';
import '../App.css';

class Signup extends Component {
  render() {
    return (
      <div className="App container-fluid" id="signup-screen">
        <div className="full-screen">
          <AuthNavbar />
          <div className="row">
            <div className="col-md-6">
              <h1 className="welcome" style={{ fontWeight: 300 }}>Welcome to <br /> FLONET !!</h1>
            </div>
            <div className="col-md-6">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
