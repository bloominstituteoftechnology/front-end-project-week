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
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      this.setState({note: response.data});
  })
  .catch(err => {
      console.log("error", err);
  });
}

  handleDelete = () => {
    const id = this.props.match.params.id;
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(res => {
      this.setState(() => ({notes: res.data}))
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <Link to={`./edit/${this.state.note.id}`}>Edit</Link>
            <button onSubmit={this.handleDelete}>Delete</button>
          </div>
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.textBody}</p>
        </div>
      </Fragment>
    );
  }
}

export default Note;