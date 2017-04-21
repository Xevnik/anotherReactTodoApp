import React, { Component } from 'react';

class Landing extends Component{
  render() {
    return (
        <div>
          <button className='btn btn-primary'>
            Sign in with Google
          </button>
          <button className='btn'>
            Continue without signing up
          </button>
        </div>
    );
  }
}

export default Landing;
