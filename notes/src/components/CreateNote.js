import React, { Component } from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

 class CreateNote extends Component {
   constructor(props){
     super(props)
     this.state={
       text: '',
       title:''
     }
   }
  changeHandler=(e) =>{
  this.setState({[e.target.name]: e.target.value})
  }

  submitHandler=(e)=>{
  e.preventDefault();
  this.props.createNote({title: this.state.title, textBody: this.state.text})


  }
  render() {
    return (
      <div className="createNote">
      <h1>Create Note</h1>
      <form onSubmit={this.submitHandler}>
      <input name="title" onChange={this.changeHandler} value={this.state.title}></input>
      <textarea name="text" onChange={this.changeHandler} value={this.state.text} className="textArea"></textarea>
      <Link to="/"><Button color="info">Submit</Button></Link>
      </form>

        
      </div>
    )
  }
}

export default CreateNote;