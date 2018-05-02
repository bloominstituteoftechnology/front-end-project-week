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

module NoteItem = {
  let component = ReasonReact.statelessComponent("NoteItem");
  let make = (~note: note, ~changeVisibility, ~clickDelete, _children) => {
    ...component,
    render: _self =>
      <div className="noteItem" onClick=(_e => changeVisibility())>
        <input
          className="checkbox"
          _type="checkbox"
          checked=(Js.Boolean.to_js_boolean(note.visible))
        />
        <label> (toString(note.text)) </label>
        <input
          _type="button"
          className="deleteNote"
          value="x"
          onClick=(_e => clickDelete())
        />
      </div>,
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
      <div className="notesList">
        (
          List.map(
            note =>
              <NoteItem
                key=(string_of_int(note.id))
                note
                changeVisibility=(() => send(ToggleVisibility(note.id)))
                clickDelete=(() => send(Delete(note.id)))
              />,
            notes,
          )
          |> Array.of_list
          |> ReasonReact.array
        )
      </div>
    </div>,
};
