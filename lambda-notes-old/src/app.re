/* TODO Figure out if Add needs to take a tuple? */
/* TODO Rework ToggleVisibility to work with a filter */
/* DONE Break NoteItem into its own file */
/* DONE Break Input into its own file */
open Types;
open Helpers;

type state = {notes: list(note)};

type action =
  | Add(noteContent)
  | ToggleVisibility(int)
  | Delete(int);

let noteId = ref(0);

let newNote = text => {
  noteId := noteId^ + 1;
  {id: noteId^, title: "test", visible: true, text}
};

let toggleVisibility = (id, notes) =>
  List.map(n => n.id === id ? {...n, visible: ! n.visible} : n, notes);

let delete = (id, notes) => List.filter(n => n.id !== id, notes);


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
