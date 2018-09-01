// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/listnotes.css';
import './css/preview.css';





export default class NotePreview extends Component {

  render() {
    // console.log(this.props)
    const { note, index, key } = this.props;

    return (
            <div>
              <Link
                key={key}
                index={index}
                className="note-link"
                _id={note._id}
                to={`/listnotes/${note._id}`}>

                  <div key={index} className="note-preview">

                    <div className="notTags">
                      <h3>{note.title}</h3>
                      <p>{note.textBody}</p>
                    </div>

                
                  </div>
              </Link>
            </div>)
}
}
