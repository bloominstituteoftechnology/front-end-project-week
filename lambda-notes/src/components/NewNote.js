import React from 'react';
import {Heading, Button} from './../styles/styles';
import Styled from 'styled-components';
import { createNote, toggleUpdate } from './../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import ListForm from './ListForm';
import AddTag from './AddTag';


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
            showForm: false,
            showTagForm: false,
            listItem: '',
            checkList: [],
            tag: '',
            newNote: {
                title: "",
                textBody: "",
                checkList: [],
                tags: [],
            }   
        }
    }

    handleChange = (newNote, event) => {
        this.setState({[newNote]: {...this.state[newNote], [event.target.name]: event.target.value}})
        console.log(this.state.newNote)
    }

    handleItem = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitNote = () => {
       this.props.createNote(this.state.newNote)
      this.setState({newNote: {title: "", textBody: "", id: 0}})
      this.props.toggleUpdate();
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    toggleTag = () => {
        this.setState({showTagForm: !this.state.showTagForm})
    }

    addToNote = () => {
        const list = this.state.checkList.push(this.state.listItem)
        this.setState(state => ({checkList: [...this.state.newNote, list]}));
        console.log(this.state.newNote);
    }

    addItem = (newNote) => {
        let newTags = this.state.newNote.tags.push(this.state.tag)
         this.setState(state => ({tags: [...this.state.newNote, newTags]}))
     }



    render() {
        return (
       
                <NewContainer>{console.log(this.state.newNote.tags)}
                <Heading>Create New Note:</Heading>
                <FormContainer>{console.log(this.state.newNote.checkList)}
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
                        <div>
                        <button onClick={this.toggleForm}>Add checklist</button>
                        <button onClick={this.toggleTag}>Add tag</button>
                        </div>

                        {this.state.showForm ? 
                        <div>
                        <ul>{console.log(this.state.checkList)}
                            {this.state.checkList.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                            </ul>
                               
                                <input 
                                    type='text'
                                    name='listItem'
                                    placeholder='Add to list'
                                    value={this.state.listItem}
                                    onChange={this.handleItem}
                                />
                                <button onClick={this.addToNote}>Add to list</button>
                               
                            </div>
                        : null}




                        
                        {this.state.showTagForm ? 
                            <div >
                                <input 
                                    type='text'
                                    name='tag'
                                    placeholder='Tag'
                                    onChange={this.handleItem}
                                />
                                <button onClick={this.addTag}>Add</button>
                            </div>
                        : null}

                    <Button onClick={this.submitNote}>Save</Button>
                    </FormContainer>
                    {this.props.update ? <Redirect to={ `/notes`} /> : null}
            </NewContainer>
 
        )
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes.notes,
      update: state.toggle.update
    }
  }
  
  const mapActionsToProps = {
    createNote: createNote,
    toggleUpdate: toggleUpdate,
  }
  export default connect( mapStateToProps, mapActionsToProps)(NewNote);