import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteNote} from '../actions';

class DeleteNote extends Component {

    handleDelete = () => {
        this.props.deleteNote(this.props.noteId);
    };

    render() {
        return (
            <DeleteContainer>
                <span className={'sub-links'} onClick={()=>{this.handleDelete()}}>delete</span>
            </DeleteContainer>
        )}
}

export default connect(null, {deleteNote})(DeleteNote);

const DeleteContainer = styled.span`
        text-align:center;
`;