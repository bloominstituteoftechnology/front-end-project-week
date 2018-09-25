import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NoteEditor } from '../components/NoteEditor/';

class NoteEditorContainer extends Component {
    componentDidMount() {};

    render() {
        return (
            <NoteEditor />
        );
    }
};

NoteEditorContainer.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(NoteEditorContainer);
