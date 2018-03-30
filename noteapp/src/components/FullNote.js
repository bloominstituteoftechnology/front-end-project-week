import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

class FullNote extends Component {
  state = {
    view: []
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    const getNote = this.props.notes.filter(note => {
      return Number(note.id) === Number(id);
    });
    this.setState({
      view: getNote
    });
  }

  render() {
    console.log(this.props.notes);
    return (
      <div>
        <Link to="/editNote">
          <button>edit</button>
        </Link>
        <DeleteModal />
        <div>delete</div>
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

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(FullNote);
