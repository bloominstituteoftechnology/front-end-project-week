import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import posed from 'react-pose';

// Unused animation
// const config = {
//     enter: {opacity: 1, translateY: 0, transition: { duration: 1000 }, delayChildren: 200},
//     exit: {opacity: 0, translateY: 100},
//     initialPose: 'exit',
// }

const StyledNoteForm = styled(posed.div())`
    background: #F3F3F3;
    width: 100%;
    padding: 5%;
    font-family: Roboto Bold;
    margin-left: 24%;
`;

const H3 = styled.h3`
    margin: 2% 0;
`;

const TitleInput = styled.input`
    width: 50%;
    min-height: 25px;
    margin-bottom: 3%;
`;

const ContentInput = styled.textarea`
    width: 100%;
    min-height: 300px;
`;

const StyledButton = styled.button`
    background: #2BC1C4;
    padding: 1%;
    margin-top: 5%;
    color: white;
    border: 2px solid #979797;
    width: 30%;
    height: 40px;
    font-family: Raleway Medium;
    font-size: 1rem;
    &:hover{cursor: pointer;}
`;

const StyledLabel = styled.label`
    margin: 5%;
`;

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputTitle: '',
            inputBody: '',
            addNote: props.addNote,
            tags: {
                todo: false,
                wisdom: false,
                nonsense: false,
            },
            created: false,
        }
    }

    handleInput = (e) => {
        if(e.target.type === 'checkbox'){
            let name = e.target.name;
            let newTags = {...this.state.tags};
            newTags[name] = !newTags[name];
            this.setState({ tags: newTags});
        }
        else{
            this.setState({[e.target.name] : e.target.value});
        }
        
    }

    addNote = (e) => {
        e.preventDefault();
        const newTags = Object.entries(this.state.tags).reduce((acc, entry) => {
            entry[1] === true ? acc.push(entry[0]) : null
            return acc;
        }, [])
        const newNote = {tags: newTags.join(','), title: this.state.inputTitle, textBody: this.state.inputBody}
        this.props.addNote(newNote);
        this.setState({inputTitle: '', inputBody: '', created: true});
    }


    render(){
        if(this.state.created){
            return <Redirect to='/' />
        }
        return (
            <StyledNoteForm>
                <H3>Create New Note:</H3>
                <form onSubmit={this.addNote}>
                    <TitleInput type="text"
                            name="inputTitle"
                            placeholder="Note Title"
                            value={this.state.inputTitle}
                            onChange={this.handleInput} /><br />
                    <ContentInput type="text"
                            name="inputBody"
                            placeholder="Note Content"
                            value={this.state.inputBody}
                            onChange={this.handleInput} /><br />
                    <H3>Optional Tags</H3>
                    <StyledLabel>To-Do<input type="checkbox"
                                            name="todo"
                                            checked={this.state.tags.todo}
                                            onChange={this.handleInput} /></StyledLabel>
                    <StyledLabel>Words of Wisdom<input type="checkbox"
                                            name="wisdom"
                                            checked={this.state.tags.wisdom}
                                            onChange={this.handleInput} /></StyledLabel>
                    <StyledLabel>Nonsense<input type="checkbox"
                                            name="nonsense"
                                            checked={this.state.tags.nonsense}
                                            onChange={this.handleInput} /></StyledLabel><br />
                    <StyledButton>Save</StyledButton>
                </form>
            </StyledNoteForm>
        );
    }
    }

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { addNote })(NoteForm);