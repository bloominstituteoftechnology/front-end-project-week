import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CreateNoteFormContainerStyledDiv, CreateNoteStyledForm, CreateNoteStyledTextarea, CreateNoteStyledInput,CreateNoteStyledInput2 } from './CreateNoteForm';
import axios from 'axios';
import host from '../host';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note:{}
        };
    }

    fetchNote = () => {
    }
    componentDidMount() {
        // let note = this.props.noteEntries.filter(noteEntry => noteEntry.id ==this.props.match.match.params.id)
        // note = note[0]
        // console.log('this.props2: ', this.props)
        // console.log('note2: ', note)
        
        
        console.log('this.props2: ', this.props)
        const id = this.props.match.match.params.id;
        console.log('id: ', id)

        let note = this.props.noteEntries.filter(noteEntry => noteEntry.id ==id)
        console.log('note1: ', note)
        note = note[0]
        console.log('note2: ', note)

        this.setState({'note':note})
    }
    
    
    render() {
        // const textBody = this.state.note.textBody
        const { note } = this.state
        console.log('sdfsdf', this.state.note.textBody)
        const textBodyCopy = this.state.note.textBody
        
        return (
            <CreateNoteFormContainerStyledDiv>
                <h2>Edit Note:</h2>
                <CreateNoteStyledForm>
                    <CreateNoteStyledInput
                        type="text"
                        placeholder="Note Title"
                        name="title"
                        onChange={this.props.createNoteTitleHandler}
                        // defaultValue={props.noteEntries[props.match.match.params.id - 1].title}
                        defaultValue={note.title}
                    />
                    <CreateNoteStyledTextarea
                        type="text"
                        placeholder="Note Content"
                        name="content"
                        onChange={this.props.createNoteTextBodyHandler}
                        // defaultValue={props.noteEntries[props.match.match.params.id - 1].textBody}
                        defaultValue={note.textBody}
                        
                    >
                    {`dfdsdf + ${textBodyCopy}`}
                    </CreateNoteStyledTextarea>
                    <CreateNoteStyledInput2
                        type="text"
                        placeholder="Note Content"
                        name="content"
                        onChange={this.props.createNoteTextBodyHandler}
                        // defaultValue={props.noteEntries[props.match.match.params.id - 1].textBody}
                        defaultValue={textBodyCopy}
                        
                    />
                    
                </CreateNoteStyledForm>

                <Link to={`/`}>
                    <button onClick={(e) => this.props.editNoteEntry(e, this.props.match.match.params.id)}>
                        <Link to={`/`}>
                            UPDATE
                        </Link>
                    </button>
                </Link>

            </CreateNoteFormContainerStyledDiv>
        )
    };
}

export default EditNote