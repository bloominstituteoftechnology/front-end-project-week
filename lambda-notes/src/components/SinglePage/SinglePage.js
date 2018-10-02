import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './EditForm.js'

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newTextBody:'',
      notes: [{

      }]
    };
  }

componentDidMount(){
console.log(this.props)
const id =  this.props.match.params.id;
this.fetchNote(id)

}

fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response)
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editNote = event => id => {

event.stopImmediatePropagation();
  debugger;
  console.log(id);
  const notes = {
    notes: [{
      title: this.state.newTitle,
      textBody:this.state.newTextBody
    }]

      };

  axios
  .put(`https://killer-notes.herokuapp.com/note/edit/${id}`,notes)
  .then(response => {
    console.log("success", response);
    this.setState(
      {
      notes:response.data,
      notes:{ _id:Number(''),title:'',  textBody:''}
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

    <div className="container">
      <div key ={this.state.notes._id} className='NoteContainer'>
      <h3>{this.state.notes.title}</h3>
      <hr/>
      <p> {this.state.notes.textBody}</p>
      </div>
      <div className="FormContainer">
      <form >
      <div className= 'row'>
        <input placeholder = 'Title' name= 'newTitle' onChange ={this.handleInputChange} value = {this.state.newTitle}/>
      </div>
      <div className= 'row'>
        <input className='textComment' placeholder = 'Content' name= 'newTextBody'  onChange ={this.handleInputChange} value = {this.state.newTextBody}/>
      </div>

      <button onClick ={this.editNote(this.state.notes._id)} >Edit Note</button>
      </form>

      </div>
    </div>
    );

  }




}
