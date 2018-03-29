import React, { Component } from 'react';
import '../App.css'


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: [],
            editDescription: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState(  )
    }
    handleSubmit = event => {
        this.setState({ editTitle: '', editDescription: '' })
    
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        
        const {title, description} = this.props.note

        return (
            <div className="EditNoteContainer">


                <header className="EditHeader">Edit Note:</header>

                <form className="EditTitleContainer">

                    <input 
                        type="text" 
                        name="editTitle" 
                        defaultValue={`${title}`} 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit} 
                    />
                    <input 
                        type="text"
                        name="editDescription"
                        defaultValue={`${description}`}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />

                    <button type="button" onClick={this.handleSubmit}>Update</button>

                </form>

            </div>
        )
    }
}

export default EditNote;