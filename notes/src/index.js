import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
