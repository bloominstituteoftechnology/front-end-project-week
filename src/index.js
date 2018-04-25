import React from 'react'
import firebase from 'firebase'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider, combineReducers } from 'react-redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { createStore, compose } from 'redux'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

firebase.initializeApp({
  apiKey: "AIzaSyDMOIq693Xaj6Ieo10kJCo_uY30fY6lT-8",
  authDomain: "lambda-front-end-f3a17.firebaseapp.com",
  databaseURL: "https://lambda-front-end-f3a17.firebaseio.com",
  projectId: "lambda-front-end-f3a17",
  messagingSenderId: "852639223993"
})

const fireconfig = {
  userProfile: 'users',
  dispatchRemoveAction: true
}

const createStoreWithFirebase = compose(reactReduxFirebase(firebase, fireconfig))(createStore)
const store = createStoreWithFirebase(firebaseReducer)

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
)

registerServiceWorker()
