import React, { Component } from 'react';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className="CreateNote">
                <h3>Create New Note:</h3>
                <form>
                    <input type="text" value={this.state.title} name="title" onChange={event => this.changeHandler(event)} />
                    <input type="text" value={this.state.title} name="textBody" onChange={event => this.changeHandler(event)} />
                    <input type="submit" value="save" />
                </form>
            </div>
        )
    }
}

export default CreateNote;