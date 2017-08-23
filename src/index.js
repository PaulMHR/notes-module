import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MainRoute from './mainRoute';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD-7mnH-T9QMklpS5BT9ubazX0nnX0vrks",
    authDomain: "notorious-7ebdf.firebaseapp.com",
    databaseURL: "https://notorious-7ebdf.firebaseio.com",
    projectId: "notorious-7ebdf",
    storageBucket: "",
    messagingSenderId: "783728268246"
};
firebase.initializeApp(config);

ReactDOM.render(
	<MainRoute />,
    document.getElementById('root')
);