import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [
    {title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
    {title: 'Note 8', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis. Aliquam vestibulum morbi blandit cursus risus at ultrices. At lectus urna duis convallis convallis tellus id interdum velit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Aliquet bibendum enim facilisis gravida. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nunc sed blandit libero volutpat sed cras ornare.'},
  ],
}

export default (state=initialState, action) => {
  switch(action.type) {
    case CREATE_NOTE:
      return Object.assign({}, {
        notes: [...state.notes, action.payload]
      });
    case DELETE_NOTE:
      state.notes.splice(action.payload, 1);
      return Object.assign({}, {
        notes: [...state.notes]
      });
      case EDIT_NOTE:
      state.notes[action.id] = action.payload;
      return Object.assign({}, {
        notes: [...state.notes]
      })
    default:
      return state;
  }
}