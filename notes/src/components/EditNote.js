import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    background: #F1F1F1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
const InputTitle = styled.textarea`
    width: 500px;
    padding: 1rem;
    margin: 1rem 0;
`;
const InputContent = styled.textarea`
    width: 700px;
    height: 500px;
    padding: 1rem;
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

class EditNote extends React.Component{
    render(){
        return(
            <Body>
                <h2>Edit Note:</h2>
                <InputTitle placeholder={this.props.oldTitle}
                            name='title'
                            value={this.props.title}
                            onChange={this.props.handleChange}
                />
                <InputContent placeholder={this.props.oldTextBody}
                            name='textBody'
                            value={this.props.textBody}
                            onChange={this.props.handleChange}
                />
                <Button onClick={this.props.updateNote}
                        id={this.props.match.params.id}>
                    Update
                </Button>
            </Body>
        );
    }
}

export default EditNote;