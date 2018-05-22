import React, { Component } from 'react';
import Title from '../Title';
import { notes } from '../../data/notes';
import SimpleLink from '../SimpleLink';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: ''
    }
  }
  componentDidMount(){
    const currentNote = notes.filter(x => x.id === +this.props.noteId);
    this.setState({ title:currentNote[0].title, contents:currentNote[0].value });
  }
  render() {
    return ( 
      <div className="note-details">
        <div className="note-actions">
          <SimpleLink title="edit" link={`/edit/${this.props.noteId}`} />
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