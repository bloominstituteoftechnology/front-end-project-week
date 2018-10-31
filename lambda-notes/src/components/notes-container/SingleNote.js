import React, { Component } from 'react';
import axios from 'axios';
import EditBar from './EditBar.js';

export default class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:null,
      editedNote:'',
      editedTitle:'',
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
  editedNoteTitleHandler= event =>  {
    event.preventDefault();
    this.setState ({editedTitle: event.target.value});
  }

  editedNoteBodyHandler= event =>  {
    event.preventDefault();
    this.setState ({editedNote: event.target.value});
  }

  editedNoteHandler = event => {
    event.preventDefault();
    axios     
    .put(`https://fe-notes.herokuapp.com/note/edit/id`,
    {
       title: this.state.editedTitle,
       textBody: this.state.editedNote,
    }
      )
    .then(response => {
       this.setState(() => ({ notes: response.data }));
      })
    .catch(error => {
      console.error('Server Error', error);
      });
   
      }


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
         
          <EditBar  />
        </div>
    );
  }
}
/*editedNoteTitleHandler={props.route.editedNoteTitleHandler}
     editedNoteBodyHandler={props.route.editedNoteBodyHandler}
     editedNoteHandler={props.route.editedNoteBodyHandler}*/