import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import './index.css';

// Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();

const store = createStore( rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Fabric>
            <App />
        </Fabric>
    </Provider>
    , document.getElementById('root'));
