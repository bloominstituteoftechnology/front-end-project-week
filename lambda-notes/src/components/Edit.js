import React from 'react'; 
import './CreateNew.css'; 


export default class Edit extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    title: '',
    textBody: '',
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
    event.preventDefault(); 
    this.props.updateHandler(this.state.title, this.state.textBody, this.state.id)
    this.props.history.push('/')
    console.log(this.state.title, this.state.textBody)
  }

  render() {
    return(
      <div>
        <h3>Edit Note:</h3> 
        <form onSubmit = {this.submitHandler}>
          <input onChange={this.inputHandler} value={this.state.title} name="title" placeholder="Note Title" className='input' type='text'/>
          <input onChange={this.inputHandler} name="textBody" value={this.state.textBody} placeholder="Note Content" className="text-area" type='text'/> 
          <button type="submit" className="button-2">Save</button> 
        </form> 
      </div> 
    )
    }
  }
