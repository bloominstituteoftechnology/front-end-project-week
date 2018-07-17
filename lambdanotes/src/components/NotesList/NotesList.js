import React, { Component } from 'react';
import './index.css';

export default class NotesList extends Component {
  const 
  render() {
    return (
      <div>
        <h3>Your Notes</h3>
        <div className="notesList-container w-25 float-left mr-3">
          <div className="card border-secondary mb-3 note">
            <div className="card-body ">
              <h5 className="card-title">Secondary card title</h5>
              <hr />
              <p className="card-text secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="notesList-container w-25 float-left mr-3">
          <div className="card border-secondary mb-3 note">
            <div className="card-body ">
              <h5 className="card-title">Secondary card title</h5>
              <hr />
              <p className="card-text secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="notesList-container w-25 float-left mr-3">
          <div className="card border-secondary mb-3 note">
            <div className="card-body ">
              <h5 className="card-title">Secondary card title</h5>
              <hr />
              <p className="card-text secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="notesList-container w-25 float-left mr-3">
          <div className="card border-secondary mb-3 note">
            <div className="card-body ">
              <h5 className="card-title">Secondary card title</h5>
              <hr />
              <p className="card-text secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
