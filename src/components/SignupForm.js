import React, { Component } from 'react';
import '../App.css';

class SignupForm extends Component {
  render() {
    return (
      <div className="signup-form">
        <form>
          <div className="form-group inp-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">F</h2></td>
                <td><input type="text" className="form-control inp" placeholder="First Name" /></td>
              </tr>
            </table>
          </div>
          <div className="form-group inp-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">L</h2></td>
                <td><input type="text" className="form-control inp" placeholder="Last Name" /></td>
              </tr>
            </table>
          </div>
          <div className="form-group inp-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">E</h2></td>
                <td><input type="email" className="form-control inp" placeholder="Email" /></td>
              </tr>
            </table>
          </div>
          <div className="form-group inp-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">P</h2></td>
                <td><input type="password" className="form-control inp" placeholder="Password" /></td>
              </tr>
            </table>
          </div>
          <button type="submit" className="btn btn-default login-btn">Signup</button>
          <p className="no-acc">Already have an account? <a href="/login" className="signup-link">LOGIN</a></p>
        </form>
        <div className="tail"></div>
      </div>
    );
  }
}

export default SignupForm;
