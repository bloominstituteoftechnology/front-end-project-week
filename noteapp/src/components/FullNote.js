import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

class FullNote extends Component {
  state = {
    notes: {},
    id: '',
    view: []
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.state.id = this.props.match.params.id;
    const getNote = this.props.notes.filter(note => {
      console.log(note.id, this.state.id);
      return Number(note.id) === Number(this.state.id);
    });
    this.setState({
      notes: this.props.note,
      view: getNote
    });
  }

  render() {
    // const { id, title, text } = this.state.note;
    console.log(this.props.notes);
    return (
      <div>
        <Link to="/editNote">
          <button>edit</button>
        </Link>
        <DeleteModal />
        <div>
          {this.state.view.map((note, i) => {
            return (
              <div key={note.id}>
                <div>{note.title}</div>
                <div>{note.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
// <div>{note.title}</div>
// <div>{note.text}</div>
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(FullNote);
