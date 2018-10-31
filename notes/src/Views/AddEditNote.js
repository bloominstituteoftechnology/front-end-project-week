import React from 'react';

import '../styles/Styles.css';

function AddEditNote () {

  // render() {
    return (
      <div className='add-edit-note-form'>
        <h1>Create New Note:</h1>
        <form>
          <input type="text" name="title" className="title"/>
          <input type="textarea" name="textBody" className="textBody"/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  // }
}

export default AddEditNote;