import React from 'react';
import "./CreateNote.css"
import Button from './Button'
import { Link } from 'react-router-dom'
import './Note.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchNotes } from './Actions'

const CreateNote = (props) => {
    let id = props.match.params.id

    console.log(props)
    return (
        <div className="create">
            <h5>{props.pageTitle}</h5>

            <input onChange={props.onChange} placeholder="Note Title" type="text" id="note-title" value={props.title} name="title" />
            <textarea onChange={props.onChange} placeholder="Note Content" type="text" id="note-text" value={props.text} name="text" />
            {props.pageTitle === "Edit Your Note:" ? <Link to="/notes"><Button class="save-button" text="Save" function={() => {
                props.onSubmit(id)
                props.fetchNotes(props.auth.uid)
            }} /></Link> :
                <Link to="/notes"><Button class="save-button" text="Save" function={() => {
                    props.fetchNotes(props.auth.uid)
                    props.onSubmit()
                }} /></Link>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        auth: state.auth.user
    }
}

// export default CreateNote

export default withRouter(connect(mapStateToProps, { fetchNotes })(CreateNote));