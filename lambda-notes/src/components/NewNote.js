import React, { Component } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    border: 1px solid gray;
    background-image: linear-gradient(rgba(253,161,110, 0.85),rgba(77,161,78, 0.3));
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
    background-color: rgba(255,255,255,0.7);
    padding: 1rem;
    width: 35rem;
    height: 3.6rem;
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const InputTwo = styled.textarea`
    margin: 2rem 0;
    padding: 1rem;
    background-color: rgba(255,255,255,0.7);
    width: 60rem;
    height: 32rem;
    text-align: top-left;
    white-space: pre-wrap;
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const InputThree = styled.input`
    padding: 1rem;
    width: 60rem;
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
    height: 3.7rem;
    background-color: rgba(36,84,37,0.4);
    border: 2px solid rgb(18,42,18);
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
            title: '',
            textBody: '',
            tagInput: '',
            tags: []
        }
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        }, () => 
            this.setState({
                ...this.state,
                tags: this.state.tagInput.split(' ')
            })
        )
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNote(this.state);
        this.setState({
            title: '',
            textBody: '',
            tagInput: '',
            tags: []
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <FormDiv>
                <Form onSubmit={this.submitHandler}>
                    <FormTitle>Create New Note:</FormTitle>
                    <Input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        placeholder="Title"
                    />
                    <InputTwo
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        placeholder="Note"
                    />
                    <InputThree
                        type="text"
                        name="tagInput"
                        value={this.state.tagInput}
                        onChange={this.changeHandler}
                        placeholder="Tags"
                    />
                    <Button type="submit">Save</Button>
                </Form>            
            </FormDiv>
        );
    }

}