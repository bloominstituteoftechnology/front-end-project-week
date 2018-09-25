import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            title: '',
            textBody: ''
        }
    }


    componentDidMount() {
        const note = this.props.notes.find(note => note._id == this.props.match.params.id);
        this.setState({
            _id: note._id,
            title: note.title,
            textBody: note.textBody
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
                <input type="text" className='title' name="title" value={this.state.title} onChange={this.handleInput} />
                <textarea className="text-body" name="textBody" value={this.state.textBody} onChange={this.handleInput} />
                <button><NavLink to={`/`} onClick={() => this.props.editNote(this.state)} className="button">Update</NavLink></button>
            </div>
        )
    }
}

export default EditNote; 