import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

class NoteView extends React.Component {
   constructor(props){
       super(props);
       this.state={
        title: '',
        note: ''
       }
   }

   componentDidMount(){
       console.log(this.props.allNotes);
       
       let thisNote = this.props.allNotes.find((note) => {
           console.log(note.id === parseInt(this.props.match.params.id));
           
           return note.id === parseInt(this.props.match.params.id);
       });
       console.log(thisNote);
       
       this.setState({
           title: thisNote.title,
           note: thisNote.note,
       })
   }

     


    render(){
        return (<div>
            <h3>TITLE: {this.state.title}</h3>
            <p>{this.state.note}</p>
        </div>)
    }
   
}

export default NoteView;


// this note { id: 1, title: "quis nostrud", note: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " } 