import React from 'react';
import { connect } from 'react-redux';

import { addNote, editNote } from '../../Store/actions';

class NoteForm extends React.Component {
  state = {
    title: '',
    textBody: '',
    _id: null
  };
}
