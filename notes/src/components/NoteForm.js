import React, { Component } from "react";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = (e, obj) => {
    e.preventDefault();
    this.props.addNote(e, obj);
    this.setState({ title: "", textBody: "" });
  };

  render() {
    return (
      <div className="NoteForm">
        <form
          onSubmit={e =>
            this.add(e, {
              title: this.state.title,
              txt: this.state.textBody
            })
          }
        />
      </div>
    );
  }
}

export default NoteForm;
