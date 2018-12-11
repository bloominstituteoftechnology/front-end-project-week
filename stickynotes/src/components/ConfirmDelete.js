import React from 'react';
import {Div, Button} from '../style';
import {Link} from 'react-router-dom';

const ConfirmDelete = props => {
    const id = props.match.params.id;
    return (
        <Div component='delete'>
        <Button
        onClick={(event) => {
            event.preventDefault();
            props.history.push('/');
            props.toggleMode('default');
            props.deleteNote(props.id);
        }}>
            Delete
        </Button>
        <Link to={`/${id}`}><Button
        onClick={(event) => {
            event.preventDefault();
            props.toggleMode('default');
        }}>
            Cancel
        </Button></Link>

        </Div>
    )
}

export default ConfirmDelete;