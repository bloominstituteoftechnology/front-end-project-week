import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './CreateNewNote.css';

const CreateNewNote = () => {
  return (
    <div class="Container">
      <div className="Sidebar-Container">
        <Sidebar />
      </div>
      <div className="New-Note">
        <h2>Create New Note: </h2>
        <input type="text" placeholder="Note Title"/>
        <textarea rows="20" cols="50" placeholder="Note Content">
        </textarea>
        <Link to="/"><button>Save</button></Link>
      </div>
    </div>
  )
}

export default CreateNewNote;