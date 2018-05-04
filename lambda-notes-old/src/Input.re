open Types;
open Helpers;

type state = string;

let component = ReasonReact.reducerComponent("Input");

let make = (~onSubmit, _children) => {
  ...component,
  initialState: () => { title: "", content: "" },
  reducer: (newNote, _) => ReasonReact.Update(newNote),
  render: ({state, send}) =>
    <form>
      <input
        className="newNoteTitle"
        value=state.title
        _type="text"
        placeholder="Note Title"
        onChange=(e => send(valueFromEvent(e)))
        onKeyDown=(
          e =>
            if (ReactEventRe.Keyboard.key(e) == "Enter") {
              onSubmit(state);
              send("");
            }
        )
      />
      <input
        className="newNoteContent"
        value=state.content
        _type="text"
        placeholder="Note Content"
        onChange=(e => send(valueFromEvent(e)))
        onKeyDown=(
          e =>
            if (ReactEventRe.Keyboard.key(e) == "Enter") {
              onSubmit(state);
              send("");
            }
        )
      />
    </form>,
};
