import { React } from 'react';

const createNote = props => {
  return (
    //input fields for title and description here
    <div>
      <input type="text" name="Title" placeholder="Title" />
      <input type="text" name="Description" placeholder="Type in your description here!"/>
    </div>
  )
}