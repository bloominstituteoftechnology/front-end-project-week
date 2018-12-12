import React from 'react';
import {Div, Button, H1} from '../style';

const ConfirmDelete = props => {
    return (
        <Div component='delete'>
        <H1 component='delete'>Confirm Delete Note</H1>
        <Button
        onClick={(event) => {
            event.preventDefault();
            props.history.push('/');
            props.toggleMode('default');
            props.deleteNote(props.id);
        }}>
            Delete
        </Button>
        <Button
        onClick={(event) => {
            event.preventDefault();
            props.toggleMode('default');
        }}>
            Cancel
        </Button>

        </Div>
    )
}

export default ConfirmDelete;