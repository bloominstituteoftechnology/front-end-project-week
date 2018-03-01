import { ADD_NOTE, UPDATE_SELECTED, DELETE_NOTE } from "../actions";

const initialState = [
    {
      id: 0,
      title: "Note Title",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci felis, consequat id pellentesque non, pulvinar non neque. In cursus ante vitae consequat pretium. Suspendisse porttitor at risus a scelerisque. Praesent tincidunt nulla et semper suscipit. Proin id dui sagittis, vulputate lectus vehicula, finibus erat. Donec ut faucibus dolor. Ut ultricies dictum orci, vitae molestie dui imperdiet vitae. Cras aliquam faucibus pharetra. Ut et nunc id mi porttitor viverra. Duis non accumsan dui. Maecenas lacus orci, molestie nec molestie at, maximus vitae odio.

Aliquam luctus bibendum varius. Sed congue magna et purus congue, et ornare lacus faucibus. Nullam facilisis laoreet tristique. Sed quis nibh vel diam sagittis pharetra. Vestibulum pulvinar pretium dolor, non scelerisque dolor. Quisque eleifend lectus velit, eget blandit leo cursus sed. Nam ornare risus sem, eget tincidunt neque semper et. Donec egestas scelerisque elit vel euismod. Sed tincidunt, tortor non sollicitudin varius, lacus ante porttitor velit, at ullamcorper risus nisi at ante. In aliquet sapien quis augue porta malesuada.

Donec venenatis arcu dui, quis ultricies mauris iaculis in. Mauris a ex aliquet justo accumsan dictum. Sed ut lacinia ex. Nunc laoreet ipsum ut nisi luctus posuere. Suspendisse gravida metus id suscipit mattis. Quisque pretium fringilla purus, in pretium nisl blandit vel. Suspendisse id nibh augue. Nam ornare est sit amet dapibus pharetra. Nam luctus faucibus porttitor. Cras auctor, velit in placerat tempor, leo tortor fermentum turpis, et sagittis elit nisi eu purus.`,
      selected: false
    }
  ]

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
          ...state,
          {
            id: action.id,
            title: action.payload.title,
            text: action.payload.text,
            selected: false
          }
        ];
    case UPDATE_SELECTED:
      return state.map(note => {
        if (note.id === action.payload)
          return { ...note, selected: !note.selected };
        else return note;
      });
    case DELETE_NOTE:
      return state.filter(note => {
        if (note.id !== action.payload) return note;
      })
    default:
      return state;
  }
};

export default notesReducer;
