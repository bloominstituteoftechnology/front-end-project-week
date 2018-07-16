import React from 'react';
import '../App.css';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div className="note">
      {this.props.note.title}
      <br/>
      <hr/>
      {this.props.note.body}
      </div>
    )
  }
}

export default Note;
