/* TODO figure out if Add needs to take a tuple? */
/* TODO rework ToggleVisibility to work with a filter */
/* TODO break Input into its own file */
type note = {
  id: int,
  title: string,
  text: string,
  visible: bool,
};

type state = {notes: list(note)};

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
  List.map(n => n.id === id ? {...n, visible: ! n.visible} : n, notes);

let delete = (id, notes) => List.filter(n => n.id !== id, notes);

let valueFromEvent = e : string => (
                                     e
                                     |> ReactEventRe.Form.target
                                     |> ReactDOMRe.domElementToObj
                                   )##value;

module Input = {
  type state = string;
  let component = ReasonReact.reducerComponent("Input");
  let make = (~onSubmit, _children) => {
    ...component,
    initialState: () => "",
    reducer: (newNote, _) => ReasonReact.Update(newNote),
    render: ({state: note, send}) =>
      <input
        className="newNoteContent"
        value=note
        _type="text"
        placeholder="Note Content"
        onChange=(e => send(valueFromEvent(e)))
        onKeyDown=(
          e =>
            if (ReactEventRe.Keyboard.key(e) == "Enter") {
              onSubmit(note);
              send("");
            }
        )
      />,
  };
};

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState: () => {notes: []},
  reducer: (action, {notes}) =>
    switch (action) {
    | Add(text) => ReasonReact.Update({notes: [newNote(text), ...notes]})
    | ToggleVisibility(id) =>
      ReasonReact.Update({notes: toggleVisibility(id, notes)})
    | Delete(id) => ReasonReact.Update({notes: delete(id, notes)})
    },
  render: ({state: {notes}, send}) =>
    <div className="App">
      <h3> (toString("Lambda Notes")) </h3>
      <Input onSubmit=(note => send(Add(note))) />
    </div>,
};
