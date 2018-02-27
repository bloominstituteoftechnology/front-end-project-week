import React, { Component } from 'react';

class NewView extends Component {
    render() {
        return (
            <div className="section">

                <div className="section__content__left">
                    <p className="title">Lambda Notes</p>
                    <div className="button__main">View Your Notes</div>
                    <br />
                    <div className="button__main">+ Create New Note</div>

                </div>

                <div className="section__content__right">
                <div className="section__content__inputs">
                     <h3>Create New Note</h3>
                 
                    <input className="note-title" placeholder="Note Title"></input>
                      <br />
                    <textarea className="note-content" rows="60" cols="200" placeholder="Note Content"></textarea>
                   
                      <br />

                    <div className="button__main">Save</div>
                </div>
                </div>
            </div>
        );
    }
}

export default NewView;