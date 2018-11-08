import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      editTitle: "",
      editBody: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({
          note: response.data,
          editBody: response.data.textBody,
          editTitle: response.data.title
        });
        console.log("NOTE RESPONSE", response);
      })
      .catch(error => console.log(error));
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="singleNote">
        <div className="note__options">
          <Link
            className="singleNote__edit"
            to={`/note/edit/${this.state.note._id}`}
          
            edit
          </Link>
          <span
            className="singleNote__delete"
            onClick={() => {
              this.props.deleteNote(this.state.note._id);
            }}
          >
            delete
          </span>
        </div>

        <h1>{this.state.editTitle}</h1>
        <p>{this.state.editBody}</p>
      </div>
    );
  }

}
export default Note;
  