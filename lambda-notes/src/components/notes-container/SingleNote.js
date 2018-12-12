//created by NotesContainer via routing 
import React, { Component } from 'react';
import EditBar from './EditBar.js';

export default class SingleNote extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    this.props.fetchNote(id);
  } // fetchNote lives in app.js

  render() {
    if (!this.props.singleNote) {
      return <div>Loading note information...</div>;
    }
    
    const { title, content} = this.props.singleNote[0];

    return (
      <div className="note-card">
        <div className="note-title">
          <h2>{title}</h2>
          </div>
          <div className="note-body">
            <p>{content}</p>
          </div>
         
          <EditBar deleteNote={this.props.deleteNote}  handleInputChange={this.props.handleInputChange} singleNote = {this.props.singleNote} id = {this.props.match.params.id}
             />
        </div>
    );
  }
}
