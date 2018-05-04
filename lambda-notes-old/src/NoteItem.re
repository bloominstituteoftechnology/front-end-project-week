open Types;
open Helpers;

let component = ReasonReact.statelessComponent("NoteItem");
let make = (~note: note, ~changeVisibility, ~clickDelete, _children) => {
  ...component,
  render: _self =>
    <div className="noteItem" onClick=(_e => changeVisibility())>
      <input
        className="checkbox"
        _type="checkbox"
        checked=(note.visible)
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