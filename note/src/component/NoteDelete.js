import React from 'react';
import Button from './Button';

function NoteDelete(props) {
    return (
        <div>
            <p>Are you sure you want to delete this?</p>
            <Button text='Delete'></Button>
            <Button text='No'></Button>
        </div>
    );
}

export default NoteDelete;