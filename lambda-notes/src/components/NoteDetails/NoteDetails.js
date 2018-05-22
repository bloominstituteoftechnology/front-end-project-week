import React, { Component } from 'react';
import Title from '../Title';
import { notes } from '../../data/notes';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: ''
    }
  }
  componentDidMount(){
    const currentNote = notes.reduce((current, note) => {
      return (note.id === this.props.noteId) ? note : current;
    });

    this.setState({ title:currentNote.title, contents:currentNote.value });
  }
  render() {
    return ( 
      <div className="note-details">
        <Title title={this.state.title} />
        <div className="note-contents">
          {this.state.contents}
        </div>
      </div>
     )
  }
}
 
export default NoteDetails;