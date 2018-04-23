import React, { Component } from 'react';
import axios from 'axios';
import './index.css';


class CreateNote extends Component {
    constructor() {
        super();
    }

    render() {
      return (
        <div className='Create__note'>
        <h1>Create New Note:</h1>
        <input
        type='text' 
        placeholder="Note Title"
        className='Create__note-title'
        /> <br/> <br/>
        <input
        type='text' 
        placeholder="Note Body"
        className='Create__note-body'
        /><br/> <br/>
        <button 
        className='Create__note-button'
        >Save</button>
          
  
        </div> // container div end
        
      );
    }
  }

  export default CreateNote;