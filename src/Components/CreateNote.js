import React from "react";
import axios from "axios";

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            contentValue: ''
        }
    }
    addNote = () => {
        const newNote = ({ title: `${this.state.titleValue}`, content: `${this.state.contentValue}` });
        axios
            .post(`${process.env.REACT_APP_API}/notes`, newNote)
            .then(response => {
                this.setState({ titleValue: '', contentValue: '' })
                this.props.handleRefresh()
            })
            .catch(err => {console.log(err)})
    }
    handleInputChange = e => {this.setState({ [e.target.name]: e.target.value });};
    render() {
        return (
        <form className="create-note">
            <h1>Create New Note:</h1>
            <input
                name='titleValue'
                value={this.state.titleValue}
                onChange={this.handleInputChange}
                placeholder="Note Title..."
            />
            <textarea
                name='contentValue'
                value={this.state.contentValue}
                onChange={this.handleInputChange}
                placeholder="Note content..."
            />
            <a href='/'>
                <div onClick={this.addNote} className="custom-button">
                    Save
                </div>
            </a>
        </form>
        );    
    }
};

export default CreateNote;
