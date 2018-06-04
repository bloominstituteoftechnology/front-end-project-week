import { DELETE, EDIT, CREATE } from '../actions'; 

const initialState = [
    {
        _id: 'qazwsx',
        title: 'First Note',
        body: 'First lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
        createdAt: 1527789175361
      },
      {
        _id: 'plmokn',
        title: 'Second Note',
        body: 'Second, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
        createdAt: 1527789175370
      },
      {
        _id: 'ijnuhb',
        title: 'Third Note',
        body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
        createdAt: 1527789175375
      },
      {
        _id: 'edcrfv',
        title: 'Forth Note',
        body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
        createdAt: 1527789175390
      },
];

const noteReducer = (state = initialState, action) => {
    let copyArray = Array.from(state);
    switch (action.type) {
        case DELETE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    copyArray.splice(index, 1);
                    return;
                }
            });
            return copyArray;

        case EDIT:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    copyArray.splice(index, 1);
                    return;
            }
        });
        copyArray.push(action.payload);
        return copyArray;

        case CREATE:
            copyArray.push(action.payload);
            return copyArray;

        default:
            return state;
    } 
}
export default noteReducer;