import React from 'react'
import '../../App.css';
import './NoteCard.css'
import {Form, Input, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom';

class NoteEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            id: 0,
            currentNote: {}
        };
    }

    componentDidMount() {

        const newId = Number(this.props.match.params.id);
        console.log(`newId: ${newId}`);

        const newNotes = this.props.notes;
        console.log(`Edit Note view notes: ${newNotes}`);

        const newNote = newNotes.filter((note) => note.id === newId).pop();

        this.setState({notes: newNotes, id: newId, currentNote: newNote});
    }

    handleInputText = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };


    updateNote = (e) => {
        e.preventDefault();
        console.log('Updating Note From Edit Form');
        // let updateNote = this.state.currentNote;
        // console.log(updateNote);
        // this.setState({currentNote: updateNote});


    };

    render() {
        return (
            <div className='col-9 right__side'>
                <div className='row'>
                    <div className="col-3">
                        <h4>Edit Note:</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <Form>
                            <FormGroup>

                                <Input type="text"
                                       name="title"
                                       placeholder={this.state.currentNote.title}
                                       onChange={this.handleInputText} />
                            </FormGroup>
                            <FormGroup>
                                <Input className='NoteDetail__textarea'
                                       type="textarea"
                                       name="content"
                                       placeholder={this.state.currentNote.content}
                                       onChange={this.handleInputText} />
                            </FormGroup>
                            <Link to={'/'}>
                                <Button>Save</Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteEdit;