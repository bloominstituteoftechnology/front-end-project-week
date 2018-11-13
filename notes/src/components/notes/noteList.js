import React, { Component } from 'react';
import Note from './note';
import { Mainbar } from '../../style/style';


class NoteList extends Component {
  render() {
    console.log(this.props.notes)
    if(this.props.notes.length === 0 ){
      return <p>Please create a note </p>
    } 
    return (
      <Mainbar>
      {this.props.notes.map(note =>{
        return[
        <Note key={note.id} notes={note}/>
        ]
      })}
      </Mainbar> 
    );
  }
}
 
export default NoteList;