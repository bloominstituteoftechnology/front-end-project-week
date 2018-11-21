import React, { Component } from 'react';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import Input from './styles/Input';
import Button from './styles/Button';
import axios from 'axios';


class EditNote extends Component {
    constructor(props) {
        super(props);

        this.state ={
            title: "",
            textBody: "",
            note:[]
        }
    }
componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
              .then(res => {
                //  this.setState({note: res.data})
                this.setState({title: res.data.title, textBody:res.data.textBody})
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
        if(this.state.title && this.state.textBody) {
        this.props.updateContent(event, id, this.state);
        }
        this.setState({
            title:'',
            textBody:''
        })    
        this.props.history.push("/");  
    }

    render() {
        console.log(this.props.deleteContent);
        return (
            <>
               <Wrapper>
                 <h2>Create New Note:</h2>
                
                <Container>
                  <form className='form' onSubmit= {this.submitHandler}>
                      <Input className="input"
                             placeholder= {this.state.note.title}
                             name="title"
                             onChange={this.inputHandler}
                             value={this.state.title}></Input>
                      <textarea 
                             className='textarea' rows="15" cols="90"
                             placeholder={this.state.note.textBody}
                             name="textBody"
                             value={this.state.textBody}
                             onChange={this.inputHandler}></textarea>
                      <Button type='submit' className="save">Update</Button>
                  </form>
                </Container>
               </Wrapper>  
            </>
        );
    }
}

export default EditNote;
