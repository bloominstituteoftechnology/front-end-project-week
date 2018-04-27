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

    handleClick = (e) => {
        this.props.onSubmit(this.state.title, this.state.content);
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

                                <Input type="text" name="title" id="noteTitle" placeholder='title'
                                       onChange={this.handleInputText} value={this.state.currentNote.title}/>
                            </FormGroup>
                            <FormGroup>
                                <Input className='NoteDetail__textarea' type="textarea" name="content" id="noteDetail"
                                       onChange={this.handleInputText} value={this.state.currentNote.content}/>
                            </FormGroup>
                            <Link to={'/'}>
                                <Button onClick={this.handleClick}>Save</Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteEdit;