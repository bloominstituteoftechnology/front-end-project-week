import React from 'react';

import '../styles/Styles.css';

function AddEditNote () {

  // render() {
    return (
      <div className='add-edit-note-form'>
        <h1>Create New Note:</h1>
        <form>
          <input type="text" name="title" className="title"/>
          <br/>
          <input type="textarea" name="textBody" className="textBody"/>
          <br/>
          <button type="submit" className='button'>Save</button>
        </form>
      </div>
    );
  // }
}

export default AddEditNote;