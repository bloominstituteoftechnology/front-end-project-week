import React from 'react';
import { Link } from 'react-router-dom';

class ViewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: [],
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState(() => ({ id: Number(id), notes: this.props.notes }))
    }
    filterNotes = (note) => {
        if (note.id === this.state.id) {
            return (
                <div key={note.id}>
                    <div className='note-header'>
                        <Link to={`/edit/${note.id}`} className='btn'>edit</Link>
                        <h1 onClick={this.props.toggleDeleting} className='btn'>delete</h1>
                    </div>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>    
                </div>
            )
        }
    }

    render() {
        return (
            <div className='single-note'>
                {this.props.notes.map(this.filterNotes)}
            </div>
        )   
    }
}
 
export default ViewNote;