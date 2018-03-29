import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import './notes-listview.css';

class ListOfNotes extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  render() {
    return (
      <div className="listofnotes">
        <h4 className="your-notes">Your Notes:</h4>
        <div className="notes">
          {this.state.notes.map(note => {
            return (
              <div className="note" key={note.id}>
                <Link to={{ pathname: `/notes/${note.id}`, state: { currentNote: note } }}>
                  <Card>
                    <h3>{note.title}</h3>
                    <h6>{note.text}</h6>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListOfNotes;
