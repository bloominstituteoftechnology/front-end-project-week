import React from 'react'; 
import './CreateNew.css'; 
import axios from 'axios'; 

export default class Edit extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    title: props.title,
    details: props.details,
    id: this.props.match.params.id
    }
  }

  inputHandler = (event) => {
    event.preventDefault(); 
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    this.props.updateHandler(this.state.title, this.state.details, this.state.id)
    this.props.history.push('/')
    console.log(this.state.title, this.state.details)
  }

  render() {
    return(
      <div>
        <h3>Edit Note:</h3> 
        <form onSubmit = {this.submitHandler}>
          <input onChange={this.inputHandler} value={this.state.title} name="title" placeholder={this.state.title} className='input' type='text'/>
          <input onChange={this.inputHandler} name="details" value={this.state.details} placeholder={this.state.details} className="text-area" type='text'/> 
          <button type="submit" className="button-2">Save</button> 
        </form> 
      </div> 
    )
    }
  }