import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';
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
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                console.log('this is our response ' , response.data)
                this.setState({ 
                    note: response.data,
                });
                // console.log('this is our response ' , response.data)

            })
            .catch(err => {
                console.log(err);
            })
        
        // let newNote = this.props.notes.find(note => note._id === id);
        // this.setState({note: newNote});
        this.props.viewNote(id);
    }
    render() {
        
        return(
            <section>
                <div className="action-buttons">
                    <Link to={`/`}>
                        <Button color="danger" 
                            onClick={() => {
                                this.props.deleteNote(this.props.match.params.id);
                            }}>
                                <FaTrashAlt/>
                        </Button>
                    </Link>
                    <Link to={`/edit/${this.props.match.params.id}`}>
                        <Button color="warning">
                            <FaEdit/>
                        </Button> 
                    </Link>
                </div>

                <NoteCard {...this.state.note } notes={this.props.notes} editNote={this.props.editNote}/>

                

                
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