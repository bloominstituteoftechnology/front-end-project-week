import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, MARK_COMPLETE} from '../reducers';
import update from 'immutability-helper';

const initialState = {

};

export default (notes=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
        const addedState = update(notes, {$push: [action.note]});
        return addedState
    }
}
