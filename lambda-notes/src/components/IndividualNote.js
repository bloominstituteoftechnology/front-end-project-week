import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DeleteModal from './DeleteModal';

const NotePage = styled.div`
    width: 100%;
    padding: 3rem;
    margin-left: 22rem;
    position: relative;

    h2 {
        margin: 3rem 0;
        font-size: 2rem;
        font-weight: bold;
    }

    p {
        width: 90%;
        word-break: break-all;
    }
`

const EditButton = styled.button`
    position: absolute;
    right: 13.5rem;
    top: 1.5rem;
    border: none;
    background-color: #F2F1F2;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`

const DeleteButton = styled.button`
    position: absolute;
    right: 8rem;
    top: 1.5rem;
    border: none;
    background-color: #F2F1F2;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`

class IndividualNote extends React.Component {
    constructor(){
        super();
        this.state = {
            willDelete: false,
        }
    }

    render(){
        const note = this.props.notes.find(note => `${note._id}` === this.props.match.params.id);
        if (!note || !note.title) {
            return <h2>Note not found...</h2>
        }

        return(
            <NotePage>
                <EditButton onClick={() => this.props.history.push(`/edit-note/${note._id}`)}>edit</EditButton>
                <DeleteButton onClick={() => this.setState({ willDelete: !this.state.willDelete })}>
                    delete
                </DeleteButton>
                <h2 className='note-page-title'>{note.title}</h2>
                <p className='note-page-text'>{note.textBody}</p>
                <DeleteModal {...this.props} note={note} show={this.state.willDelete}/>
            </NotePage>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, null)(IndividualNote);