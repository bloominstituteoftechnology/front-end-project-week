import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getData } from '../../Store/actions';
import Note from '../Views/Note';

class NoteList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
}
