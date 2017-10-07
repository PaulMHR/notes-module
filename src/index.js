import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MainPage from './main';
import reducer from './reducers';

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
//let storage = firebase.storage();

// Initialize Redux Store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
	    <MainPage />
    </Provider>,
    document.getElementById('root')
);