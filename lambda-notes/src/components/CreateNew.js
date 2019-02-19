import React from 'react'; 
import './CreateNew.css'; 

export default class CreateNew extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      title: '',
      content: '',
      image: ''
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
    this.props.newNote(this.state.title, this.state.content, this.state.image); 
    this.props.history.push('/'); 
  }

  render(){
    return(
      <div>
        <h3>Type Your Notes Here:</h3> 
        <form onSubmit={this.submitHandler}>
          <input onChange={this.inputHandler} value={this.state.title} name="title" placeholder="Note Title" className='input' type='text'/>
          <input onChange={this.inputHandler} value={this.state.image} name="image" placeholder="add image link" type='text' className='input' />
          <input onChange={this.inputHandler} name="content" value={this.state.content} placeholder="Note Content" className="text-area" type='text'/> 
          <button type="submit" className="button-2">Save</button> 
        </form> 
      </div> 
    )
  }
}