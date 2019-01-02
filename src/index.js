import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(  
    rootReducer,
    middleware
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root'));