import React from "react";
import axios from "axios";

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
      text: this.state.text
    };
    axios
      .post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response => {
        this.setState({ title: "", text: "" });
        this.props.handleData(response.data);
      })
      .catch(err => console.log(err));
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
            <div
              className="InputTitle"
              type="text"
              placeholder="Note Title"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
            <div
              className="InputContent"
              type="text"
              placeholder="Note Content"
              onChange={this.handleChange}
              name="text"
              value={this.state.text}
            />
          </form>
          <div className="DivClick" onClick={this.createNote}>
            Save
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNote;
