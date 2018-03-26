import React, { Component } from 'react';
import './CreateNote.css';
import {withRouter} from 'react-router-dom';

   class CreateNote extends Component {

      sumbitNote = () => {
         let noteTitle = document.getElementById('newTitle').value;
         let noteContent = document.getElementById('newContent').value;
         if(noteTitle !== "" && noteContent !== ""){
            this.props.addNote({title: noteTitle, content: noteContent});
            noteTitle = "";
            noteContent = "";
         }
         this.props.history.push('/');
         
      }

      render() {
         return (
            <div className="createNewNote">
               <h2> Create New Note: </h2>
               <div>
                  <input id="newTitle" className="newTitle" refs="newTitle" placeholder="Note Title"/>
               </div>
               <div>
                  <textarea id="newContent" className="newContent" refs="newContent" placeholder="  Note Content"/>
               </div>
               <div>
                  <button className="submitNewNote" onClick={() => this.sumbitNote()}>Save</button>
               </div>
            </div>
         )
      }
   }

export default withRouter(CreateNote);