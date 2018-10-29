import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


const notes = [{
  "tags": ["tag", "otherTag"],
  "title": "Note Title",
  "textBody": "Note Body",
  "_id": "cksdkjvckadd32",
},
{
  "tags": ["tag", "otherTag"],
  "title": "Note Title",
  "textBody": "Note Body",
  "_id": "cksdkjvckadd32",
},
{
  "tags": ["tag", "hashTag"],
  "title": "Note Title",
  "textBody": "Note Body",
  "_id": "cksdkjvckadd32",
},
{
  "tags": ["tag", "hashTag"],
  "title": "Note Title",
  "textBody": "Note Body",
  "_id": "cksdkjvckadd32",
},
{
  "tags": ["tag", "other"],
  "title": "Note Title",
  "textBody": "Note Body",
  "_id": "cksdkjvckadd32",
},
{
  "tags": ["tag", "other"],
  "title": "Note Title",
  "textBody": "Note Body",
  "_id": "cksdkjvckadd32",
}];

class App extends Component {
  state ={
    notes: [],
    viewNotes: true,
    createNote: false,
    editNote: false
  }

  componentDidMount(){
      axios.get('https://killer-notes.herokuapp.com/note/get/all')
           .then(res => {console.log(res);
            this.setState({notes: res.data})  
            })
           .catch(err => console.log(err))
  }


  render() {
    console.log(notes);
    return (
    <div className='container'>
      <div className="App">

        <div className="side-bar">
          <div className='lambda-notes'>
            <h1>Lambda Notes</h1>
          </div>
          <div className='button'>View Your Notes</div>
          <div className='button'>+Create New Note</div>

        </div>
        
        <div className='main-view'>
          <div className='title-cont'>
            <h2>Your Notes: </h2>
          </div>
          <div className="cont-body">
            {this.state.notes.map(note => ( 
            <div className="note">
            
            <div className='note-title'>
                <h3>{note.title}</h3>
            </div>
            
            <div className="note-body">{note.textBody}</div>
            
            </div>
            
            )
            )}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
