import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/details.css';


export default class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: this.props.note,
    }
  }

  render() {
    return (
      <div className="detail">
        <div className="links">
          <Link
            className="link"
            to={`/listnotes/${this.state.note.id}/edit`}>edit</Link>
          <Link
            className="link"
            onClick={() => this.props.enableDelete()}
            to={`/listnotes/${this.state.note.id}/delete`}>delete</Link>
        </div>

        <h4>{this.state.note.title}</h4>
        <p>{this.state.note.body}</p>
      </div>
    );
  }
}
