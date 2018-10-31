import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DeleteModal from './deleteModal'

const ViewContainer = styled.div`
    border: 1px solid black;
    margin-left: 20%;
    height: 100vh;
`;

const ViewNav = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    margin-top: 10px;
    width: 70px;
`;

const ViewNote = styled.div`
    margin: 0 5%;
`;

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getNote(id);
    }


    getNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({
                    id: response.data._id,
                    title: response.data.title,
                    textBody: response.data.textBody
                })
            })
            .catch(error => console.log(error))
    }

    editNote = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        this.props.history.push(`/edit/${id}`)
    }

    handleDelete = () => {
        this.props.handleDeleteNote(NoteView.id);
        this.props.history.push('/')
    }

    handleDeleteNote = noteId => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
            .then(response => {
                /*this.setState({
                    note: this.state.notes.filter(note => {
                        return note.id !== noteId;
                    })
                })*/
                this.props.fetchNotes();
                this.props.history.push('/')
            })
    }

    

    render() {
        return (
            <ViewContainer>
                <ViewNav>
                    <Button onClick={this.editNote}>edit</Button>
                    <DeleteModal 
                        {...this.props}
                        handleDelete={this.handleDeleteNote}
                    />
                </ViewNav>

                <ViewNote>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.textBody}</p>
                </ViewNote>
            </ViewContainer>
        )
    }
}

export default NoteView;