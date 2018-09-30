import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import FollowingTopics from './FollowingTopics';
import TrendingTopics from './TrendingTopics';
import Stories from './Stories';
import Featured from './Featured';
import '../App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <MainNavbar />
        <div className="row">
          <div className="col-md-3">
            <FollowingTopics />
            <TrendingTopics />
          </div>
          <div className="col-md-6">
            <Stories />
          </div>
          <div className="col-md-3">
            <Featured />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
