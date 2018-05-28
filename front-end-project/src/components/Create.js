import React from 'react'
import { Redirect, withRouter } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import { Grid, TextField } from '@material-ui/core'
import { SideNav } from '../components'

const required = (value) => (value ? undefined : 'This is a required field')
const renderCreateTextField = ({ input, placeholder, type, meta: { touched, error }, ...custom
}) => (
    <div>
        <TextField {...input} placeholder={placeholder} type={type} {...custom}/>
        {touched && error && <p><strong> {error} </strong></p>}
        </div>
)

let Create = props => {
    const { handleSubmit, submitting, pristine } = props
    return (
<div>
    <Grid container spacing={40}>
        <Grid item xs={3}>
            <SideNav />
        </Grid>
    <Grid item xs={9}>
    <h3 style={{marginLeft: '2vw'}}> Create Note: </h3>
        <form onSubmit={handleSubmit((val) => props.addNote(val))} className="inputForm" style={{marginLeft: '2vw'}}>
        {props.submitSucceeded ? <Redirect to="/"/> : null}
                <div className="title">
                    <Field
                        name="title"
                        component={renderCreateTextField}
                        type="text"
                        placeholder="Note title"
                        style={{border: '1px solid gray', background: 'white', width: '40vw'}}
                        className="title"
                        validate={required}
                        margin="normal"
                        />
                    </div>
            <div>
                <Field
                    name="content"
                    component={renderCreateTextField}
                    type="text"
                    placeholder="Note content"
                    style={{border: '1px solid gray', background: 'white', width: '70vw'}}
                    validate={required}
                    margin="normal"
                    multiline={true}
                    rows={14}
                    fullWidth
                />
                <div>
                <button type="submit" disabled={submitting || pristine} className="saveButton">
                    Save
                </button>
                </div>
            </div>
        </form>
        </Grid>
        </Grid>
    </div>
    )
}
Create = withRouter(connect(null, { addNote })(Create))
export default reduxForm({
    form: 'create'
    })(Create)