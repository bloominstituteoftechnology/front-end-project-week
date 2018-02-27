import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class DeleteNote extends Component {

    handleDelete = () => {

        console.log('this si the note we have to delte:', this.props.noteId);

    };

    render() {
        return (
            <DeleteContainer>
                <span className={'sub-links'} onClick={()=>{this.handleDelete()}}>delete</span>
            </DeleteContainer>
        )}
}

const mapStateToProps = state => {
    const {notes_reducer} = state;
    return {
        note: notes_reducer.singleNote,
    }
};

export default connect(mapStateToProps, {})(DeleteNote);

const DeleteContainer = styled.span`
        text-align:center;
`;