import React, {Fragment} from "react";
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import NoteForm from './NoteForm';
import DeleteModal from './DeleteModal';
import './NoteView.css';


class NoteView extends React.Component {
  constructor(props){
    super(props);
    this.state={
        note:{
        title:"",
        body:""
      },
      Editing:false,
      Deleting: false
    }
  }
      
   componentDidMount(){
      const id = this.props.match.params.id;
      this.getNote(id);
   }
   
  api = "http://localhost:7000" || "http://notes-api-lsp.herokuapp.com";

   getNote = (id) => {
    axios
      .get(`${api}/api/notes/${id}`)
      .then(response =>  this.setState({note: response.data}))
      .catch(err => {console.log(err)});
   }

   editOn = () => {
    this.setState({ Editing: true });
   }

   editOff =() => {
     this.setState({Editing:false});
   }

   editNote = (note) => {
    const id = this.props.match.params.id;

    axios
    .put(`${api}/api/notes/${id}`, note)
    .then(response => {
      this.setState({
        note: response.data,
        Editing: false}), 
        this.props.history.push('/')
        this.props.getNotes()
    })
    .catch(error => {console.error(error)});
  }

  deleteOn = () =>{
    this.setState({Deleting: true})
  }

  deleteOff = () =>{
    this.setState({Deleting: false})
  }

  deleteNote = () => {
    const id = this.props.match.params.id;

    axios.delete(`${api}/api/notes/${id}`)
    .then(response => this.setState({notes: response.data}, () => {
    this.props.getNotes()
    this.props.history.push('/')}))
    this.deleteOff();
  }


  render(){
    if (this.state.Editing) {
      return (
        <Fragment>
        <NoteForm
          note={this.state.note} 
          title={this.state.title}
          body={this.state.body}
          editNote={this.editNote}
          Editing={this.state.Editing}
        />
        <button className="cancel" onClick={this.editOff}>Cancel Update</button>
        </Fragment>
      );
    }

    if(this.state.Deleting){
      return(
        <DeleteModal deleteOff={this.deleteOff} deleteNote={this.deleteNote} />
      )
    }
  return (
    <Fragment>
    <div className="nv-background">  
    <div className="nv-wrapper"> 
      <div className="nv-note"> 
        <h3>{this.state.note.title}</h3>
        <h5>{this.state.note.body}</h5>
      </div>  
      <div className="nv-buttons">
        <button className="nv-button" onClick={this.editOn}>Edit</button>
        <button className="nv-button delete" onClick={this.deleteOn}>Delete</button>
      </div>
    </div>
    </div>
    </Fragment>
    );
  }
}

export default NoteView;
      