import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

class List extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  render() {
    return (
      <div>
        <h4 className="Title">Your Notes</h4>
        <div>
          {this.state.notes.map(note => {
            return (
              <div key={note.id}>
                <Link
                  to={{
                    pathname: `/notes/${note.id}}`,
                    state: { currentNote: note }
                  }}
                >
                  <div classname="container">
                    <div className="card">
                      <h4>{note.title}</h4>

                      <p>{note.text}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
