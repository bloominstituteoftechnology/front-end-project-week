import React, { Component } from 'react';

import { 
    ButtonsContainer, 
    StyledButton, 
    NoteModuleContainer, 
    NoteModuleInput, 
    NoteModuleTextArea,  
    NoteModuleForm,
    CloseIcon
} from '../../styles';

import DeleteConfirm from './DeleteConfirm';

class NoteModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getNote(id);
    }

    setShowDelete = val => {
        console.log(val);
        this.setState({showDelete: val})
    }
    
    render() {
        return (
            <NoteModuleContainer>
                <NoteModuleForm onSubmit={e => {
                    this.props.updateNote(this.props.activeNote);
                    this.props.history.push('/app');
                }}>
                    <CloseIcon onClick={e => {e.preventDefault(); this.props.history.push('/app');}}><i className="fas fa-times"></i></CloseIcon>
                    <NoteModuleInput type="text" name="title" value={this.props.activeNote.title} onChange={this.props.activeNoteHandler}/>
                    <NoteModuleTextArea type="text" name="textBody" value={this.props.activeNote.textBody} onChange={this.props.activeNoteHandler}/>
                    <ButtonsContainer display="true">
                        <StyledButton type="button" onClick={e => {
                            e.preventDefault();
                            this.setShowDelete(true)
                        }}
                        >Delete</StyledButton>
                        <StyledButton type="submit" active="true">Save</StyledButton>
                    </ButtonsContainer>
                </NoteModuleForm>
    
                {
                    this.state.showDelete 
                        ? <DeleteConfirm 
                            setShowDelete={this.setShowDelete} 
                            deleteNote={this.props.deleteNote}
                            id={this.props.activeNote.id}
                            history={this.props.history}
                        /> : null
                }
            </NoteModuleContainer>
        );
    }
}

export default NoteModule;
