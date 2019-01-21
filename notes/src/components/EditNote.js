import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import './layout.css';


const Form = styled.form`
    display:flex;
    flex-direction: column;
    


    `;

const Input = styled.input`
    width:30%;
    padding: 15px;
    margin: 10px 0;
`

const Textarea = styled.textarea`
    height:200px;
    width:50%;
    margin-bottom:10px;
`;

const Button = styled.button`
    width:20%;
    background-color:aqua;
    padding:10px;
    color:white;
`;

class EditNote extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: '',
            textBody: ''
        }
    }

    componentDidMount(){
        this.SingleNote();
      }
    
      SingleNote = () => {
            
            console.log('id',this.props)
            axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
          .then(response => {
              this.setState({ title: response.data.title, textBody: response.data.textBody})
          })
          .catch(err => {
            console.log('Error')
          })
          
        
      }
    

    handleInput  = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        this.props.edit(id, {
            title:this.state.title,
            textBody: this.state.textBody
            })
            this.props.history.push(`/`)
    }

    

    

    render(){
     
        return(
        <div className='textarea'>
            <h1>Edit Note</h1>
            <Form onSubmit={this.handleSubmit}>
                <Input name='title' type='text' value={this.state.title} onChange={this.handleInput}/>
               
                <Textarea name='textBody' type='text' value={this.state.textBody} onChange={this.handleInput}/>

                
                <Button type='submit'>Save</Button>

            </Form>
            
        </div>
        )
    }
}

export default EditNote;