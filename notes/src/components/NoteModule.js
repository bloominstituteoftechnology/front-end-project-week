import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNote, deleteNote, updateNote, activeNoteHandler } from '../actions';

import { 
    ButtonsContainer, 
    StyledButton, 
    NoteModuleContainer, 
    NoteModuleInput, 
    NoteModuleTextArea,  
    NoteModuleForm,
    CloseIcon
} from '../styles';

import DeleteConfirm from './DeleteConfirm';

class NoteModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gotNote: false,
            showDelete: false
        }
    }
    componentDidUpdate() {
        if(this.state.gotNote) return;

        const { id } = this.props.match.params;
        this.props.getNote(id);
        this.setState({gotNote: true})
    }
    
    render() {
        
        return (
            <NoteModuleContainer>
                <NoteModuleForm onSubmit={e => {
                    this.props.updateNote(this.props.activeNote);
                    this.props.history.push('/');
                }}>
                    <CloseIcon onClick={e => {e.preventDefault(); this.props.history.push('/');}}><i className="fas fa-times"></i></CloseIcon>
                    <NoteModuleInput type="text" name="title" value={this.props.activeNote.title} onChange={this.props.activeNoteHandler}/>
                    <NoteModuleTextArea type="text" name="textBody" value={this.props.activeNote.textBody} onChange={this.props.activeNoteHandler}/>
                    <ButtonsContainer display={true}>
                        <StyledButton type="button" onClick={e => {
                            e.preventDefault();
                            this.setState({showDelete: true})
                        }}
                        >Delete</StyledButton>
                        <StyledButton type="submit" active="true">Save</StyledButton>
                    </ButtonsContainer>
                </NoteModuleForm>
    
                {
                    !this.props.showDelete ? null
                        : <DeleteConfirm 
                            setShowDelete={this.props.setShowDelete} 
                            deleteNote={this.props.deleteNote} 
                            history={this.props.history} 
                            id={this.props.activeNote.id} 
                        />
                }
            </NoteModuleContainer>
        );
    }
}

const mapStateToProps = state => {
    const { activeNote } = state;
    return {
        activeNote
    }
}

export default connect(mapStateToProps, {getNote, deleteNote, updateNote, activeNoteHandler})(NoteModule);
