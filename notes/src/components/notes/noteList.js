import React, { Component } from 'react';
import Note from './note';
import loading from '../../loading.gif';
import { Mainbar } from '../../style/style';


class NoteList extends Component {
  render() {
    if(this.props.notes.length === 0 ){
      return (
      <Mainbar>
        <div className="loading">
        <img src={loading} alt="loading"/>
        </div>
      </Mainbar>
      )
    } 
    return (
      <Mainbar>
      {this.props.notes.map(note =>{
        return[
        <Note key={note._id} notes={note} getId={this.props.getId}/>
        ]
      })}
      </Mainbar> 
    );
  }
}
 
export default NoteList;