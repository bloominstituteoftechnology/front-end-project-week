import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(
        createLogger(),
        thunkMiddleware
    )
);

export default store;