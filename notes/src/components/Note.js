import React from 'react';
import { connect } from 'react-redux';



const Note = props => {
    const { note } = props
    return(
        <div key={note._id} className="note-card">
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return {}
}

export default connect(mapStateToProps)(Note);