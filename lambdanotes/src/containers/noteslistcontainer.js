import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NotesList } from '../components/NotesList/';

class NotesListContainer extends Component {
    componentDidMount() {};

    render() {
        return (
            <NotesList />
        );
    }
};

NotesListContainer.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(NotesListContainer);
