import React, { Component } from 'react';
import axios from 'axios';
import EditBar from './EditBar.js';

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



  render() {
    if (!this.state.note) {
      return <div>Loading note information...</div>;
    }
    
    const { title, textBody} = this.state.note;
    return (
      <div className="note-card">
        <div className="note-title">
          <h2>{title}</h2>
          </div>
          <div className="note-body">
            <p>{textBody}</p>
          </div>
         
          <EditBar singleNote = {this.state.note} id = {this.props.match.params.id} />
        </div>
    );
  }
}
