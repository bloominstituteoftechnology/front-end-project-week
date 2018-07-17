import React, { Component } from 'react'
import './index.css';

export default class CreateNote extends Component {
  render() {
    return (
      <div>
        <h3 className="mb-4">Create New Note:</h3>
        <input
          type="text" 
          className="mb-2 w-50"
          placeholder="Note Title"
        /><br />
        <textarea 
          className="mb-2 w-75"
          placeholder="New Content"
          rows="15"
        /><br />
        <button 
          type="submit" 
          class="btn btn-info btn-large px-5"
        >
        Save
        </button>
      </div>
    )
  }
}
