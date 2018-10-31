import React from "react";
import axios from "axios";
import SideView from "./SideView";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    };
  }
  createNote = () => {
    const note = {
      title: this.state.title,
      content: this.state.text
    };
    axios
      .post("http://localhost:8000/api/notes/", note)
      .then(response => {
        this.setState({ title: "", text: "" });
        console.log("THIS IS THE RESPONSE: ", response.data);
        this.props.fetchNotes();
        this.props.history.push("/notes");
        // this.props.handleChange(response.data);
      })
      .catch(error => console.log(error));
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="Background-color">
        <div className="SubmitContainer">
          <h3>Create New Note:</h3>
          <form>
            <div className="InputDivs">
              <input
                className="InputTitle"
                type="text"
                placeholder="Note Title"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
              />
              <input
                className="InputContent"
                type="text"
                placeholder="Note Content"
                onChange={this.handleChange}
                name="text"
                value={this.state.text}
              />
            </div>
          </form>
          <button className="SaveNote" onClick={this.createNote}>
            Save
          </button>
        </div>
        <SideView />
      </div>
    );
  }
}

export default CreateNote;
