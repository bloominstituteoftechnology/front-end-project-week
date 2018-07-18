import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ViewCard.css'
class ViewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
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

    fetchNote = id => {
        let newNote = null;
        for (let i = 0; i < this.props.notes.length; i++) {
            if (this.props.notes[i].id === parseInt(id, 10)) {
                newNote = this.props.notes[i];
            }
        }
        return this.setState({ note: newNote })
    }

    render() {
        return (
            <div className='view-ctn'>
                <div className='action-ctn'>
                    <Link to={{
                        pathname: `/delete`,
                        state: { note: this.state.note }
                    }} style={{ textDecoration: 'none' }}>
                        Delete
                     </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={{
                        pathname: `/edit`,
                        state: { note: this.state.note }
                    }} style={{ textDecoration: 'none' }}>
                        Edit
                    </Link>
                </div>
                {this.state.note ?
                    <div>
                        <h2>{this.state.note.title}</h2>
                        <p>{this.state.note.description}</p>
                    </div>
                    :
                    <div>No Note</div>
                }
            </div>

        )
    }
}
export default ViewCard;