import React, { Component } from 'react';
//import { fbApp } from '../fb';

class SignIn extends Component {
  handleSignIn() {
  }

  render() {
    return (
          <button className='btn navbar-btn pull-right'
            onClick={() => this.handleSignIn()}>
            <span className="glyphicon glyphicon-log-in"></span> Sign in
          </button>
    );
  }
}

export default SignIn;
