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
            currentNote: {},
            title: '',
            content: ''
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


    handleUpdate = (e) => {
        this.props.onSubmit(this.state.title, this.state.content, this.state.id);
    };

    // updateNote = (e) => {
    //     console.log('Updating Note From Edit Form');
    //     let updateNote = this.state.currentNote;
    //     console.log('Before change', updateNote);
    //     const newNotes = this.props.notes;
    //     updateNote = { id: this.state.currentNote.id ,title: this.state.title, content: this.state.content };
    //     newNotes[this.state.currentNote.id] = updateNote;
    //     console.log('After',updateNote);
    //     this.setState({notes: newNotes});
    //
    // };

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
                                <Button onClick={this.handleUpdate}>Save</Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteEdit;