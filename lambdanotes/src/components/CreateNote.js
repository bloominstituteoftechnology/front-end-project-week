import React from "react";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveNote = ev => {
    this.props.saveNote(ev);
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div className="mainSection">
        <div className="createNote">
          <h2>Create a New Note:</h2>
          <form onSubmit={ev => this.saveNote(ev)}>
            <input className="titleInput"
              onChange={ev => this.props.changeHandler(ev)}
              type="text"
              name="title"
              value={this.props.title}
              placeholder="Note Title"
            />
            <br/>
            <input className="contentInput"
              onChange={ev => this.props.changeHandler(ev)}
              type="text"
              name="content"
              value={this.props.content}
              placeholder="Note content"
            />
            <br/>
            <button type="Submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;
