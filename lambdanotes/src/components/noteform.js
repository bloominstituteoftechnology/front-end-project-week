import React, { Component } from 'react'
import axios from 'axios'

export default class Noteform extends Component {
    constructor(props){
      super(props)
      this.state = {
        title: '',
        noteContent: '',
        
      }
    }
    addNote = () => {
        const { title, noteContent } = this.state;
        axios
          .post('https://fe-notes.herokuapp.com/note/create', {title, noteContent})
          .then(response => {
            this.setState({ notes: response.data, title: "", noteContent: "" });
            window.location.reload();
          })
          .catch(err => console.log('note could not be added', err));
      };
    
      inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      
      render(){
        return (
          <div>
            <h2>Create New Note:</h2>
            <form onSubmit={this.addNote(this.state)}>
                <input type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Note Title"/>
                <input type="textbox" name="noteContent" value={this.state.noteContent} onChange={this.inputHandler} placeholder="Note Content"/>
                <button type="submit">Save</button>
            </form>
          </div>
        )
      }
}
