import {
  ADD,
  EDIT,
  DELETE,
} from '../Actions';

const generateDummyNotes = () => {
  const dummyArr = [];
  for (let i = 0; i < 6; i++) {
    dummyArr.push({
      id: i.toString(),
      title: 'Note Title',
      text: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis consectetur adipiscing elit. Nullam odio ex, pulvinar sed lectus eu, vestibulum tempor ante. Sed scelerisque ut massa nec elementum. Praesent ut sagittis dui, vel imperdiet libero. Aenean vel tempus metus. Aliquam interdum est mauris, vitae aliquet nisl posuere sit amet. Pellentesque quis leo venenatis, euismod lacus non, tincidunt dolor. Mauris bibendum sem quis lorem sodales pulvinar. Nam nisl magna, ultricies ullamcorper quam nec, semper rhoncus nisl.

      Curabitur posuere, nibh ac rhoncus tempus, turpis massa euismod dolor, vel suscipit eros sapien eget odio. In imperdiet nibh sit amet lobortis sagittis. Sed sit amet finibus velit. Phasellus et ultricies sem, in sollicitudin massa. Quisque ornare ex sit amet neque lacinia facilisis. Sed quis viverra lectus. Cras sagittis sagittis convallis. Praesent augue mi, gravida non libero sit amet, porttitor finibus est. Praesent aliquet facilisis augue quis feugiat. Cras laoreet at dui iaculis euismod. Suspendisse mollis consequat purus, id pulvinar neque sodales a. Sed et dolor semper, vestibulum justo id, gravida urna. Morbi arcu tortor, molestie eu cursus sit amet, consequat quis mauris. Integer vitae nulla sed lacus porta faucibus in nec odio.
      
      Pellentesque fermentum eleifend semper. Praesent ac ultrices turpis, ut tincidunt orci. Nulla eleifend nibh quis elit finibus, vehicula sagittis urna volutpat. Phasellus eu nibh id diam posuere tincidunt. Vestibulum malesuada scelerisque iaculis. Mauris vitae ligula diam. Curabitur leo urna, blandit vitae erat sed, sollicitudin eleifend enim. Cras tempor et enim vestibulum pretium. Nam ac ante in ipsum bibendum maximus. Nam hendrerit suscipit dapibus. Pellentesque a ipsum tellus.`,
    })
  }
  return dummyArr;
}

const initialState = {
  notes: generateDummyNotes(),
  loading: false,
  error: null,
}

export const notesReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case EDIT:
      const updatedNotes= state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      return {
        ...state,
        notes: updatedNotes,
      };
    case DELETE:
      const filteredNotes = state.notes.filter(note => note.id !== action.payload.id);
      return {
        ...state,
        notes: filteredNotes,
      };
    default:
      return {
        ...state,
      };
  }
}