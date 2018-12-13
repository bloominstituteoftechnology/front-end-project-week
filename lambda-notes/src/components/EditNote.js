import React from "react";
import axios from "axios";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      title: "",
      message: "",
      _id: ""
    };
  }

  getNote = id => {
    axios
      .get(`https://davids-notes.herokuapp.com/notes/get/${id}`)
      .then(res => {
        this.setState(() => ({
          _id: res.data._id,
          title: res.data.title,
          message: res.data.message
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .put(
        `https://davids-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        {
          title: this.state.title,
          message: this.state.message
        }
      )
      .then(res => {
        this.props.history.push(`/notes/${this.props.match.params.id}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="editNote">
        <h2 className="header">Edit Note:</h2>
        <form className="form" onSubmit={this.submitHandler}>
          <input
            className="input1"
            onChange={this.handleInputChange}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="New Title"
            required
          />
          <input
            className="input2"
            onChange={this.handleInputChange}
            type="text"
            name="message"
            value={this.state.message}
            placeholder="New Content"
            required
          />
          <button className="submit" type="submit">
            Save Edit
          </button>
        </form>
      </div>
    );
  }
}

export default EditNote;
