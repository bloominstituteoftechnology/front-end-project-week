import React from "react";

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.handleSetCurrent(id);
  }

  render() {
    return (
      <div>
        <p> Are you sure you want to delete that?</p>
        <button onClick={this.props.handleDeleteNote}>Delete</button>
        <button onClick={this.props.toggleDeleting}>No</button>
      </div>
    );
  }
}

export default DeleteNote;
