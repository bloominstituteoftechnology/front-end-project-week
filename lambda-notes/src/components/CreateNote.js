import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

class CreateNote extends Component {
    state = {
        title: '',
        body: ''
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default CreateNote;