import React from 'react';
import './createNote.css';
import axios from 'axios';
import { Button } from 'reactstrap';
class CreateNote extends React.Component {

state = {

    id:Number(''),
    title:'',
    textBody:''



    };




handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};


createANote = event => {
  event.preventDefault();
  const notes = {
        title: this.state.title,
        textBody:this.state.textBody
      };
  const URL = 'https://killer-notes.herokuapp.com/note'
  axios
  .post(`${URL}/create`,notes)
  .then(response => {
    console.log(response);
    this.setState(
      {
      notes:response.data,
      notes:{ id:Number(''),title:'',  textBody:''}
    },
      () => this.props.history.push('/')
    );
  })
  .catch(err => {
    console.log(err)
      console.error('Server Error', err);
  })
}

render(){
  return (

  <div className="FormContainer">
  <form >
    <label>Add A Note:</label>
  <div className= 'row'>
    <input className='TitleInput' placeholder = 'Title' name= 'title' onChange ={this.handleInputChange} value = {this.state.title}/>
  </div>
  <div className= 'row'>
    <input className='textComment' placeholder = 'Content' name= 'textBody'  onChange ={this.handleInputChange} value = {this.state.textBody}/>
  </div>

  <Button onClick ={this.createANote} >Add Note</Button>
  </form>

  </div>
  );

}



}
export default CreateNote
