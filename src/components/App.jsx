import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Landing from './SignInLanding';
import Todos from './Todos';
import SignIn from './SignInButton';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <Link className="navbar-brand" to="/">
            Todo App
          </Link>
          <SignIn />
        </nav>
          <div className='col-xs-12'>
            <Route exact path='/' component={Landing} />
            <Route path='/todos' component={Todos} />
          </div>
      </div>
    );
  }
}

export default App;
