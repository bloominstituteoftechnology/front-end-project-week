import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Paper} from './Styled';

const NoteView = props => {
    const {id} = props;
    console.log("ddd", props);
    return (
        <Modal>
            <Paper>
                <h1>{id}</h1>
            </Paper>
        </Modal>
    );
};

NoteView.propTypes = {};

export default NoteView;
