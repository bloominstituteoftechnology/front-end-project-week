import React from 'react';
import {Heading, Button} from './../styles/styles';
import Styled from 'styled-components';
import {data} from './../data';

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


class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            editedNote: {title: "",
            body: "",
            id: 0
            }   
        }
    }

    handleChange = (editedNote, event) => {
        this.setState({[editedNote]: {...this.state[editedNote], [event.target.name]: event.target.value}})
    }

    submitNote = (event) => {
        event.preventDefault();
       this.state.notes.push(this.state.editedNote)
       this.setState({editedNote: {title: "", body: "", id: 0}})
    }

    componentDidMount() {
        this.setState({notes: data})
        console.log(this.props.location.state)
    }
    render() {
        return (
    
                <NewContainer>
                <Heading>Edit Note:</Heading>
                <FormContainer>
                    <InputTitle 
                        type="text"
                        name="title"
                        placeholder={this.props.title}
                        value={this.state.editedNote.title}
                        onChange={this.handleChange.bind(this, 'newNote')}
                        />
                    <InputContent 
                        
                        name="body"
                        rows="20"
                        cols="100"
                        placeholder="Note Content"
                        value={this.state.editedNote.body}
                        onChange={this.handleChange.bind(this, 'editedNote')}
                        />
                    <Button onClick={this.submitNote}>Update</Button>
                    </FormContainer>
            </NewContainer>
       
        )
    }
}

export default EditNote;