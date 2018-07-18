import React from 'react';
import {Heading, Button} from './../styles/styles';
import Styled from 'styled-components';
import {data} from './../data';
import axios from 'axios';

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
            textBody: "",
            }   
        }
    }

    handleChange = (editedNote, event) => {
        this.setState({[editedNote]: {...this.state[editedNote], [event.target.name]: event.target.value}})
    }

    editNote = () => {
        const updatedNote=this.state.editedNote;
        const id = this.props.location.state.id;
        axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, updatedNote)
      .then(response => {
        console.log(response);
          this.setState({notes: response.data})
      })
      .catch(err => {
          console.log(err)
      })
    }

    componentDidMount() {
        axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
         //console.log(response);
          this.setState({notes: response.data})
      })
      .catch(err => {
          console.log(err)
      })
      this.setState({editedNote: {title: this.props.location.state.title, textBody: this.props.location.state.body }})
    console.log(this.props.location.state.id)
    }
    render() {
        return (
    
                <NewContainer>
                <Heading>Edit Note:</Heading>
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
                    <Button onClick={this.editNote}>Update</Button>
                    </FormContainer>
            </NewContainer>
       
        )
    }
}

export default EditNote;
