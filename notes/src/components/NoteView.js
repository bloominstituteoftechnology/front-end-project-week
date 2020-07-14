import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import './newNote.css';

class NoteView extends React.Component {
   constructor(props){
       super(props);
       this.state={
        title: '',
        note: '',
        id:null,
       }
   }

   componentDidMount(){
       let thisNote = this.props.allNotes.find((note) => {
           return note.id === parseInt(this.props.match.params.id);
       });
       
       this.setState({
           title: thisNote.title,
           note: thisNote.note,
           id: thisNote.id,
       })
   }

   handleEdit = () => {
    this.props.edit(this.state.id);
   }

   handleDelete = () => {
       this.props.delete(this.state.id);
   }

    render(){
        return (
        <div>
            <div className="v">
                    <Link to={`/editnote/${this.state.id}`}> <div className="edit" onClick={this.handleEdit}>edit.</div></Link>
                <Link to="/"> <div className="delete" onClick={this.handleDelete}>delete.</div></Link>
            </div>
 
            <h3>TITLE: {this.state.title}</h3>
            <p>{this.state.note}</p>
            <img src={require('../assets/sartre.jpg')}/>
        </div>
        )
    }
   
}

export default NoteView;