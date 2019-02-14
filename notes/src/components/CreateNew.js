import React from 'react'; 
import './CreateNew.css'; 

export default class CreateNew extends React.Component {
  constructor(props){
    super(props); 
    this.state={
      title: '',
      details: ''
    }
  }

  submitHandler = (event) => {
    event.preventDefault(); 
    this.props.newNote(this.state.title, this.state.details) 
    this.props.post();
    this.props.history.push('/'); 
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render(){
    return(
      <div>
        <h3>Create New Note:</h3> 
        <form onSubmit={this.submitHandler}>
          <input onChange={this.inputHandler} value={this.state.title} name="title" placeholder="Note Title" className='input' type='text'/>
          <input onChange={this.inputHandler} name="details" value={this.state.details} placeholder="Note Content" className="text-area" type='text'/> 
          <button type="submit" className="buttonTwo">Submit</button> 
        </form> 
      </div> 
    )
  }
}