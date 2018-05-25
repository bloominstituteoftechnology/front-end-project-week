import React from 'react'
import { Redirect, withRouter } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { editNote } from '../actions'
import '../styles/Edit.css'

let Edit = props => {
    const { handleSubmit, submitting, pristine } = props
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
                        placeholder="Note title"
                        className="title"
                        rows="1"
                        cols="60"
                        />
                    </div>
            <div className="content">
                <Field
                    name="content"
                    component="textarea"
                    type="text"
                    placeholder="Note content"
                    className="content"
                    rows="15"
                    cols="145"
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


Edit = withRouter(connect(null, { editNote })(Edit))
export default reduxForm({
    form: 'edit'
    })(Edit)