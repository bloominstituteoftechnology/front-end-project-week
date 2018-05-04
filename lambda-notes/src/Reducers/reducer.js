import { ADD_NOTE } from '../Actions/index'

const reducer = (notes = [{ title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a mattis tortor, at aliquet sem. Nulla elementum erat vel orci ullamcorper luctus. Duis porta justo posuere dui dignissim posuere. Vestibulum a lectus ornare velit posuere dictum. Nullam suscipit tempor neque, at accumsan urna tincidunt ut. In in tincidunt mauris. Suspendisse ac urna vitae massa lacinia convallis. Integer elit purus, ultrices a lorem vel, ullamcorper vulputate lectus. Vivamus tempus lobortis diam vel fermentum. Suspendisse sed ex at ex sodales placerat. In diam odio, sagittis sit amet gravida sit amet, interdum at urna.', id: 0}], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return notes.concat(action.payload);
        default:
            return notes
    }
}

export default reducer;
