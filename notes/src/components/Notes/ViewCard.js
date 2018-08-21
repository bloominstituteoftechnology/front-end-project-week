import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DeleteNote from './DeleteNote'
import './ViewCard.css'
class ViewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            delete: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id);
        }
    }

    deleteClicked = () => {
        this.setState({ delete: true })
    }

    fetchNote = id => {
        let newNote = null;
        for (let i = 0; i < this.props.notes.length; i++) {
            if (this.props.notes[i].id === parseInt(id, 10)) {
                newNote = this.props.notes[i];
            }
        }
        return this.setState({ note: newNote })
    }
    onClose = () => {
        this.setState({ delete: false })
    }

    onDelete = (note) => {
        this.props.deleteNote(note);
        this.onClose();
        this.setState({ delete: false, note: null })
    }
    render() {
        return (
            <div className='view-ctn'>

                <div className='action-ctn'>
                    <Link to>
                        <div className='link' onClick={this.deleteClicked}>delete</div>
                    </Link>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                         <Link to={{
                        pathname: '/edit',
                        state: { note: this.state.note },
                    }} style={{ textDecoration: 'none' }}>
                        <div className='link'>edit</div>
                    </Link>

                </div>


                {this.state.note ?
                    <div>
                        <h2>{this.state.note.title}</h2>
                        <p>{this.state.note.content}</p>
                    </div>
                    :
                    <div>No Note</div>
                }

                {this.state.delete ?
                    <div>
                        <DeleteNote note={this.state.note} onDelete={this.onDelete} onClose={this.onClose} />
                    </div>
                    :
                    null
                }
            </div>

        )
    }
}
export default ViewCard;