import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Note extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            note: null
        }
    }
    viewNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                
                this.setState({ 
                    note: response.data 
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
    deleteNote = id => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => {
                this.setState({
                    note: null
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.viewNote(id);
    }
    render() {
        
        return(
            <div>
                <NoteCard {...this.state.note } editNote={this.editNote}/>

                <Link to={`/edit/${this.props.match.params.id}`}>
                    <div>Edit</div>
                </Link>
                <button onClick={() => this.deleteNote(this.props.match.params.id)}><FaTrashAlt/></button>

                
                {/* <div className="card-tags">
                    {props.note.tags.map((tag, index) => {
                        return (
                            <span key={index}>{tag}</span>
                        )
                    })}
                </div> */}
            </div>
        )
    }
}

export default Note;