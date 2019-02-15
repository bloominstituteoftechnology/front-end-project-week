import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


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
            <section>
                <div class="action-buttons">
                    <Link to={`/note/${this.props.match.params.id}`}>
                        <Button color="danger" onClick={() => this.deleteNote(this.props.match.params.id)}><FaTrashAlt/></Button>
                    </Link>
                    <Link to={`/edit/${this.props.match.params.id}`}>
                        <Button color="warning"><FaEdit/></Button> 
                    </Link>
                </div>
                <NoteCard {...this.state.note } editNote={this.editNote}/>

                

                
                {/* <div className="card-tags">
                    {props.note.tags.map((tag, index) => {
                        return (
                            <span key={index}>{tag}</span>
                        )
                    })}
                </div> */}
            </section>
        )
    }
}

export default Note;