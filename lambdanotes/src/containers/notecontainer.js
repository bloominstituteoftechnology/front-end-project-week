import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Note } from '../components/Note/';

class NoteContainer extends Component {
    componentDidMount() {};

    render() {
        return (
            <Note />
        );
    }
};

NoteContainer.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(NoteContainer);
