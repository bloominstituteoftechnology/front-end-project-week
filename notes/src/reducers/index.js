import { addNote, editNote, deleteNote } from '../actions';

const initialState = {
  notes: [
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah testing update',
      id: 0,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah this is note 1',
      id: 1,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah this is note 2',
      id: 2,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 3,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 4,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 5,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 6,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 7,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 8,
    },
  ],
  note: {
    title: 'Note Name',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, sollicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.'
  },
  nextid: 9
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'addNote':
      return { ...state, notes: [...state.notes, action.note], nextid: state.nextid++ };
    case 'editNote':
      return { ...state };
    case 'deleteNote':
      return { ...state };
    default:
      return state;
    }
};
