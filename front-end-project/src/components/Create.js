import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import '../styles/Create.css'

let Create = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
    <div className="main-text">
        <h3> Create Note </h3>
        <form onSubmit={handleSubmit((val) => props.addNote(val))} className="inputForm">
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
                <NavLink to="/"><button type="submit" className="saveButton">
                    Save
                </button></NavLink>
            </div>
        </form>
    </div>
    )
}
Create = connect(null, { addNote })(Create)
export default reduxForm({
    form: 'create'
    })(Create)