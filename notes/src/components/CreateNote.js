import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Body = styled.div`
    background: #F1F1F1;
    width: 899px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
const InputTitle = styled.input`
    width: 400px;
    padding: 0.5rem;
    margin: 1rem 0;
`;
const InputContent = styled.input`
    width: 700px;
    height: 500px;
    padding: 0.5rem;
    margin: 1rem 0;
`;
const Button = styled.button`
    background: #2AB4AE;
    color: white;
    width: 200px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
`;

class CreateNote extends React.Component{
    render(){
        return(
            <Body>
                <h2>Create New Note:</h2>
                <InputTitle placeholder='Note Title'
                            name='title'
                            value={this.props.title}
                            onChange={this.props.handleChange}
                />
                <InputContent placeholder='Note Content' 
                            name='textBody'
                            value={this.props.textBody}
                            onChange={this.props.handleChange}
                />
                <Link to="/get/all">
                    <Button onClick={this.props.addNote}>Save</Button>
                </Link>
            </Body>
        );
    }
}

export default CreateNote;