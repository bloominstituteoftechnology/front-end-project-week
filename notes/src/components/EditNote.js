import React, { Component } from 'react';

import styled from 'styled-components'

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
            id: props.note._id,
            title: props.note.title,
            textBody: props.note.textBody
        }
    }

    handleInput  = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        console.log(this.props)
        this.props.updateNote(id, {
            title:this.state.title,
            textBody: this.state.textBody
            })
            this.props.history.push(`/`)
    }

    

    

    render(){
        if(!this.props.note){
            return <div>Loading data...</div>
}
        return(
        <div className='textarea'>
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