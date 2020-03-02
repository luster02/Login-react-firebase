import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { generateStore } from './redux/store'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './firebase'

const store = generateStore()

const AppWithRouter = () => <Router><App/></Router>
const AppWithFirebase = () => <FirebaseAppProvider firebaseConfig={firebaseConfig} ><AppWithRouter/></FirebaseAppProvider> 
const AppWithRedux = () => <Provider store={store} >< AppWithFirebase/></Provider>

ReactDOM.render(<AppWithRedux />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
