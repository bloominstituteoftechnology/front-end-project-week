import React from 'react'
import { Redirect, withRouter } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { editNote } from '../actions'
import { TextField } from '@material-ui/core'
import { SideNav } from '../components'
import { Grid } from '@material-ui/core'

const required = (value) => (value ? undefined : 'This is a required field')
const renderTextField = ({ input, placeholder, type, meta: { touched, error }, ...custom
}) => (
    <div>
        <TextField {...input} placeholder={placeholder} type={type} {...custom}/>
        {touched && error && <p> <strong> {error} </strong> </p>}
        </div>
)

let Edit = props => {
    const { handleSubmit, submitting, pristine } = props

    const title = (props.notes[0].id.toString() === props.match.params.id) ? props.notes[0].title.title : 'Oh well'
    const content = (props.notes[0].id.toString() === props.match.params.id) ? props.notes[0].title.content : 'Oh well'
    return (
    <div style={{position: 'fixed'}}>
    <Grid container spacing={40}>
        <Grid item xs={3}>
            <SideNav />
        </Grid>
    <Grid item xs={9}>
        <h3 style={{marginLeft: '2vw'}}> Edit Note: </h3>
        <form onSubmit={handleSubmit((val, id) => props.editNote(props.match.params.id, val))} style={{marginLeft: '2vw'}}>
        {props.submitSucceeded ? <Redirect to="/"/> : null}
                <div className="title">
                    <Field
                        required
                        name="title"
                        id="required"
                        label="Note Title"
                        component={renderTextField}
                        type="text"
                        style={{border: '1px solid gray', background: 'white', width: '40vw'}}
                        margin="normal"
                        validate={required}
                        />
                    </div>
                    <p> Previous Title: </p>
                    {title}
            <div className="content">
                <Field
                    required
                    name="content"
                    id="required"
                    label="Note Content"
                    rows={14}
                    component={renderTextField}
                    type="text"
                    style={{border: '1px solid gray', background: 'white', width: '70vw'}}
                    multiline={true}
                    fullWidth
                    validate={required}
                />
                <p> Previous Content: </p>
                {content}
                <div>
                <button type="submit" disabled={submitting || pristine} className="saveButton">
                    Update
                </button>
                </div>
            </div>
        </form>
        </Grid>
        </Grid>
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
    form: 'edit',
    })(Edit)