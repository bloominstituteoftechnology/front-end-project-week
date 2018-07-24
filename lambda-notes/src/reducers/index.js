import { GET_NOTES } from '../actions/index';


export default (notes=[], action) => {
    switch(action.type) {
        case GET_NOTES:
        return action.payload.data;
        default:
        return notes;
    }
};