import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const NoteViewContainer = styled.div`
width: 1380px;
height: 500px;
margin: 0 auto;
`

const NoteViewButtons = styled.div`
text-decoration: underline;
text-align: right;
display: flex;

p {
    cursor: pointer;
}

p:first-child {
    padding-right: 20px;
    // margin-left: 1800px;
    margin-left: 1500px;
}
`

const NoteViewContent = styled.div`
text-align: left;
// margin-left: 300px;
margin-right: 500px;

p {
    width: 1500px;
}
`

const ModalContainer = styled.div`
    border: 1px solid #C9C9C9;
    width: 600px;
    height: 200px;
    margin-left: 500px;
    background-color: white;

button:nth-child(2) {
    background-color: #CA001A;
    border: 1px solid #C9C9C9;
}

button:first-child {
    background-color: #24B8BD;
}
`

class NoteView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.deleteNote(this.props.match.params.id)
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === note._id) {
                        return (
                            <NoteViewContainer key={note._id}>
                            <NoteViewButtons>
                                <Link to={`/edit/${note._id}`}>
                                <p>edit</p>
                                </Link>
                                <p onClick={this.toggleModal}>delete</p>
                            </NoteViewButtons>
                            <NoteViewContent>
                                <h2>{note.title}</h2>
                                <p>{note.textBody}</p>
                            </NoteViewContent>
                            <ModalContainer>
                                <div>
                                    <DeleteModal show={this.state.isOpen}
                                        onClose={this.toggleModal}>
                                            <p>Are you sure you want to delete this?</p>
                                            <button onClick={this.handleDelete}>Delete</button>
                                        </DeleteModal>
                                </div>
                            </ModalContainer>
                            </NoteViewContainer>
                        )
                    }
                })}
            </div>
        )
    }
}

export default NoteView;
