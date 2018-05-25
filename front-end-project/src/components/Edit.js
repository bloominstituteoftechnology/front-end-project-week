import React from 'react'
import { Redirect, withRouter } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { editNote } from '../actions'


let Edit = props => {
    const { handleSubmit, submitting, pristine } = props
    const title = (props.notes[0].id.toString() === props.match.params.id) ? props.notes[0].title.title : 'Oh well'
const content = (props.notes[0].id.toString() === props.match.params.id) ? props.notes[0].title.content : 'Oh well'
    return (
    <div className="main-text">
        <h3> Edit Note: </h3>
        <form onSubmit={handleSubmit((val, id) => props.editNote(props.match.params.id, val))} className="inputForm">
        {props.submitSucceeded ? <Redirect to="/"/> : null}
                <div className="title">
                    <Field
                        name="title"
                        component="textarea"
                        type="text"
                        placeholder={title}
                        className="title"
                        rows="1"
                        cols="40"
                        />
                    </div>
            <div className="content">
                <Field
                    name="content"
                    component="textarea"
                    type="text"
                    placeholder={content}
                    className="content"
                    rows="15"
                    cols="98"
                />
                <div>
                <button type="submit" disabled={submitting || pristine} className="saveButton">
                    Update
                </button>
                </div>
            </div>
        </form>
        
    </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}
Edit = withRouter(connect(mapStateToProps, { editNote })(Edit))
export default reduxForm({
    form: 'edit'
    })(Edit)