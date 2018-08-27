import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: this.props.note,
    }
  }

  render() {
    return (
      <div>
        <div className="links">
          <Link
            className="link"
            to={`/all-notes/${this.state.note.id}/edit`}>edit</Link>
          <Link
            className="link"
            onClick={() => this.props.enableDelete()}
            to={`/all-notes/${this.state.note.id}/delete`}>delete</Link>
        </div>

        <h4>{this.state.note.title}</h4>
        <p>{this.state.note.body}</p>
      </div>
    );
  }
}
