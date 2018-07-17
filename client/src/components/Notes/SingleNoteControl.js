import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SingleNoteControl extends Component {
  componentDidMount() {
    const id = this.props.match.params;
    console.log(id);
    this.props.fetchNote(id);
  }
  render() {
    const { note } = this.props.notes;
    if (!note) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <h2>{note.title}</h2>
        {note.body}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state
});
export default connect(
  mapStateToProps,
  actions
)(SingleNoteControl);
