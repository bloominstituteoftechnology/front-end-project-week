import * as AT from "../actions/actionTypes";

const initialState = [
  {
    title: "Sample Title",
    content: "Sample content of this note",
    id: 0
  },
  {
    title: "Sample Text",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 1
  },
  {
    title: "Sample Text",
    content: "SO WOW MUCH COOL",
    id: 2
  },
  {
    title: "Sample Text",
    content: "SO WOW MUCH COOL",
    id: 3
  },
  {
    title: "Sample Text",
    content: "SO WOW MUCH COOL",
    id: 4
  }
];

const noteReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case AT.CREATE_NOTE:
      return state = [...state, action.payload];
    default:
      return state;
  }
};

export default noteReducer;
