import React, { Component } from 'react';
import profile from '../imgs/profile.jpeg';
import '../App.css';

class Stories extends Component {
  render() {
    return (
      <div className="story">
        <h2 className="main-title">Stories</h2>

        <div className="each-story">
          <div className="row">
            <div className="col-md-2">
              <div className="img-scaf">
                <img src={profile} width="80" height="80" className="profile" />
              </div>
            </div>
            <div className="col-md-10" style={{ textAlign: 'left' }}>
              <h1 className="name">Siddarth Simharaju</h1>
              <h4 className="desg">UI/UX Enthusiast</h4>
            </div>
          </div>
          <div className="post">
            <h1 className="post-title">Basics of machine Learning got easy.</h1>
            <div className="row">
              <div className="col-md-10">
                <p className="post-data">
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy.
                  In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                </p>
                <br />
                <a href="" style={{ textDecoration: 'none' }}><h5 style={{ fontWeight: 500 }}>Read more...</h5></a>
              </div>
              <div className="col-md-2">
                <ul className="rating">
                  <li className="each-rate">
                  <table style={{ width: '100%'}}>
                    <tr style={{ width: '100%'}}>
                      <td><h5>50</h5></td>&nbsp;
                      <td><div className="round">L</div></td>
                    </tr>
                  </table>
                  </li>
                  <li className="each-rate">
                  <table style={{ width: '100%'}}>
                    <tr>
                      <td><h5>50</h5></td>&nbsp;
                      <td><div className="round">C</div></td>
                    </tr>
                  </table>
                  </li>
                  <li className="each-rate">
                  <table style={{ width: '100%'}}>
                    <tr style={{ width: '100%'}}>
                      <td><h5>25</h5></td>&nbsp;
                      <td><div className="round">S</div></td>
                    </tr>
                  </table>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="each-story">
          <div className="row">
            <div className="col-md-2">
              <div className="img-scaf">
                <img src={profile} width="80" height="80" className="profile" />
              </div>
            </div>
            <div className="col-md-10" style={{ textAlign: 'left' }}>
              <h1 className="name">Siddarth Simharaju</h1>
              <h4 className="desg">UI/UX Enthusiast</h4>
            </div>
          </div>
          <div className="post">
            <h1 className="post-title">Basics of machine Learning got easy.</h1>
            <div className="row">
              <div className="col-md-10">
                <p className="post-data">
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy.
                  In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                </p>
                <br />
                <a href="" style={{ textDecoration: 'none' }}><h5 style={{ fontWeight: 500 }}>Read more...</h5></a>
              </div>
              <div className="col-md-2">
                <ul className="rating">
                  <li className="each-rate">
                  <table style={{ width: '100%'}}>
                    <tr style={{ width: '100%'}}>
                      <td><h5>50</h5></td>&nbsp;
                      <td><div className="round">L</div></td>
                    </tr>
                  </table>
                  </li>
                  <li className="each-rate">
                  <table style={{ width: '100%'}}>
                    <tr>
                      <td><h5>50</h5></td>&nbsp;
                      <td><div className="round">C</div></td>
                    </tr>
                  </table>
                  </li>
                  <li className="each-rate">
                  <table style={{ width: '100%'}}>
                    <tr style={{ width: '100%'}}>
                      <td><h5>25</h5></td>&nbsp;
                      <td><div className="round">S</div></td>
                    </tr>
                  </table>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Stories;
