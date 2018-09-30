import React, { Component } from 'react';
import '../App.css';

class TrendingTopics extends Component {
  render() {
    return (
      <div className="trending" style={{ textAlign: 'left' }}>
        <h2 className="main-title" style={{ marginLeft: '1em' }}>Trending Topics</h2>

        <div className="each-following">
          <div className="row">
            <div className="col-md-9">

            </div>
            <div className="col-md-3">
              <h4 style={{ fontWeight: 100 }}><a href="" style={{ fontSize: '14px' }}>See All</a></h4>
            </div>
          </div>

          <div className="row whole">
            <div className="col-md-9 fname">
              Machine Learning
            </div>
            <div className="col-md-3">
              <div className="round"></div>
            </div>
          </div>

          <div className="row whole">
            <div className="col-md-9 fname">
              Data Sciences
            </div>
            <div className="col-md-3">
              <div className="empty"></div>
            </div>
          </div>

          <div className="row whole">
            <div className="col-md-9 fname">
              Deep Learning
            </div>
            <div className="col-md-3">
              <div className="round"></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default TrendingTopics;
