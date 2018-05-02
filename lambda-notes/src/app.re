type note = {
  id: int,
  title: string,
  text: string,
  visible: bool,
};

type state = {notes: list(note)};

/* TODO figure out if Add needs to take a tuple? */
/* TODO rework ToggleVisibility to work with a filter */
type action =
  | Add(string)
  | ToggleVisibility(int)
  | Delete(int);

let toString = ReasonReact.string;

let noteId = ref(0);

let newNote = text => {
  noteId := noteId^ + 1;
  {id: noteId^, title: "Note title", visible: true, text};
};

let toggleVisibility = (id, notes) =>
  List.map(n => n.id == id ? {...n, visible: ! n.visible} : n, notes);

let delete = (id, notes) => List.filter(n => n.id != id, notes);

let valueFromEvent = e : string => (
                                     e
                                     |> ReactEventRe.Form.target
                                     |> ReactDOMRe.domElementToObj
                                   )##value;

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState: () => {notes: []},
  reducer: (action, state) =>
    switch (action) {
    | Add(text) =>
      ReasonReact.Update({notes: [newNote(text), ...state.notes]})
    | ToggleVisibility(id) =>
      ReasonReact.Update({notes: toggleVisibility(id, state.notes)})
    | Delete(id) => ReasonReact.Update({notes: delete(id, state.notes)})
    },
  render: ({state: {notes}, send}) =>
    <div className="App"> <h3> (toString("Lambda Notes")) </h3> </div>,
};
