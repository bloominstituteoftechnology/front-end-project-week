import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

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

   handleDelete = () => {
       this.props.delete(this.state.id);
   }

    render(){
        return (<div>
            <Link to="/"> <div className="delete" onClick={this.handleDelete}>delete.</div></Link>
            <h3>TITLE: {this.state.title}</h3>
            <p>{this.state.note}</p>
        </div>)
    }
   
}

export default NoteView;