import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

class NoteList extends Component {
    state = {
        title: '',
        body: ''
    }
}