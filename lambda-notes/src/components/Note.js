import React from 'react';
import '../App.css';
import { Route, NavLink } from 'react-router-dom';
import DeleteNote from './DeleteNote';

class Note extends React.Component {
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

    render() {
        return (
            <div className='main-view'>
                <div className='note-links'>
                    <NavLink to={`/note/${this.state.id}/edit`}>edit</NavLink>
                    <NavLink to={`/note/${this.state.id}/delete`}>delete</NavLink>
                </div>
                <h2>{this.state.title}</h2>
                <p>{this.state.content}</p>
                <Route path='/note/:id/delete' render={props => ( <DeleteNote {...props} deleteNote={this.props.deleteNote} /> )} />
            </div>
        )
    }
}

export default Note; 