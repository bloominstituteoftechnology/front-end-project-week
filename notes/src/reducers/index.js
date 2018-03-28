import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, ADD_TAG } from "../actions";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Note 1",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o. Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: ["tag1", "tag2", "tag3"]
    },
    {
      id: 2,
      title: "Note 2",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 3,
      title: "Note 3",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 4,
      title: "Note 4",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 5,
      title: "Note 5",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 6,
      title: "Note 6",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 7,
      title: "Note 7",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 8,
      title: "Note 8",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    },
    {
      id: 9,
      title: "Note 9",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes.",
      tags: []
    }
  ]
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.note, id: action.id }]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.slice().filter(note => note.id !== action.id)
      };
    case EDIT_NOTE:
      let copy = state.notes.slice();
      copy.filter(note => note.id !== action.id).push(action.note);
      return {
        ...state,
        notes: copy
      };
    case ADD_TAG:
      let tagCopy = state.notes.slice();
      console.log("TagCopy: ", tagCopy);
      let newNote = tagCopy.filter(note => note.id === action.id)[0];
      console.log(newNote);
      newNote.tags = [...newNote.tags, action.tag];
      console.log(newNote);
      tagCopy.filter(note => note.id !== action.id).push(newNote);
      console.log(tagCopy);
      return {
        ...state,
        notes: tagCopy
      };
    default:
      return state;
  }
}
