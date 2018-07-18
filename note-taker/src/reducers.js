
import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import createNewReducer from './app/create-new/duck';
import noteViewReducer from './app/note-view/duck';
const rootReducer = combineReducers({
    home: homeReducer,
    createNew: createNewReducer,
    noteView: noteViewReducer,
});

export default rootReducer;

