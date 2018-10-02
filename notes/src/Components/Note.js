import React, {Fragment} from 'react';

const Note = props => {
    console.log(props);
    const note = props.notes.find(
        note => `${note.id}` === props.match.params.id
      );
    return (
        <Fragment>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
            
        </Fragment>
    );
};

export default Note;