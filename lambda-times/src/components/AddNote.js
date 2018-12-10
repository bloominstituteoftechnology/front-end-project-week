import React from 'react';

class AddNote extends React.Component {
    submitHandler = event => {
        event.preventDefault();
        this.props.addNote(this.props.state)
        this.props.history.push('/');
    }

    render() {
        const makeInput = (name, type='text') => (
            <input
            autoComplete='off'
            className="input-section"
            type={type}
            name={name}
            placeholder={name[0].toUpperCase() + name.slice(1)}
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
            </>
        )
    }
}

export default AddNote;