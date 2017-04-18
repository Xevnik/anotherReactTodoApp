import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Todo App</Link>
            </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to='/signin'>
                  <span className="glyphicon glyphicon-log-in"></span> Sign in
                </Link></li>
              </ul>
            </div>
          </nav>
        <Jumbotron>
          <Grid>
            <h3>What do I need to do today?</h3>
            <p>
              <Button
                bsStyle="success"
                href="/"
                target="_blank">
                Add a todo item
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
