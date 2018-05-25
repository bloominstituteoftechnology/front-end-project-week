import React from 'react';
import "./CreateNote.css"
import Button from './Button'
import { Link } from 'react-router-dom'
import './Note.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const CreateNote = (props) => {
    let id = Number(props.match.params.id)

    console.log("id", id, typeof (id))
    return (
        <div className="create">
            <h5>{props.pageTitle}</h5>

            <input onChange={props.onChange} placeholder="Note Title" type="text" id="note-title" value={props.title} name="title" />
            <textarea onChange={props.onChange} placeholder="Note Content" type="text" id="note-text" value={props.text} name="text" />
            {props.pageTitle === "Edit Your Note:" ? <Link to="/"><Button class="save-button" text="Save" function={() => props.onSubmit(id)} /></Link> :
                <Link to="/"><Button class="save-button" text="Save" function={(props) => props.onSubmit()} /></Link>}
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         notes: state.notes
//     }
// }

export default CreateNote

// withRouter(connect(mapStateToProps)(CreateNote));