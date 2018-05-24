import React from 'react'
import { Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import '../styles/Create.css'

let Create = props => {
    const { handleSubmit, submitting } = props
    return (
    <div className="main-text">
        <h3> Create New Note: </h3>
        <form onSubmit={handleSubmit((val) => props.addNote(val))} className="inputForm">
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
                    cols="110"
                />
                <button type="submit" disabled={submitting} className="saveButton">
                    Save
                </button>
            </div>
        </form>
        
    </div>
    )
}


Create = connect(null, { addNote })(Create)
export default reduxForm({
    form: 'create'
    })(Create)