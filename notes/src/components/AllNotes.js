import PropTypes from 'prop-types';

function AllNotes(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>You don't have any Notes yet. :(</h1>
    }

    return (
        <div className="notes-list-wrapper">
            {props.notesList.map(note => (
                <div className="note-card" key={note.id}>
                    <h3 onClick={() => props.history.push(`/${note.id}`)}>
                    {note.title}
                    </h3>
                    <p>{note.body}</p>
                </div> 
            ))}
        </div>
    )
}

AllNotes.propTypes = {
    notesList: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
}