import React from 'react';
import '../App.css'

export default function Edit(props) {
    return (
        <div className="form">
    
          <div className="form-title">Edit Note:</div>
    
          <div className="form-body">
            <form onSubmit={props.onUpdateHandler}>
              <textarea
                type="text"
                className="form-inputtitle"
                name="title"
                onChange={props.inputHandlerUpdate}
                placeholder="Note Title"
                value={props.title}
              />
              <textarea
                type="text"
                className="form-inputnote"
                name="note"
                onChange={props.inputHandlerUpdate}
                placeholder="Note Content"
                value={props.note}
              />
    
              <button className="form-button">Update</button>
            
            </form>
          </div>
        </div>
    );
  }

