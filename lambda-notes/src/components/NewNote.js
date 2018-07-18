import React from 'react';
import {Heading, Button} from './../styles/styles';
import Styled from 'styled-components';
import { createNote } from './../actions';
import { connect } from 'react-redux';


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


class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            newNote: {
                title: "",
                textBody: ""
            }   
        }
    }

    handleChange = (newNote, event) => {
        this.setState({[newNote]: {...this.state[newNote], [event.target.name]: event.target.value}})
        console.log(this.state.newNote)
    }

    submitNote = () => {
       this.props.createNote(this.state.newNote)
      this.setState({newNote: {title: "", textBody: "", id: 0}})
    }

    componentDidMount() {
       this.props.getNotes
    }

    render() {
        return (
       
                <NewContainer>
                <Heading>Create New Note:</Heading>
                <FormContainer>
                    <InputTitle 
                        type="text"
                        name="title"
                        placeholder="Note Title"
                        value={this.state.newNote.title}
                        onChange={this.handleChange.bind(this, 'newNote')}
                        />
                    <InputContent 
                        
                        name="textBody"
                        rows="20"
                        cols="50"
                        placeholder="Note Content"
                        value={this.state.newNote.textBody}
                        onChange={this.handleChange.bind(this, 'newNote')}
                        />
                    <Button onClick={this.submitNote}>Save</Button>
                    </FormContainer>
            </NewContainer>
 
        )
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes.notes,
    }
  }
  
  const mapActionsToProps = {
    createNote: createNote
  }
  export default connect( mapStateToProps, mapActionsToProps)(NewNote);