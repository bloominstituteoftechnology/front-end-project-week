
import NoteReducer from '../reducers/noteReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


//import from new reducers/filters
import filtersReducer from '../reducers/filters'

//possible overlap with noteReducer
const demoState = {
    filters: {
        text: "a",
        sortBy: "title",
    }
}

const middleware = applyMiddleware(thunk)

//connect to filtersReducer from reducers/filters (see above)
export default () => {
    return createStore(middleware,
        combineReducers({
            filter: filtersReducer,
            notes: NoteReducer,
        })
    );
};

