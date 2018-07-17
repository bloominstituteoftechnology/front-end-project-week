import React from "react";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => note.id === Number(id))
    this.props.handleSetCurrent(note[0]);
  }

  editCompleted = () => {this.props.handleEditNote(this.props.match.params.id)}

  render() {
    return (
      <form>
        <input
          name="title"
          value={this.props.currentNote.title}
          onChange={this.props.handleEditTitle}
        />

        <input
          name="content"
          value={this.props.currentNote.content}
          onChange={this.props.handleEditContent}
        />
        <div onClick={this.editCompleted}>Update</div>
      </form>
    );
  }
}

export default EditNote;
