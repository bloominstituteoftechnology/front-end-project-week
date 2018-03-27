import React from 'react';

import { Field, reduxForm } from 'redux-form';

const NoteForm = (props) => {
    const {handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Create New Note:</label>
            <div>
                <Field 
                        name="noteTitle"
                        component="input"
                        type="text"
                        placeholder="First Name"
                />
            </div>
            </div>
            
            <div>
                <label>Notes</label>
            <div>
                <Field name="notes" component="textarea" />
            </div>
            </div>
            
            <div>
                <button type="submit" disabled={pristine || submitting}>
                        Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "simple"
})(NoteForm);