import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
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
                console.log(response);
                // let newNote = this.props.notes.find(note => note._id === id);
                // console
                this.setState({ note: response.data });
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.id;
        this.viewNote(id);
    }
    render() {
        console.log(this.state);
        // const { title, textBody } = this.state.note;
        
        return(
            <div>
                <NoteCard {...this.state.note } editNote={this.editNote}/>

                <Link to={`/edit/${this.props.match.params.id}`}>
                    <div>Edit</div>
                </Link>
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