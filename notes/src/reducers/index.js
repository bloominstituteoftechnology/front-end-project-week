import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';



const initialState = [{
    _id: "ka098",
    title: "First Note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor est quis gravida malesuada. Quisque lobortis lacus sed semper faucibus. Fusce sed lectus mi. Phasellus volutpat ac velit in aliquam. Curabitur laoreet mollis malesuada. Phasellus tristique id nunc id convallis. Vivamus eu diam in eros placerat convallis.",
    createdAt: 11235123454
},
{
    _id: "ka099",
    title: "Second Note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor est quis gravida malesuada. Quisque lobortis lacus sed semper faucibus. Fusce sed lectus mi. Phasellus volutpat ac velit in aliquam. Curabitur laoreet mollis malesuada. Phasellus tristique id nunc id convallis. Vivamus eu diam in eros placerat convallis.",
    createdAt: 1123512323424
},
{
    _id: "ka100",
    title: "Third Note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor est quis gravida malesuada. Quisque lobortis lacus sed semper faucibus. Fusce sed lectus mi. Phasellus volutpat ac velit in aliquam. Curabitur laoreet mollis malesuada. Phasellus tristique id nunc id convallis. Vivamus eu diam in eros placerat convallis.",
    createdAt: 11235123455,
},
{
    _id: "ka101",
    title: "Fourth Note",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor est quis gravida malesuada. Quisque lobortis lacus sed semper faucibus. Fusce sed lectus mi. Phasellus volutpat ac velit in aliquam. Curabitur laoreet mollis malesuada. Phasellus tristique id nunc id convallis. Vivamus eu diam in eros placerat convallis.",
    createdAt: 11235123455,
}];
//                    Current application state, {action object}
// retruns: the next application state
const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch(action.type) {
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
        state.forEach((item, index) => {
            if (item._id === action.payload._id) {
                temp.splice(index, 1);
                return;
            }
        });
        temp.push(action.payload);
        return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            return temp;
        default:
            // returns: the next application state
            return state;
    }
}

export default notesReducer;