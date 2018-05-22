import React from "react";
import { addNote } from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
    };
  }

  componentDidMount() {
    this.props.notes;
  }

  refresh = () => {
    this.props.notes;
  };

  handleTextInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  newNote = e => {
    const noteOject = {
      title: this.state.title,
      note: this.state.note,
      check: false,
    };
    this.props.addNote(noteOject);
    this.refresh();
    this.setState({
      title: "",
      note: ""
    });
  };
  render() {
    return (
      <div>
        <h3>Create New Note:</h3>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleTextInput}
        />
        <input
          type="text"
          name="note"
          value={this.state.note}
          placeholder="Note Content"
          onChange={this.handleTextInput}
        />
        <Link to={`/`} onClick={this.newNote}>
          <button>Save</button>
        </Link>
      </div>
    );
  }
}

//export default NewNote;

const mapDispatchToProps = state => {
  return {
    note: this.state.notes
  };
};

export default connect(mapDispatchToProps, { addNote })(NewNote);
