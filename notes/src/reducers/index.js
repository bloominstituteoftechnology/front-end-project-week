import { addNote } from "../actions";

const initialState = {
  notes: [
    {
      title: "Note 1",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o. Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes."
    },
    {
      title: "Note 2",
      note:
        "Cupcake ipsum dolor sit amet tiramisu chocolate cake. Danish jelly-o sesame snaps powder tootsie roll dragée. Tiramisu candy canes sweet roll croissant gummies I love jelly-o.  Bear claw tootsie roll pastry icing bear claw lollipop powder. Halvah pie cake gingerbread topping dessert. Chocolate bar brownie chocolate bar cotton candy candy sweet roll jujubes."
    }
  ]
};

export default function notes(state = initialState, action) {
  return state;
}
