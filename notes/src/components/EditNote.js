import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { editNote } from '../actions';

const NoteWrapper = styled.div`
    margin: 0 20px 0 20px;;
    min-width: 75%;
`;
const NotesHeader = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin: 50px 0 30px 0;
`;
const SCForm = styled.form`
    display: flex;
    flex-direction: column;
`;
const SCButton = styled.button`
    width: 175px;
    border-radius: 2px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
    margin-top: 10px;
    border: 1px solid lightgrey;
    background: ${props => (props.color === "red" ? "#CA001A" : "#25B7BD")};
`;
const TitleInput = styled.input`
    border: 2px solid lightgrey;
    margin-bottom: 10px;
    width: 50%;
    line-height: 2;
    font-size: 14px;
    border-radius: 5px;
    padding: 10px;
`;
const ContentInput = styled.textarea`
    border: 2px solid lightgrey;
    width: 75%;
    font-size: 12px;
    border-radius: 5px;
    padding: 10px;
    line-height: 2;
`;

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        };
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = event => {
        event.preventDefault();
        const id = this.props.match.params.noteId;
        this.props.editNote(id, this.state.title, this.state.textBody);
        this.props.history.push("/");
      }

      componentDidMount() {
        const selectedNote = this.props.notes.find(note => `${note._id}` === this.props.match.params.noteId)
        if(selectedNote === undefined) {
            return <div>Loading...</div>
        } else {
            return this.setState({title: selectedNote.title, textBody: selectedNote.textBody})
        }
      }

    render() {
        return(
            <NoteWrapper>
                <NotesHeader>Edit Note:</NotesHeader>
                <SCForm onSubmit={this.submitHandler}>
                    <TitleInput
                        autoFocus
                        onChange={this.handleInputChange}
                        placeholder="Note Title"
                        value={this.state.title}
                        name="title"
                    />
                    <ContentInput
                        type='textarea'
                        onChange={this.handleInputChange}
                        placeholder="Note Content"
                        value={this.state.textBody}
                        name="textBody"
                        rows="15"
                    />
                    <SCButton type="submit">Save</SCButton>
                </SCForm>
            </NoteWrapper>
        )
    }
}

export default connect(null, { editNote })(EditNote);