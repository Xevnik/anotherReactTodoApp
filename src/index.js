import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fbApp } from './fb';
import reducers from './reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(reducers);

fbApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    //const isAnonymous = user.isAnonymous;

  } else {

    console.log('Sign in Anonymously');
    fbApp.auth().signInAnonymously()
    .catch(error => {
      console.error(`${error.code} ${error.message}`);
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
