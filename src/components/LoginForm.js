import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <form>
          <div className="form-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">E</h2></td>
                <td><input type="email" className="form-control" placeholder="Email" /></td>
              </tr>
            </table>
          </div>
          <div className="form-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">P</h2></td>
                <td><input type="password" className="form-control" placeholder="Password" /></td>
              </tr>
            </table>
          </div>
          <button type="submit" className="btn btn-default login-btn">Login</button>
          <p className="no-acc">Dont have an account? <a href="/singup" className="signup-link">SIGNUP</a></p>
        </form>
        <div className="tail"></div>
      </div>
    );
  }
}

export default LoginForm;
