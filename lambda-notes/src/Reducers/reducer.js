import { ADD_NOTE } from '../Actions/index';
import { DELETE_NOTE } from '../Actions/index';
// import { EDIT_NOTE } from '../Actions/index';

let initialState = [
    { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a mattis tortor, at aliquet sem. Nulla elementum erat vel orci ullamcorper luctus. Duis porta justo posuere dui dignissim posuere. Vestibulum a lectus ornare velit posuere dictum. Nullam suscipit tempor neque, at accumsan urna tincidunt ut. In in tincidunt mauris. Suspendisse ac urna vitae massa lacinia convallis. Integer elit purus, ultrices a lorem vel, ullamcorper vulputate lectus. Vivamus tempus lobortis diam vel fermentum. Suspendisse sed ex at ex sodales placerat. In diam odio, sagittis sit amet gravida sit amet, interdum at urna.', id: 0 },
    { title: 'Note 2', content: 'Vestibulum accumsan dui quis odio ultricies pharetra. Quisque vitae mauris ut arcu vehicula sagittis sit amet sed mi. Nulla ac erat eu est viverra semper nec et urna. Cras feugiat venenatis sem, a gravida metus fringilla a. Fusce vel faucibus ipsum. Morbi ipsum felis, rutrum eu ultricies at, lobortis ut justo. Pellentesque vestibulum aliquet mi a hendrerit. Praesent rutrum ac turpis sed lacinia. Nunc metus arcu, imperdiet varius suscipit vel, sodales at sem. Integer mollis sapien ut tellus ultrices euismod. Nulla quis elementum lectus.', id: 1 }]

const reducer = (notes = [], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return notes.concat(action.payload);
        case DELETE_NOTE:
            console.log('STATE', notes)
            return notes.filter(note => note.id !== action.payload.id);
        // case EDIT_NOTE:
        //     return notes;        
        default:
            return notes
    }
}

export default reducer;
