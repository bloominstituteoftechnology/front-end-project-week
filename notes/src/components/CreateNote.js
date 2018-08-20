import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            textBody: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="createNote">
                <form>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler} />
                    <input type="text" name="textBody" placeholder="Text" value={this.state.textBody} onChange={this.changeHandler} />
                </form>
            </div>
        )
    }
}

export default CreateNote;