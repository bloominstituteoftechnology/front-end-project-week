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

   editNote = (note) => {
    const blanknote={
    title: "",
    textBody: ""
    }

  const id = this.props.match.params.id;

    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
      this.setState({
        note: response.data,
        title: response.data.title,
        Editing: false
      });
      this.props.history.push('/');
    })
    .catch(error => {console.error(error)});
  }

  deleteNote = () => {
    const id = this.props.match.params.id;

    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(response => this.setState({notes: response.data},
    this.props.history.push('/')))
  }
  


  render(){
    if (this.state.Editing) {
      return (
        <NoteForm
          note={this.state.note} 
          title={this.state.title}
          textBody={this.state.textBody}
          editNote={this.editNote}
          Editing={this.state.Editing}
        />
      );
    }
  return (
    <Fragment>
     <div>
       <button onClick={this.editOn}>Edit</button>
       <button onClick={this.deleteNote}>Delete</button>
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
      