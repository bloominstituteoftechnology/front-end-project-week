import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addNote } from '../actions';

const CreateNoteWrapper = styled.div`
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

class CreateNewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ' ',
            textBody: ' '
          };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = event => {
        event.preventDefault();
        this.props.addNote(this.state.title, this.state.textBody);
        this.props.history.push("/");
      }

    render() {
        return(
            <CreateNoteWrapper>
                <NotesHeader>Create New Note:</NotesHeader>
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
            </CreateNoteWrapper>
        )
    }
}

export default connect(null, { addNote })(CreateNewNote);