// Import Action Types Here
import { initialState } from './initialState';


// Set Default State Here

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}