import React from "react";

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.handleSetCurrent(id);
  }

  deleteCompleted =() => {this.props.handleDeleteNote(this.props.match.params.id)}

  render() {
    return (
      <div>
        <p> Are you sure you want to delete that?</p>
        <button onClick={this.deleteCompleted}>Delete</button>
        <button onClick={this.props.toggleDeleting}>No</button>
      </div>
    );
  }
}

export default DeleteNote;
