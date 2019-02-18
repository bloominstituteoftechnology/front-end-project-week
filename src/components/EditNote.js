import React, { Component } from 'react';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import Input from './styles/Input';
import Button from './styles/Button';
import axios from 'axios';

const API = process.env.API_URL || `http://localhost:2300`;

class EditNote extends Component {
    constructor(props) {
        super(props);

        this.state ={
            note:[],
            title: "",
            content: "",
            noteAdded: false
        }
    }
componentDidMount() {
        // console.log(this.props.notes)
        // this.props.notes.map( note => {
        //     if(this.props.match.params.id === note._id) {
        //         this.setState({title:note.title, content:note.content})
        //     }
        // })
        const id = this.props.match.params.id;
        axios.get(`${API}/api/notes/${id}`)
        // axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
              .then(res => {
                //  this.setState({note: res.data})
                this.setState({title: res.data.title, content:res.data.content})
              })
 }
inputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
submitHandler = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        let editedNote = {title: this.state.title, content: this.state.content};
        this.props.updateContent(id, editedNote);
        this.setState({
            title:'',
            content:'',
            
        })    
        this.props.history.push("/");  
    }

    render() {
        console.log(this.props.deleteContent);
        console.log(this.props.notes)
        return (
            <>
               <Wrapper>
                 <h2>Edit Note:</h2>
                <Container>
                  <form className='form' onSubmit= {this.submitHandler}>
                      <Input className="input"
                             placeholder= "New Title"
                             name="title"
                             onChange={this.inputHandler}
                             value={this.state.title} required></Input>
                      <textarea 
                             className='textarea' rows="15" cols="90"
                             placeholder="Your New Content"
                             name="content"
                             value={this.state.content}
                             onChange={this.inputHandler} required></textarea>
                      <Button type='submit' className="save">Update</Button>
                  </form>
                </Container>
               </Wrapper>  
            </>
        );
    }
}

export default EditNote;
