import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 const Container = styled.div`
    background: #F0F0F0;
    width: 820px;
    height: 775px;
    flex-direction: column;
    display: flex;
    padding: 1%;
`;
const Title = styled.input`
    width: 400px;
    padding: 1%;
    margin: 2%;
`;
const Content = styled.input`
    width: 700px;
    height: 500px;
    padding: 1%;
    margin: 2%;
`;
const Button = styled.button`
    background: darkblue;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    width: 200px;
    padding: 0.5rem 1rem;
    margin: 2%;
`
 class NewNote extends React.Component{
    render(){
        return(
            <Container>
                <h2>Create New Note:</h2>
                <Title placeholder='Note Title'
                            name='title'
                            value={this.props.title}
                            onChange={this.props.handleChange}
                />
                <Content placeholder='Note Content' 
                            name='content'
                            value={this.props.content}
                            onChange={this.props.handleChange}
                />
                <Button onClick={this.props.addNote}>Save</Button>
            </Container>
        );
    }
}
 export default NewNote;