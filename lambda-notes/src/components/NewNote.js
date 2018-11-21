import React, { Component } from 'react';
import axios from 'axios';

class NewNote extends Component {
  render() {
    return (
      <div className='newNoteForm'>
      <form>
        <h2>Note:</h2>
        <input placeholder='Note Title'/>
        <input placeholder='Note Content'/>
        <button type='submit'>Submit</button>
      </form>
      </div>

    )
  }
}

export default NewNote