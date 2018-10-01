import React from 'react';
import './createNote.css'

class CreateNote extends React.Component {
  constructor(props){
super(props);
this.state = {
  id:Number(''),
  title:'',
  textBody:''
    };
  }



handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

createANote(){

}

render(){
  return (

  <div className="FormContainer">
  <form >
  <div className= 'row'>
    <input placeholder = 'Title' name= 'title' onChange ={this.handleInputChange} value = {this.state.title}/>
  </div>
  <div className= 'row'>
    <input className='textComment' placeholder = 'Content' name= 'textBody'  onChange ={this.handleInputChange} value = {this.state.textBody}/>
  </div>

  <button onClick ={this.createANote} >Add Note</button>
  </form>

  </div>
  );

}



}
export default CreateNote
