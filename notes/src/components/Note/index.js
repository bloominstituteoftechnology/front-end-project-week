import React from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';
import './note.css';

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

delete = () => {
 return this.props.delete(this.props.match.params.id);
}

  render() {
    return (
      <article className='note-container' name={this.state.note._id}>
      <span className='edit-delete'>
        <Link to={`/edit/${this.state.note._id}`} >Edit</Link>
        <p onClick={this.delete}>Delete</p>
      </span>
        <header>
          {this.state.note.title}
        </header>
        <hr className='hr' />
        <p>{this.state.note.textBody}</p>
      </article>
    );
  }
}
export default Note;
