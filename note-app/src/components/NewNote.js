import React from "react";
import { addNote } from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const noteBody = {
  width: "90%",
  height: 300,
  padding: "12px 20px",
  boxSizing: "border-box",
  border: "2px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f8f8f8",
  resize: "none",
  marginTop: 20
};
const buttonStyle = {
  marginTop: 20,
  width: "28%",
  backgroundColor: "#25b8bd",
  cursor: "pointer",
  color: "white",
  height: 50,
  fontWeight: "bold",
  fontSize: 20
};
const marginMain = {
  marginLeft: "5%",
  paddingTop: 55
};
const noteHeader = {
  width: "47%",
  height: 40,
  marginTop: 10
};

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: ""
    };
  }
  refresh = () => {
    this.props.notes;
  };
  componentDidMount() {
    this.refresh();
  }

  handleTextInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  newNote = e => {
    const noteObject = {
      title: this.state.title,
      note: this.state.note,
      check: false
    };
    this.props.addNote(noteObject);
    this.refresh();
    this.setState({
      title: "",
      note: ""
    });
  };
  render() {
    return (
      <div style={marginMain}>
        <h3>Create New Note:</h3>
        <input
          style={noteHeader}
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleTextInput}
        />
        <input
          style={noteBody}
          type="text"
          name="note"
          value={this.state.note}
          placeholder="Note Content"
          onChange={this.handleTextInput}
        />
        <Link to={`/`} onClick={this.newNote}>
          <button style={buttonStyle}>Save</button>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return {
    notes: state.notes
  };
};
// export default NewNote;
export default connect(mapDispatchToProps, { addNote })(NewNote);
