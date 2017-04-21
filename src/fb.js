import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCy2eZ6YULcFKm7Dp3lVWIjbqmTcI0DZPQ",
    authDomain: "reacttodo-2d221.firebaseapp.com",
    databaseURL: "https://reacttodo-2d221.firebaseio.com",
    projectId: "reacttodo-2d221",
    storageBucket: "reacttodo-2d221.appspot.com",
    messagingSenderId: "1024370607226"
  };

export const fbApp = firebase.initializeApp(config);
export const database = firebase.database();
