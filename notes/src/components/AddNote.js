import React from 'react';
import styled from 'styled-components';

export default class AddNote extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            content: ''
        }
    }
    render(){
        return(
            <FormStyled>
                <TitleInput
                    type='text'
                    placeholder='Note Title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    name='title'
                />
                <ContentInput
                    type='text'
                    placeholder='Note Content'
                    value={this.state.title}
                    onChange={this.handleChange}
                    name='content'
                />
            </FormStyled>
        )
    }
}

const FormStyled = styled.div`
    border: 2px solid;
    margin: auto;
    width: 35%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1rem;
    position: absoulute;
`

const TitleInput = styled.input`
    width: 90%;
`

const ContentInput = styled.input`
    width: 90%;
    height: 270px;
    margin-top: 5px;
`