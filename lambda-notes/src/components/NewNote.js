import React from 'react'
import Button from './Button'

export default () => 
  <div>
    <h2>New Note</h2>
    <hr />
    <label for="title">
      <h3>Title</h3>
      <input 
        id="title" 
        type="text" 
        name="title" 
      />
    </label>  
    <label for="text">
      <h3>Text</h3>
      <textarea 
        id="text" 
        rows="20" 
        cols="100" 
      />
    </label>
    <Button>Add Note</Button>
  </div>
