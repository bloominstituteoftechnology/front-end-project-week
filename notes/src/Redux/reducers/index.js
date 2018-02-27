import { ADD_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Have fun',
      body:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque tellus gravida mauris sollicitudin pellentesque. Etiam ut lorem accumsan mauris bibendum tempus. Nam eros augue, auctor non sollicitudin nec, hendrerit eu est. Maecenas semper eros a volutpat feugiat. Nullam consectetur vel enim quis elementum. Duis dictum turpis nulla, nec tincidunt arcu semper vel. Pellentesque libero ligula, mattis vel hendrerit sed, fermentum id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, mattis ornare luctus in, vestibulum sit amet purus.\n\nPellentesque et dui maximus lorem rutrum fringilla nec ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec posuere sapien nec porttitor pellentesque. Aenean at lacinia massa. Suspendisse a rutrum turpis. Vestibulum scelerisque turpis id erat egestas, at tristique mi sagittis. Sed rhoncus, dolor ac commodo luctus, velit quam aliquet tellus, nec imperdiet lorem nibh nec est. In tincidunt condimentum magna, non rhoncus dolor pellentesque tincidunt.'",
    },
    {
      id: 1,
      title: 'Have fun',
      body:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque tellus gravida mauris sollicitudin pellentesque. Etiam ut lorem accumsan mauris bibendum tempus. Nam eros augue, auctor non sollicitudin nec, hendrerit eu est. Maecenas semper eros a volutpat feugiat. Nullam consectetur vel enim quis elementum. Duis dictum turpis nulla, nec tincidunt arcu semper vel. Pellentesque libero ligula, mattis vel hendrerit sed, fermentum id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, mattis ornare luctus in, vestibulum sit amet purus.\n\nPellentesque et dui maximus lorem rutrum fringilla nec ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec posuere sapien nec porttitor pellentesque. Aenean at lacinia massa. Suspendisse a rutrum turpis. Vestibulum scelerisque turpis id erat egestas, at tristique mi sagittis. Sed rhoncus, dolor ac commodo luctus, velit quam aliquet tellus, nec imperdiet lorem nibh nec est. In tincidunt condimentum magna, non rhoncus dolor pellentesque tincidunt.'",
    },
    {
      id: 2,
      title: 'Have fun',
      body:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque tellus gravida mauris sollicitudin pellentesque. Etiam ut lorem accumsan mauris bibendum tempus. Nam eros augue, auctor non sollicitudin nec, hendrerit eu est. Maecenas semper eros a volutpat feugiat. Nullam consectetur vel enim quis elementum. Duis dictum turpis nulla, nec tincidunt arcu semper vel. Pellentesque libero ligula, mattis vel hendrerit sed, fermentum id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, mattis ornare luctus in, vestibulum sit amet purus.\n\nPellentesque et dui maximus lorem rutrum fringilla nec ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec posuere sapien nec porttitor pellentesque. Aenean at lacinia massa. Suspendisse a rutrum turpis. Vestibulum scelerisque turpis id erat egestas, at tristique mi sagittis. Sed rhoncus, dolor ac commodo luctus, velit quam aliquet tellus, nec imperdiet lorem nibh nec est. In tincidunt condimentum magna, non rhoncus dolor pellentesque tincidunt.'",
    },
    {
      id: 3,
      title: 'Have fun',
      body:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque tellus gravida mauris sollicitudin pellentesque. Etiam ut lorem accumsan mauris bibendum tempus. Nam eros augue, auctor non sollicitudin nec, hendrerit eu est. Maecenas semper eros a volutpat feugiat. Nullam consectetur vel enim quis elementum. Duis dictum turpis nulla, nec tincidunt arcu semper vel. Pellentesque libero ligula, mattis vel hendrerit sed, fermentum id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, mattis ornare luctus in, vestibulum sit amet purus.\n\nPellentesque et dui maximus lorem rutrum fringilla nec ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec posuere sapien nec porttitor pellentesque. Aenean at lacinia massa. Suspendisse a rutrum turpis. Vestibulum scelerisque turpis id erat egestas, at tristique mi sagittis. Sed rhoncus, dolor ac commodo luctus, velit quam aliquet tellus, nec imperdiet lorem nibh nec est. In tincidunt condimentum magna, non rhoncus dolor pellentesque tincidunt.'",
    },
    {
      id: 4,
      title: 'Have fun',
      body:
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque tellus gravida mauris sollicitudin pellentesque. Etiam ut lorem accumsan mauris bibendum tempus. Nam eros augue, auctor non sollicitudin nec, hendrerit eu est. Maecenas semper eros a volutpat feugiat. Nullam consectetur vel enim quis elementum. Duis dictum turpis nulla, nec tincidunt arcu semper vel. Pellentesque libero ligula, mattis vel hendrerit sed, fermentum id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, mattis ornare luctus in, vestibulum sit amet purus.\n\nPellentesque et dui maximus lorem rutrum fringilla nec ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec posuere sapien nec porttitor pellentesque. Aenean at lacinia massa. Suspendisse a rutrum turpis. Vestibulum scelerisque turpis id erat egestas, at tristique mi sagittis. Sed rhoncus, dolor ac commodo luctus, velit quam aliquet tellus, nec imperdiet lorem nibh nec est. In tincidunt condimentum magna, non rhoncus dolor pellentesque tincidunt.'",
    },
    {
      id: 5,
      title: 'Note Name',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque tellus gravida mauris sollicitudin pellentesque. Etiam ut lorem accumsan mauris bibendum tempus. Nam eros augue, auctor non sollicitudin nec, hendrerit eu est. Maecenas semper eros a volutpat feugiat. Nullam consectetur vel enim quis elementum. Duis dictum turpis nulla, nec tincidunt arcu semper vel. Pellentesque libero ligula, mattis vel hendrerit sed, fermentum id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, mattis ornare luctus in, vestibulum sit amet purus.\n\nPellentesque et dui maximus lorem rutrum fringilla nec ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec posuere sapien nec porttitor pellentesque. Aenean at lacinia massa. Suspendisse a rutrum turpis. Vestibulum scelerisque turpis id erat egestas, at tristique mi sagittis. Sed rhoncus, dolor ac commodo luctus, velit quam aliquet tellus, nec imperdiet lorem nibh nec est. In tincidunt condimentum magna, non rhoncus dolor pellentesque tincidunt.',
    },
  ],
  counter: 6,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: (action.payload.id = state.counter),
          },
        ],
        counter: ++state.counter,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(each => {
          return each.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
