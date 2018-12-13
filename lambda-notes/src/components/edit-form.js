import React, { Component } from "react";
import axios from "axios";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      confirmDeleteDisplay: null
    };
  }

  buttonClickHandler = e => {
    e.preventDefault();
    console.log("click");
    axios
      .put(
        `https://lambdanotesserver.herokuapp.com/notes/${
          this.props.match.params.id
        }`,
        {
          title: this.state.title,
          content: this.state.content
        }
      )
      .then(response => {
        console.log("response", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.props.match.params.id);
    this.setState({
      title: "",
      content: ""
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  modalDisplay = event => {};

  render() {
    return (
      <div className="noteForm">
        <h1>Edit Note:</h1>
        <form onSubmit={this.buttonClickHandler}>
          <input
            onChange={this.changeHandler}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Note Content"
            value={this.state.content}
            name="content"
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
