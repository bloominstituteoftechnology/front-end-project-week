import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'


class ViewNote extends Component {
    state = {
        notes: '',
        index: '',
    }

    deleteNote = (id) => {
        this.props.deleteNote(id);
    }


    handleDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='delete'>
                        <p>Are you sure You want to delete this note?</p>
                        <div className='delete-btns'>
                            <button onClick={() => {
                                this.deleteNote(this.state.notes[this.state.index]._id)
                                onClose()
                            }}
                                className='deleteBtn'>
                                Delete
                            </button>
                            <button onClick={() => { onClose() }} className='noBtn'> No </button>
                        </div>
                    </div>
                )
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className='editeDelete'>
                    <Link to={`/EditeNote/${this.state.index}`} className='link'> Edite </Link>
                    <Link to='/NotesList'><button onClick={this.handleDelete} className='link'> Delete </button> </Link>
                </div>
                {this.state.index ? (
                    <div className='add-note'>
                        <h3> {this.state.notes[this.state.index].title} </h3>
                        <p> {this.state.notes[this.state.index].text} </p>
                    </div>
                ) : ('')}
            </React.Fragment>
        );
    }

    componentDidMount() {
        const newNotes = this.props.notes;
        const newIndex = this.props.match.params.id;
        //console.log(this.state.notes[this.state.index]._id);
        this.setState({
            notes: newNotes,
            index: newIndex,
        })
    }
}

export default ViewNote;