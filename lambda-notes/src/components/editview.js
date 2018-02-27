import React, { Component } from 'react';

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
                    <input className="input__note__title" value="Note Title"></input>
                      <br />
                    <input className="input__note__content" value="Note Content"></input>
                      <br />
                    <div className="button__main">Update</div>
                </div>
                </div>
            </div>
        );
    }
}

export default EditView;