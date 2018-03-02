import React from 'react';
import { Link } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';

export const EditNoteFields = props => {
  return (
    <div className="container">
      <LeftBar />
      <div className="new-note_content">
        <div className="new-note_header">Edit Note:</div>
        <div className="new-note_fields">
          <form type="submit">
            <div className="title-div">
              <input
                type="text"
                className="title-input"
                placeholder="Note Title"
                onChange={props.updateState}
                name="title"
                value={props.displayState('title')}
              />
            </div>
            <div className="content-div">
              <textarea
                type="text"
                className="content-input"
                placeholder="Note Content"
                onChange={props.updateState}
                name="content"
                value={props.displayState('content')}
              />
            </div>
            <Link to='/'>
            <input
              onClick={props.editNote}
              type="submit"
              value="Update"
              className="update-button"
            />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
