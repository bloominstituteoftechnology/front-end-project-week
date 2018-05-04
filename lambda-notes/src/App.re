type noteContent = {
  title: string,
  body: string,
};

type note = {
  id: int,
  content: noteContent,
};

type state = {notes: list(note)};

type action =
  | Add(noteContent)
  | Delete(int);

let toString = ReasonReact.string;

let newNote =
  (
    () => {
      let lastId = ref(-1);
      noteContent => {
        lastId := lastId^ + 1;
        {id: lastId^, content: noteContent};
      };
    }
  )();

let delete = (id, notes) => List.filter(n => n.id !== id, notes);

let valueFromEvent = e => (
                            e
                            |> ReactEventRe.Form.target
                            |> ReactDOMRe.domElementToObj
                          )##value;

module NoteItem = {
  let component = ReasonReact.statelessComponent("NoteItem");
  let make = (~note: note, ~clickDelete, _children) => {
    ...component,
    render: _self =>
      <div className="noteTitle">
        <label> (toString(note.content.title)) </label>
        <label> (toString(note.content.body)) </label>
        <input
          _type="button"
          className="deleteNote"
          value="x"
          onClick=(_e => clickDelete())
        />
      </div>,
  };
};

module Form = {
  type state = noteContent;
  type action =
    | NewTitle(string)
    | NewBody(string);
  let component = ReasonReact.reducerComponent("Form");
  let make = (~onSubmit, _children) => {
    ...component,
    initialState: () => {title: "First note", body: "First note body"},
    reducer: (action, state) =>
      switch (action) {
      | NewTitle(newTitle) => ReasonReact.Update({...state, title: newTitle})
      | NewBody(newBody) => ReasonReact.Update({...state, body: newBody})
      },
    render: ({state, send}) =>
      <div>
        <input
          value=state.title
          _type="text"
          placeholder="Note Title"
          onChange=(e => send(NewTitle(valueFromEvent(e))))
        />
        <input
          value=state.body
          _type="text"
          placeholder="Note Body"
          onChange=(e => send(NewBody(valueFromEvent(e))))
        />
        <input
          _type="button"
          value="Add Note"
          onClick=(_e => onSubmit({title: state.title, body: state.body}))
        />
      </div>,
  };
};

let component = ReasonReact.reducerComponent("App");

let make = (~message, _children) => {
  ...component,
  initialState: () => {notes: []},
  reducer: (action, {notes}) =>
    switch (action) {
    | Add(noteContent) =>
      ReasonReact.Update({notes: [newNote(noteContent), ...notes]})
    | Delete(id) => ReasonReact.Update({notes: delete(id, notes)})
    },
  render: ({state: {notes}, send}) =>
    <div className="App">
      <h3> (toString(message)) </h3>
      <Form onSubmit=(noteContent => send(Add(noteContent))) />
      <div className="notesList">
        (
          List.map(
            note =>
              <NoteItem
                key=(string_of_int(note.id))
                note
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