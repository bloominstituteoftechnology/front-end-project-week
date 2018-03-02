import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteAPI from './NoteAPI';

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      // .then(res => {
      //   return res.json();
      // })
      .then(data => {
        this.setState({ notes: data.notes });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="list-view">
      <div className="list-view-header">
      <h2>Your Notes:</h2>
      </div>
      <div className="list-view2">
      {
        // NoteAPI.all().map(n => (
        NoteAPI.notes.map(n => (
        // this.state.notes.map(n => (
          <div key={n.id} className="list-view-notes">
            <div className="note-block">
              <Link to={`/list/${n.id}`}>
                <div className="note-block-title">
                  {n.title}
                </div>
                <div className="note-block-content">
                  {n.content}
                </div>
              </Link>
            </div>
          </div>
            ))
      }
      </div>
    </div>
    )
  }
}

export default ListView;