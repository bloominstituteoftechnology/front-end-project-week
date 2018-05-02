import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';



ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'; 
// import thunk from 'redux-thunk';
// import reducers from './reducers';


// const store = createStore( applyMiddleware(thunk, logger));

// ReactDOM.render(
//     <Provider store={store}>
//     <App />
//   </Provider>,
//    document.getElementById('root'));
// registerServiceWorker();
