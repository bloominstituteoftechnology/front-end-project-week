import React, {Fragment} from "react";
import axios from 'axios';
import Note from './Note';
import NoteForm from './NoteForm';
import { Link, Route } from "react-router-dom";

class NoteView extends React.Component {
  constructor(props){
    super(props);
    this.state={
        note:{
        title:"",
        textBody:""
      }
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
   
  
  render(){
  return (
    <Fragment>
    {<h3>{this.state.note.title}</h3>}
    {<h5>{this.state.note.textBody}</h5>}
    </Fragment>
    );
  }
}

export default NoteView;
      