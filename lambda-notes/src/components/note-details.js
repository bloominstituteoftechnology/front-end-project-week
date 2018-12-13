import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      id: null
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://lambdanotesserver.herokuapp.com/notes/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        console.log(response.data[0].title);
        this.setState({
          title: response.data[0].title,
          content: response.data[0].content,
          id: response.data[0].id
        });
      })
      .catch(error => console.log(error));
  }
  clickHandler = event => {
    event.preventDefault();
    axios.delete(`http://localhost:9000/notes/${this.props.match.params.id}`);
    alert("Note Deleted (Im not lying, it's gone, go check for yourself)");
  };

  render() {
    return (
      <div>
        <div className="detailedNote">
          <h1>{this.state.title}</h1>
          <p>{this.state.content}</p>
        </div>
        <div className="buttonBar">
          <NavLink to={`/edit-form/${this.state.id}`}>Edit</NavLink>
          <button onClick={this.clickHandler}>Delete</button>
        </div>
      </div>
    );
  }
}

export default NoteDetails;
