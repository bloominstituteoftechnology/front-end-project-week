import React from 'react';
import { connect } from 'react-redux';
import { addingToDo } from '../../actions';
import styled from 'styled-components';

const NewNoteForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`;

const NewNoteH3 = styled.h3`
color: 4A4A4A;
font-size: 3.2rem;
text-align: left;
margin-top: 90px;
color: #4A4A4A;.
letter-spacing: .1rem;
width: 100%;
padding: 0px 4%;
`;

const NewNoteInput = styled.input`
    width: 50%;
    height: 60px;
    margin: 15px, 0;
    border: 2px solid lightgrey;
    padding: 0px 2%;
    margin-left: 4%;
    border-radius: 5px;
    font-size: 2.0rem;
    margin-bottom: 20px;
`;

const NewNoteTextArea = styled.textarea`
    width: 85%;
    height: 500px;
    margin: 0px 4%;
    font-size: 2.0rem;
    padding: 10px 3%;
    border: 2px solid lightgrey;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    margin-bottom: 20px;
`;

const NewNoteSubmitButton = styled.button`
    height: 70px;
    border: 2px solid #929898;
    background-color: #2BC1C4;
    color: #FFFFFF;
    margin-bottom: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;
    margin-left: 4%;
    width: 29%;
`;

class AddToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            textBody: '',
        }
    }

    inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addingToDo(this.state)
        this.setState({
            title: '',
            textBody: '',
        })
        window.location.href = '/notes';
    }

    render() {
        return (
            <div>
                <NewNoteH3>Create New Note:</NewNoteH3>
                <NewNoteForm onSubmit={this.submitHandler}>
                    <NewNoteInput type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.inputHandler} />
                    <NewNoteTextArea type='text' name='textBody' placeholder='Note Content' value={this.state.textBody} onChange={this.inputHandler} />
                    <NewNoteSubmitButton type='submit'>Save</NewNoteSubmitButton>
                </NewNoteForm>
            </div>
        )
    }
}

export default connect(() => ({}), { addingToDo })(AddToDo); 