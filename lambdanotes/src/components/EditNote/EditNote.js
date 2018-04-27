import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import axios from "axios";

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    this.updateNote();
  }

  //   getNotes = () => {
  //     axios
  //       .get(`http://localhost:5000/notes`)
  //       .then(response => {
  //         // console.log('response:', response);
  //         this.setState({ notes: response.data });
  //       })
  //       .catch(error => {
  //         console.error("Error getting notes!", error);
  //       });
  //   };

  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = id => {
    const note = {};
    // check if there is anything to update
    if (this.state.title !== "") {
      note.title = this.state.title;
    }
    if (this.state.content !== "") {
      note.content = this.state.content;
    }

    axios
      .put(`http://localhost:5000/notes/${id}`, note)
      .then(response => {
        console.log(this.props.note);
        this.props.getNotes();
      })
      .catch(err => {
        console.error(err);
      });

    this.setState({ title: "", content: "" });
  };

  render() {
    // console.log(this.props.location.state.note);
    return (
      <div className="editNote__background">
        <h4 className="editNote__title">Edit Note:</h4>
        <form className="editNote__form">
          <div>
            <label>
              <input
                type="text"
                onChange={this.handleNewInput}
                name="title"
                value={this.state.title}
                placeholder="  Note Title"
                size="50"
              />
            </label>
          </div>

          <div>
            <label>
              <textarea
                type="text"
                onChange={this.handleNewInput}
                name="content"
                value={this.state.content}
                placeholder="  Note Content"
                cols="100"
                rows="20"
              />
            </label>
          </div>

          <Link to="/">
            <button
            className='editNote__button'
              type="button"
              onClick={() => this.updateNote(this.props.location.state.note)}
            >
              Update
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
