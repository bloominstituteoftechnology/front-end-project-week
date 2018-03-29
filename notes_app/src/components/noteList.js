import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Note from '../components/addNote/Note';

class NoteList extends Component {
  render() {
    return (
      <div >
          
          <div className = 'row'>
            <div className = 'col-12'>
              <h3>Your notes:</h3>
            </div>
          </div>
        <div className = 'row'>
          <div className = 'col-3 d-flex flex-wrap'>
            {this.props.notes.map((note, index) =>{
              return <Note 
              key = {index} 
              notes = {note} 
              id = { index }/>
            })}
          </div>
          
        </div>
      </div>
     
    )
  }
}

export default  NoteList;
