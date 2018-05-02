import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNotes, updateSelected } from '../actions';
import Notes from './Notes';

class YourNotes extends Component {
  componentDidMount() {
    this.props.getNotes(this.props.users);
  }

  render() {
    return (
      <Container>
        <h2 className="yourNotes">Your Notes:</h2>
        <div className="cardsList">
          {this.props.notes.map(note => {
            return (
              <form>
                <Notes key={note._id} note={note} />
                {note.selected ? (
                  <Redirect
                    to={`https://lambdanotes-frontend.herokuapp.com/note/${
                      note._id
                    }`}
                  />
                ) : (
                  console.log('redirect ')
                )}
              </form>
            );
          })}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { getNotes, updateSelected })(
  YourNotes
);
