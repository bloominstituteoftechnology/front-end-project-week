[%bs.raw {|require('./App.css')|}];

[@bs.module] external logo : string = "./logo.svg";

type noteContent = { title: string, body: string };

type note = {
  id: int,
  content: noteContent,
};

type state = {notes: list(note)};

let toString = ReasonReact.string;

let component = ReasonReact.statelessComponent("App");

let make = (~message, _children) => {
  ...component,
  /* reducer: (_action, _state: state) => ReasonReact.NoUpdate, */
  render: _self =>
    <div className="App">
      <div className="App-header">
        <img src=logo className="App-logo" alt="logo" />
        <h2> (ReasonReact.string(message)) </h2>
      </div>
      <div></div>
    </div>,
};
