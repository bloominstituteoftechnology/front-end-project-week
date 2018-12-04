import React, { Component } from "react";
import axios from "axios";


class CreateNote extends Component {
   constructor(props){
      super(props);
      this.state = {
         tag: [],
         title: "",
         text: ""

      };
   }

   inputHandler = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
   };

   submitHandler = event => {
      event.preventDefault();
      const note = {
         title: this.state.title,
         text: this.state.text
      };
      console.log(note);
      axios
         .post(`https://fe-notes.herokuapp.com/note/create`, note)
         .then(result => {
            console.log(result);
            this.setState({ title: "", text: "" });
         })
         .catch(() => alert("Note adding error..."));
   };

   render(){
      return (
         <div className="page-wrapper">
            <h2>Create New Note:</h2>
            <form onSubmit={this.submitHandler}>
               <input 
                  required
                  className="inputTitle"
                  name="title"
                  placeholder="Note Title"
                  value={this.state.title}
                  onChange={this.inputHandler}
               />
               <textarea 
                  required
                  className="inputContent"
                  name="text"
                  placeholder="Note Content"
                  value={this.state.text}
                  onChange={this.inputHandler}
               />
               <button type="submit">Update</button>
            </form>
         </div>
      );
   }
}

export default CreateNote;