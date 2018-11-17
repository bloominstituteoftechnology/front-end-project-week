import React, {Component} from 'react'

class CreateNote extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      content: ''
    }
  }

  changleHandler = (e) =>{
    console.log('inputbox change', e.target.value)
    // [e.target.name] = e.target.value
  }

  render(){
    
    return (
      <div className="createContainer">
        <h3 className="createHeader">Create New Note</h3>
        <input type="text" 
          name="title"
          placeholder="Note Title" 
          value={this.state.title}
          onChange={this.changleHandler}/>
        <textarea type="text" spellCheck="false"
          rows='15'
          name="title"
          placeholder="Note Title" 
          onChange={this.changleHandler}/>
        <button className="createBtn">Save</button>
      </div>
    )
  }
}

export default CreateNote
