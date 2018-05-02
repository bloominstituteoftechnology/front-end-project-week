import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Note extends Component {
  constructor(props){
    super(props)
    this.state};

  render () {
    console.log('note')
    return (
    <Link className="single-note-div" key={this.props.id} to={`/view-note/${this.props.id}`}>
      <div className="note">
        <h4>{this.props.title}</h4>
        <hr />
        <p>{this.props.text}</p>
      </div>
    </Link>
  );
}
};

export default Note;