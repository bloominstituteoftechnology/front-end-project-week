import React from 'react';
import './note.css';

export class CreateNote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-9 right__side">
            <div className="row">
              <div className="col-3">
                <h4>Create New Note:</h4>
              </div>
            </div>
            <div className="row">
              <form>
                <input className="note-title" type="text" placeholder="Note Title" name="Note Title" />
                <input className="note-body" type="textarea" placeholder="Note Content" name="Note Content" />
                <button className="save">Save</button>
              </form>
            </div>
          </div>;
    }
}
