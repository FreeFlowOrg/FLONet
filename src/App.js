import React, { Component } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/login"  component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
