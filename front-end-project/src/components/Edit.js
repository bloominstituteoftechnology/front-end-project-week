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

console.log('What is this?', props.notes)
console.log('Map maybe?', props.notes.map(note => note.id))
    const currentNote = (props.notes.filter(note => (note.id.toString() === props.match.params.id)))[0]
    const title = currentNote.note.title
    const content = currentNote.note.content
    console.log('currentNote', currentNote)
    return (
    <div style={{overflowY: 'scroll', overflowX: 'hidden'}}>
    <Grid container spacing={40}>
        <Grid item xs={4} sm={3}>
            <SideNav />
        </Grid>
    <Grid item xs={12}>
        <div style={{marginLeft: 'calc(5vw + (150px + 2vw))'}}>
        <h3> Edit Note: </h3>
        <form onSubmit={handleSubmit((val, id) => props.editNote(props.match.params.id, val))}>
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
                    <p style={{marginRight: '2vw'}}> {title} </p>
            <div className="content">
                <Field
                    required
                    name="content"
                    id="required"
                    label="Note Content"
                    rows={14}
                    component={renderTextField}
                    type="text"
                    style={{border: '1px solid gray', background: 'white', width: 'calc(90% - 1vw)'}}
                    multiline={true}
                    fullWidth
                    validate={required}
                />
                <p> Previous Content: </p>
                <p style={{marginRight: '2vw'}}>{content}</p>
                <div>
                <button type="submit" disabled={submitting || pristine} className="saveButton">
                    Update
                </button>
                </div>
            </div>
        </form>
        </div>
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