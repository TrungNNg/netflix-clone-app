import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyAS6psntytii76FmMbJxcDvRISaQiLNLHA",
    authDomain: "netflix-clone-e128e.firebaseapp.com",
    databaseURL: "https://netflix-clone-e128e.firebaseio.com",
    projectId: "netflix-clone-e128e",
    storageBucket: "netflix-clone-e128e.appspot.com",
    messagingSenderId: "782717606691",
    appId: "1:782717606691:web:daf5050b91f72116004a96"
}

const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);