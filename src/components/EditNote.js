import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editNote } from '../actions';

const StyledEditNote = styled.div`
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

class EditNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            editTitle: '',
            editBody: '',
            editNote: props.editNote,
            id: props.match.params.id,
            edited: false,
            tags: {
                todo: false,
                wisdom: false,
                nonsense: false,
            }
        }
    }

    componentDidMount(){
        this.setState({editTitle: this.props.currentNote.title, editBody: this.props.currentNote.textBody})
        let tags = this.props.currentNote.tags
        if(tags){
            let newTags = {...this.state.tags}
            tags.forEach(tag => {
                newTags[tag] = !newTags[tag]
            })
            this.setState({ tags: newTags })
        }
    }

    handleInput = (e) => {
        if(e.target.type === 'checkbox'){
            let name = e.target.name;
            let newTags = {...this.state.tags};
            newTags[name] = !newTags[name];
            this.setState({ tags: newTags});
        }else{
            this.setState({[e.target.name] : e.target.value});
        }
    }

    editNote = (e) => {
        e.preventDefault();
        const newTags = Object.entries(this.state.tags).reduce((acc, entry) => {
            entry[1] === true ? acc.push(entry[0]) : null
            return acc;
        }, [])
        const edited = {title: this.state.editTitle, textBody: this.state.editBody, tags: newTags}
        this.props.editNote(this.state.id, edited);
        this.setState({editTitle: '', editBody: '', edited: true});
    }

    render(){
        //Returns us home after an edit
        if(this.state.edited){
            return <Redirect to='/notes' />;
        }
        return (
            <StyledEditNote>
                <H3>Edit Note:</H3>
                <form onSubmit={this.editNote}>
                    <TitleInput type="text"
                            name="editTitle"
                            placeholder="Edit Title"
                            value={this.state.editTitle}
                            onChange={this.handleInput} /><br />
                    <ContentInput type="text"
                            name="editBody"
                            placeholder="Edit Content"
                            value={this.state.editBody}
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
                    <StyledButton>Update</StyledButton>
                </form>
            </StyledEditNote>
        );
    }
    }

const mapStateToProps = (state) => {
    return{
        currentNote: state.currentNote,
    }
}
 
export default connect(mapStateToProps, { editNote })(EditNote);