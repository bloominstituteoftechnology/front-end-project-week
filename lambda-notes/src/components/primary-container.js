import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes, saveNote } from '../REDUX/actions';

class PrimaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { this.props.getNotes() }

  cardFactory = note => {
    const contentLength = note.content.split(" ");
    return (
      <Card key={note.id} className="col-4 NoteCard">
        <Link to={{
          pathname: `/viewnote/${note.id}`,
          state: { viewNote: {note} }
        }}>
          <CardTitle className="NoteTitle">{note.title}</CardTitle>
        </Link>
        <CardBody className="NoteContent">
          { contentLength.length >= 20 ? `${contentLength.slice(0, 20).join(" ")} ...` : note.content }
        </CardBody>
      </Card>
    )
  }

  render() {
    return (
      <div className="PrimaryContainer">
        <h1 className="PrimaryContainer__header">Your Notes:</h1>
        <div className="PrimaryContainer__cardContainer">
          {this.props.notes.map(note => { return this.cardFactory(note) })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes, saveNote })(PrimaryContainer);