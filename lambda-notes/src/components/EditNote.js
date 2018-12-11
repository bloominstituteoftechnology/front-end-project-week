import React from 'react';

class EditNote extends React.Component {
    submitHandler = event => {
        event.preventDefault();
        this.props.editNote(this.props.singleNote._id, this.props.state)
        this.props.history.push('/');
    }

    render() {
        const makeInput = (name, type='text') => (
            <input
            autoComplete='off'
            className="input-section"
            type={type}
            name={name}
            placeholder={this.props.singleNote[name]}
            value={this.props.state[name]}
            onChange={this.props.handleChange} />
        )
        return (
            <>
            <form onSubmit={this.submitHandler} autoComplete='nope'>
                {makeInput('title')}
                {makeInput('textBody')}
                <button>Add Note></button>
            </form>
            <p>hello</p>
            </>
        )
    }
}

export default EditNote;