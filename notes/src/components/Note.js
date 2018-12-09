import React from 'react';
import {connect} from 'react-redux';
import {selectNote} from '../store/actions';

// is there a better way to do this? should this be a class component?
const Note = props => {
  props.selectNote(props.match.params.id);
  if (!props.note) {
    return <h3>loading...</h3>;
  }
  return (
    <div>
      <h2>{props.note.title}</h2>
      <h3>{props.note.textBody}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  note: state.selectedNote,
});

export default connect(
  mapStateToProps,
  {selectNote},
)(Note);
