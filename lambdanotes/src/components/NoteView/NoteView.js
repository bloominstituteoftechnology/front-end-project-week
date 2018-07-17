import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';

export default class NoteView extends Component {
  
  render() {
    return (
      <div>
        <div className="top-content float-right">
          <button type="button" class="btn btn-link">Edit</button>
          <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">Delete</button>
        </div>
        <DeleteNote />
        <h3 className='content-container'>View Note</h3>
        <p className='notesList'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}
