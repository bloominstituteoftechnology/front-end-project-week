import React from 'react';
import { connect } from 'react-redux';
import { addingToDo } from '../actions';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            textBody: '',
        }
    }

    inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addingToDo(this.state)
    }

    render() {
        return (
            <div>
            <h4>Create New Note:</h4>
            <form onSubmit={this.submitHandler}>
                <input type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.inputHandler} />
                <input type='text' name='textBody' placeholder='Note Content' value={this.state.textBody} onChange={this.inputHandler} />
                <button type='submit'>Submit</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addingToDo: addingToDo})(AddToDo);