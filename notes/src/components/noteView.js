import React, { Component } from 'react';
import axios from "axios";
import "../css/note.css"


class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
		notes: [],
		tags: '',
		title: '',
		textBody: '',
      _id: '',
      select: null,
    };
  }
	
	componentDidMount() {
		axios
		  .get('https://fe-notes.herokuapp.com/note/get/all')
		  .then(response => {
			this.setState(() => ({ notes: response.data }));
			console.log("made it to axios get")
			console.log("notes:", this.state.notes)
		  })
		  .catch(error => {
			console.error('Server Error', error);
      });
      this.state.notes.map(note => {
       if (note._id === this.props.id) {
        this.setState(() => ({ title: note.title, textBody: note.textBody })
       )
       }
      })
        


     
     /*  console.log(select)
      this.setState(() => ({ select: select }));
      console.log("this.state:", this.state.select) */
	  }
    
    
 



render () {
  

  return ( 
  <div className="note-view"> <div className="spacer"></div><button className="edit-button" onSubmit={this.props.noteEdit}>Edit</button>
  <button className="delete-button" onSubmit={this.props.noteDelete}>Delete</button>
  <div className="note-name">{this.state.title}</div>
  <div className="note-body">{this.state.textBody}</div>
  
  
  
  This id is {this.props.id}
  
   </div>
  )
};
}

export default NoteView;