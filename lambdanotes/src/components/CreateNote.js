import React, {Component} from 'react'
import {NotesContext} from '../contexts/NotesProvider'

class CreateNote extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      content: '',
      newNote: ''
    }
  }

  changeHandler = (e) =>{
    //callback necessary to assure title and textBody are accurately obtained 
    this.setState({
      [e.target.name]: e.target.value,
    }, () =>{
      this.setState({
        newNote: {title: this.state.title, content: this.state.content}
      })
    })
  }

  render(){
    return (
      <div className="createContainer">
        <h3 className="createHeader">Create New Note:</h3>
        <input type="text" 
          name="title"
          placeholder="Note Title" 
          value={this.state.title}
          onChange={this.changeHandler}/>
        <textarea type="text" spellCheck="false"
          rows='15'
          name="content"
          placeholder="Note Content" 
          onChange={this.changeHandler}/>
        <NotesContext.Consumer>
          {data=>{
            return <button 
              className="createBtn"
              onClick={() =>{data.actions.createNote(this.state.newNote)}}>Save</button>
          }}
        </NotesContext.Consumer>
      </div>
    )
  }
}

export default CreateNote
