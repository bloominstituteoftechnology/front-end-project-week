import React from "react";
import "./styles.css";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveEdit = (ev, id) => {
    this.props.saveEdit(ev, id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="mainSection">
        <div className="editNote">
          <h2>Edit Note</h2>
          <form onSubmit={ev => this.saveEdit(ev, this.props.note.id)}>
            <input
              className="titleInput"
              onChange={ev => this.props.changeHandler(ev)}
              type="text"
              name="title"
              value={this.props.title}
              placeholder={this.props.note.title}
            />
            <input
              className="contentInput"
              onChange={ev => this.props.changeHandler(ev)}
              type="text"
              name="content"
              value={this.props.content}
              placeholder={this.props.note.description}
            />
            <button type="submit">Save Edit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditNote;
