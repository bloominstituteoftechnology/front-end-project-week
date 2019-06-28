import React from 'react';
import {Heading, Button} from './../styles/styles';
import Styled from 'styled-components';
import { updateNote, toggleUpdate, getSingleNote } from './../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import AddTag from './AddTag';

const Container = Styled.div`
display: flex
`;

const NewContainer = Styled.div`
  display: block;
  width: 100%;
  padding: 50px 25px;
  background: #F3F3F3;
  
`;

const FormContainer = Styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
    height: 500px;
  margin-top: 20px;
`;

const InputTitle = Styled.input`
    width: 400px;
    height: 50px;
    border-radius: 5px;
`;

const InputContent = Styled.textarea`
    width: 95%;
    height: 320px;
    border-radius: 5px;
`;

const TagButton = Styled.button`
    width: 100px;
    height: 40px;
    border-radius: 5px;
`;


class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedNote: {title: "",
            textBody: "",
            tags: ['1']
            },
        newTag: false,
        }
    }

    handleChange = (editedNote, event) => {
        this.setState({[editedNote]: {...this.state[editedNote], [event.target.name]: event.target.value}})
    }

    editNote = () => {
        const id = this.props.match.params.id;
       this.props.updateNote(id, this.state.editedNote);
       this.props.toggleUpdate();
    }

    toggleTag = () => {
        this.setState({newTag: !this.state.newTag})
    }

    addTag = (editedNote, tag) => {
       // let newTags = this.state.editedNote.tags.push(event.target.value)
        this.setState({[editedNote]: {...this.state[editedNote], tags: tag}})
    }

    componentDidMount(){
        this.props.getSingleNote(this.props.match.params.id);
        this.setState({editedNote: {title: this.props.note.title, textBody: this.props.note.textBody}})
    }

    render() {
        return (
    
                <NewContainer>
                <Heading>Edit Note:</Heading>{console.log(this.state.editedNote)}
                <FormContainer>
                    <InputTitle 
                        type="text"
                        name="title"
                        placeholder={this.state.editedNote.title}
                        value={this.state.editedNote.title}
                        onChange={this.handleChange.bind(this, 'editedNote')}
                        />
                    <InputContent 
                        name="textBody"
                        rows="20"
                        cols="50"
                        placeholder={this.state.editedNote.textBody}
                        value={this.state.editedNote.textBody}
                        onChange={this.handleChange.bind(this, 'editedNote')}
                        />
                        <TagButton onClick={this.toggleTag}>Add Tag</TagButton>
                        {this.state.newTag ? <AddTag submitTag={this.addTag} editedNote={this.state.editedNote}/> : null}
                        
                    <Button onClick={this.editNote}>Update</Button>
                    </FormContainer>
                    {this.props.update ? <Redirect to='/notes' /> : null}
            </NewContainer>
       
        )
    }
}

const mapStateToProps = state => {
    return {
      update: state.toggle.update,
      note: state.notes.note
    }
  }
  
  const mapActionsToProps = {
    updateNote: updateNote,
    toggleUpdate: toggleUpdate,
    getSingleNote: getSingleNote
  }
  export default connect( mapStateToProps, mapActionsToProps)(EditNote);
