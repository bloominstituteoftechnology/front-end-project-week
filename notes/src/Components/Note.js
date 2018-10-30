import React, { Fragment } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


class Note extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        note: []
      }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/api/notes/${id}`)
    .then(response => {
      this.setState({note: response.data});
    })
    .catch(err => {
      console.log("error", err);
    });
  }

  deleteNote = () => {
    const id = this.props.match.params.id;
    axios
    .delete(`http://localhost:8000/api/notes/${id}`)
    .then (res => {
      this.setState({notes: res.data});
    })
    .then(() => {
      this.props.history.push('/')})
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <button>
            <Link to={`./edit/${this.props.match.params.id}`}>Edit</Link>
            </button>
            <button onClick={this.deleteNote}>Delete</button>
          </div>
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.textbody}</p>
        </div>
      </Fragment>
    );
  }
}

export default Note;