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
                    <input className="input__note__title" value="Note Title"></input>
                      <br />
                    <input className="input__note__content" value="Note Content"></input>
                      <br />
                    <div className="button__main">Save</div>
                </div>
                </div>
            </div>
        );
    }
}

export default NewView;