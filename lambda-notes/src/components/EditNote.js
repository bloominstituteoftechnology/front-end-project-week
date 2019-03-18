import React from 'react';
import EditANote from './EditANote';

class EditNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            textBody:''
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.editNote(
            this.props.match.params.id,
            {title: this.state.title, textBody: this.state.textBody})

    }

    render() {
        return (
            <div>
                <EditANote
                    title={this.state.title}
                    body={this.state.textBody}
                    handleChange={this.handleChange}
                    submitHandler={this.submitHandler}
                />
            </div>
        )
    }
}

export default EditNote