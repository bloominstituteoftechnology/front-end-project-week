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
  }

  render() {
    if (!this.props.singleNote) {
      return <div>Loading note information...</div>;
    }
    
    const { title, content} = this.props.singleNote[0];
    console.log(this.props.singleNote[0])
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
/*
import axios from 'axios';
export default class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:null,
    };
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

*/