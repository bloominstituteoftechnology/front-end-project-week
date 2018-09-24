import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        const note = this.props.notes.find(note => note.id == this.props.match.params.id);
        console.log(note);
        this.setState({
            id: note.id,
            title: note.title,
            content: note.content
        })
    }

    handleInput = (event, props) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className='main-view'>
                <h2>Edit Note:</h2>
                <input type="text" name="title" placeholder={this.state.title} size="75" onChange={this.handleInput} />
                <textarea rows="12" cols="75" name="content" placeholder={this.state.content} onChange={this.handleInput} />
                <NavLink to='/' onClick={() => this.props.editNote([this.state])} className="button">Update</NavLink>
            </div>
        )
    }
}

export default EditNote; 