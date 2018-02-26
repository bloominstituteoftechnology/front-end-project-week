import React from 'react';
import './createnote.css';

const CreateNote = () => {
  return (
    <div>
      <form>
        <input className="note__title" type="text"/>
        <textarea cols="60" rows="10"></textarea>
        <button className="note__button">Save</button>
      </form>
    </div>
  );
}

export default CreateNote;