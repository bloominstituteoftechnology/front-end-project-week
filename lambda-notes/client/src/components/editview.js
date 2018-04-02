import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditView extends Component {

    render() {
        return (
            <div className="section">

                <div className="section__content__left">
                    <h1>Lambda Notes</h1>
            <div className="button__main">View Your Notes</div>
                    <br />
              <div className="button__main">+ Create New Note</div>

                </div>

                <div className="section__content__right">
                <div className="section__content__inputs">
                     <h3>Edit Note:</h3>
                     <input className="note-title" placeholder="Note Title"></input>
                      <br />
                    <textarea className="note-content" rows="60" cols="200" placeholder="Note Content"></textarea>
                      <br />
                    <div className="button__main">Update</div>
                </div>
                </div>
            </div>
        );
    }
}

export default EditView;