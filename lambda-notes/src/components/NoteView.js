import React, {Fragment} from "react";
import axios from 'axios';
import NoteForm from './NoteForm';
import { Link, Route } from "react-router-dom";

class NoteView extends React.Component {
  constructor(props){
    super(props);
    this.state={
        note:{
        title:"",
        textBody:""
      },
      Editing:false
    }
  }
      
   componentDidMount(){
      const id = this.props.match.params.id;
      this.getNote(id);
   }
   
   getNote = (id) => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({note: response.data}))
      .catch(err => {console.log(err)});
   }

   editOn = e => {
    e.preventDefault();
    this.setState({ Editing: true });
   }


  render(){
    if (this.state.Editing) {
      return (
        <NoteForm
          note={this.state.note} 
          title={this.state.title}
          textBody={this.state.textBody}
          editNote={this.props.editNote}
          Editing={this.state.Editing}
        />
      );
    }
  return (
    <Fragment>
     <div>
       <button onClick={this.editOn}>Edit</button>
       <button>Delete</button>
    </div>
    <div> 
    {<h3>{this.state.note.title}</h3>}
    {<h5>{this.state.note.textBody}</h5>}
    </div>
    </Fragment>
    );
  }
}

export default NoteView;
      