import React, { Component } from 'react';
import './CreateNote.css';
import {withRouter} from 'react-router-dom';

class CreateNote extends Component {
   constructor() {
      super();
      this.state = {
         tags: [],
      }
   }

   sumbitNote = () => {
      let noteTitle = document.getElementById('newTitle').value;
      let noteContent = document.getElementById('newContent').value;
      if(noteTitle !== "" && noteContent !== ""){
         this.props.addNote({title: noteTitle, content: noteContent, tags: this.state.tags});
         noteTitle = "";
         noteContent = "";
      }
      this.props.history.push('/');
   }

   addTag = () => {
      console.log("addTag clicked");

      let newTag = document.getElementById('editNoteTagsInput');

      this.setState({tags: [...this.state.tags, newTag.value]});

      newTag.value = "";
      console.log(this.state.tags);
   }

   deleteTag = (tagId) => {
      this.state.tags.splice(tagId, 1);
      this.setState({
         tags: this.state.tags,
      });
   }

   render() {
      return (
         <div className="createNewNote">
            <h2> Create New Note: </h2>
            <div>
               <input id="newTitle" className="newTitle" refs="newTitle" placeholder="Note Title"/>
            </div>
            
            <h4 id="viewNoteTags" >  Tags: {this.state.tags.map((tag, i) =>
            <span className="viewNoteTag" key={i} onClick={() => this.deleteTag(i)}>  {tag}  </span>
         )} </h4>
            <div id="editNoteTags">
               <input type="text" id="editNoteTagsInput" className="smallInput" placeholder="Enter tags"/> 
               <button id="addTagButton" onClick={() => this.addTag()}> Add Tag</button>
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