import React from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';

class Note extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      note: {}
    }
  }
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(res => this.setState({note: res.data}))
  }
  render() {
    if (!Object.keys(this.state.note).length) {
      return <p></p>
    }
    return (
      <article name={this.state.note._id}>
      <span>
        <Link to={`/edit/${this.state.note._id}`} >Edit</Link>
        <p>Delete</p>
      </span>
        <header>
          {this.state.note.title}
        </header>
        <hr />
        <p>{this.state.note.textBody}</p>
      </article>
    );
  }
}
export default Note;
