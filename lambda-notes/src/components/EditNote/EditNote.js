import React, { Component } from 'react';
import { noteEdit } from '../../actions/index';
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          text: ''
        }
    }

    submit = e => {
      e.preventDefault();
      const { title, text } = this.state;
      const { notes, match } = this.props;
      const note = notes[match.params.index];
      this.props.noteEdit({
          
      })
    }
}