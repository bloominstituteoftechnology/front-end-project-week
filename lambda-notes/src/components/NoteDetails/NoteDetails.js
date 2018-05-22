import React, { Component } from 'react';
import Title from '../Title';
import { notes } from '../../data/notes';
import SimpleLink from '../SimpleLink';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      contents: ''
    }
  }
  componentDidMount(){
    const currentNote = notes.reduce((current, note) => {
      return (note.id === this.props.noteId) ? note : current;
    });

    this.setState({ id:currentNote.id, title:currentNote.title, contents:currentNote.value });
  }
  render() {
    return ( 
      <div className="note-details">
        <div className="note-actions">
          <SimpleLink title="edit" link={`/edit/${this.state.id}`} />
          <SimpleLink title="delete" link="/"/>
        </div>
        <Title title={this.state.title} />
        <div className="note-contents">
          {this.state.contents}
        </div>
      </div>
     )
  }
}
 
export default NoteDetails;