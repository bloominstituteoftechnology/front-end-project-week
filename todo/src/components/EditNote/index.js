import React from 'react';
import { connect } from 'react-redux';
import { updateToDo } from '../../actions';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const EditNoteForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`;

const EditNoteH3 = styled.h3`
color: 4A4A4A;
font-size: 3.2rem;
text-align: left;
margin-top: 90px;
color: #4A4A4A;.
letter-spacing: .1rem;
width: 100%;
padding: 0px 4%;
`;

const EditNoteInput = styled.input`
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

const EditNoteTextArea = styled.textarea`
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

const EditNoteSubmitButton = styled.button`
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

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        const note = this.props.notes.find(item => `${item._id}` === this.props.match.params.id);

        this.setState({
            note: note,
            title: note.title,
            textBody: note.textBody,
        })
    }

    inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const updatedToDo = {
            title: this.state.title,
            textBody: this.state.textBody,
            _id: this.state.note._id,
        }
        this.props.updateToDo(updatedToDo._id, updatedToDo);
        window.location.href = '/notes';
    }

    render() {
        return (
            <div>
                <EditNoteH3>Edit Note:</EditNoteH3>
                <EditNoteForm onSubmit={this.submitHandler}>
                    <EditNoteInput type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.inputHandler} />
                    <EditNoteTextArea type='text' name='textBody' placeholder='Note Content' value={this.state.textBody} onChange={this.inputHandler} />
                    <EditNoteSubmitButton type='submit'>Update</EditNoteSubmitButton>
                </EditNoteForm>
            </div>
        )
    }
}

const mapStateToProps = ({ notes }) => ({ notes })

export default withRouter(connect(mapStateToProps, { updateToDo })(EditNote));
