import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import styled from 'styled-components';

const FormDiv = styled.div`
    border-radius: 0 4px 4px 0;
    background-image: linear-gradient(rgba(108,234,211, 0.45),rgba(195,46,84, 0.2));
    width: 740px;
    max-height: 100%;
    overflow-y: scroll;
`

const Form = styled.form`
    margin: 5.6rem 2.6rem;
    display: flex;
    flex-direction: column;
`

const FormTitle = styled.h1`
    font-size: 2.1rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
`

const Input = styled.input`
    padding: 1rem;
    width: 35rem;
    height: 3.6rem;
    background-color: rgba(255,255,255,0.7);
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 190px;
    height: 3.5rem;
    background-color: rgba(98,19,176,0.2);
    border: 2px solid rgba(198,119,276,0.7);
    border-radius: 4px;
    margin-top: 2.5rem;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 300;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

export default class NewNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            textBody: this.props.note.textBody,
        }
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    mdeHandler = value => {
        this.setState({
            ...this.state,
            textBody: value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.editNote(this.props.match.params.id, this.state);
        this.setState({
            title: '',
            textBody: '',
        });
        this.props.history.push(`/${this.props.match.params.id}`);
    }

    render() {
        return (
            <FormDiv>
                <Form onSubmit={this.submitHandler}>
                    <FormTitle>Edit Note:</FormTitle>
                    <Input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                    /><br/>
                    <SimpleMDE
                        type="text"
                        id="textBody"
                        value={this.state.textBody}
                        onChange={this.mdeHandler}
                        options={{
                            status: false,
                            toolbar: false
                        }}
                    />
                    <Button type="submit">Save</Button>
                </Form>            
            </FormDiv>
        );
    }

}