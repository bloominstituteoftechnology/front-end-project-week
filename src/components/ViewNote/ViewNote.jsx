import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './ViewNote.css';

class ViewNote extends Component {
   constructor() {
      super();
      this.state = {
         index: "",
         title: "",
         content: "",
         tags: [],
      }
   }

   edit = () => {
      console.log(this);

      // show the edit note textboxes
      this.toggleDisplay("editNoteTitle");
      this.toggleDisplay("editNoteContent");
      this.toggleDisplay("submitEdits");
      this.toggleDisplay('editNoteTags');
      this.toggleDisplay('edit');
      // hide the note displaying
      document.getElementById("viewNoteTitle").innerHTML = "Edit Note: ";
      this.toggleDisplay("viewNoteContent");

      document.getElementById("editNoteTitleInput").value = this.state.title;
      document.getElementById("editNoteContentInput").value = "   " + this.state.content;
   }

   addTag = () => {
      console.log("addTag clicked");
      let newTag = document.getElementById('editNoteTagsInput');
      this.setState({tags: [...this.state.tags, newTag.value]});
      newTag.value = "";
      console.log(this.state.tags);
   }

   delete = () => {
      this.toggleDisplay("modal");
      this.props.delete(this.state.index);
      this.props.history.push('/');
   }

   deleteTag = (tagId) => {
      this.state.tags.splice(tagId, 1);
      this.setState({
         tags: this.state.tags,
      });
   }

   componentDidMount() {
      this.toggleDisplay("modal");
      this.toggleDisplay("editNoteTitle");
      this.toggleDisplay("editNoteContent");
      this.toggleDisplay("submitEdits");
      this.toggleDisplay('editNoteTags');

      this.setState({
         index: this.props.index,
         title: this.props.title,
         content: this.props.content,
         tags: this.props.tags ? this.props.tags: [],
      });

   }

   toggleDisplay(componentId) {
      let component = document.getElementById(componentId);
      component.style.display === 'none' ? (component.style.display = 'block') : (component.style.display = 'none');
   
   }

   submitEdits = () => {
      this.props.update({index: this.props.index, title: document.getElementById("editNoteTitleInput").value, content: document.getElementById("editNoteContentInput").value, tags: this.state.tags});

      this.props.history.push('/');
   }

   render() {
      return (
         <div className="viewNote">
            <div className="noteNav"> 
               <span id="edit" onClick={this.edit}>edit</span> <span>       </span>
               <span id="delete" onClick={() => this.toggleDisplay("modal")}>delete</span> 
            </div>

            <h2 id="viewNoteTitle" > {this.state.title} </h2>
            <div id="editNoteTitle"> <input type="text" id="editNoteTitleInput" className="smallInput"/> </div>

            <h4 id="viewNoteTags" >  Tags:  {this.state.tags.map((tag, i) => 
               <span className="viewNoteTag" key={i} onClick={() => this.deleteTag(i)}>  {tag}  </span>
            )} </h4> 
            <div id="editNoteTags">
             <input type="text" id="editNoteTagsInput" className="smallInput" placeholder="Enter tags"/> 
             <button id="addTagButton" onClick={() => this.addTag()}> Add Tag</button>
             </div>

            <div id="viewNoteContent">  {this.state.content} </div>

            <div id="editNoteContent"> <textarea id="editNoteContentInput"/> </div>
            <div>
               <button id="submitEdits" onClick={() => this.submitEdits()}>Save</button>
            </div>
            <div id="modal">
               <div className="backdrop">
                  <div className="modal">
                     <p className="modalText"> Are you sure you want to delete this? </p>
                     <div className="deleteButton">
                        <button id="deleteButton" onClick={() => this.delete()}>Delete</button>
                        <button  onClick={() => this.toggleDisplay("modal")}>No</button>
                     </div>

                  </div>
                </div>
            </div>
         </div>
      )
   }

}

export default withRouter(ViewNote);