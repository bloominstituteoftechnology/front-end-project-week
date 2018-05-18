import React from 'react';
import { connect } from 'react-redux';

const Note = ({title, content}) =>
  <div>
    <h4>{title}</h4>
    <p>{content}</p>
  </div>

const mapStateToProps = (state) => {
  const { note } = state.toolbarReducer
  return note
}

export default connect(mapStateToProps, {  })(Note);