import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Reducer
import reducer from './reducer';

// List of Components
import App from './App';

render(
  <Provider
    store={createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
