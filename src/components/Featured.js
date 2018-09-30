import React, { Component } from 'react';
import '../App.css';

class Featured extends Component {
  render() {
    return (
      <div className="featured" style={{ textAlign: 'left' }}>
        <h2 className="main-title" style={{ marginLeft: '1em' }}>Featured</h2>

        <div className="features">
          <div className="each-feature">
            <h3 className="next-title">Basics of machine Learning got easy</h3>
            <h5 className="next-author">By Siddharth Simharju</h5>
            <hr style={{ width: '96%' }}/>
          </div>

          <div className="each-feature">
            <h3 className="next-title">Basics of machine Learning got easy</h3>
            <h5 className="next-author">By Siddharth Simharju</h5>
            <hr style={{ width: '96%' }}/>
          </div>

          <div className="each-feature">
            <h3 className="next-title">Basics of machine Learning got easy</h3>
            <h5 className="next-author">By Siddharth Simharju</h5>
            <hr style={{ width: '96%' }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
