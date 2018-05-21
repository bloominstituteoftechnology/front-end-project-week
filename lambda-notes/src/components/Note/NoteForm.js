import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = () => {
        console.log("Form Updated")
    }

    render() { 
        return (
            <div>
                <h2>{this.props.header}</h2>
                <form>
                    <input
                        name="title"
                        value={this.state.title}
                        placeholder="Note Title"
                        onChange={this.onChangeHandler}
                     />
                    <input
                        name="content"
                        value={this.state.content}
                        placeholder="Note Content"
                        onChange={this.onChangeHandler}
                     />
                </form>
                <button onClick={this.onSubmitHandler}>
                    {this.props.button}
                </button>
            </div>
        )
    }
}
 
export default NoteForm;