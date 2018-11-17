import React, {Component} from 'react'

class CreateNote extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      content: ''
    }
  }

  changeHandler = (e) =>{
    // console.log('inputbox change', e.target.value)
    // console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value

    })
    console.log(this.state);
  }

  render(){
    
    return (
      <div className="createContainer">
        <h3 className="createHeader">Create New Note</h3>
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
        <button className="createBtn">Save</button>
      </div>
    )
  }
}

export default CreateNote
