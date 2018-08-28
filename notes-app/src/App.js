import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
      this.state = {
        notes: [],
        tags: '',
        title: '',
        textBody: ''

      };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState(() => ({ notes: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }



  handleInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value });
    console.log("Changer log:", event.target.value)
  }

  adder = event => {
    event.preventDefault();
    

    const note = {
        tags: this.state.tags,
        title: this.state.title,
        textBody: this.state.textBody,
    }
    console.log(note);
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => this.getNotes())
      .catch(error => console.log(error))
  };


  deleter = id => {
    console.log(id)
    axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(response => this.getNotes())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App" >
      <br /><br /><br /><br /><br /><br />
      <form onSubmit={this.adder}>
          <input
            onChange={this.handleInputChange}
            placeholder="Tag"
            type="text"
            name="tags"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title"
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Note"
            name="textBody"
          />
          
          <button type="submit">Add Note</button>
          
        </form>
        <br /><br />
        {this.state.notes.map(each => ( 
          <Notes key={each._id} note={each} deleter={this.deleter} />
        ))}
      </div>
    );
  }
}


function Notes(props){
  return (
    <div onClick={()=>{props.deleter(props.note._id)}}> {props.note.title} ||||| {props.note.textBody} x</div>
  )
} 




export default App;
