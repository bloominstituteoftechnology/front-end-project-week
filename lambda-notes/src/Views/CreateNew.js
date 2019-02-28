import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuContainer from '../Containers/MenuContainer';
import styled from 'styled-components';


const CreateNewContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    height:100%;
    background:#f2f1f2;
`;
const FormContainter = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    width:70%;
    padding-top:50px;
    padding-left:50px;

`;

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    padding-bottom:450px;
`;

const NoteTitle = styled.input`
    display:flex;
    width:60%;
    margin-bottom:20px;
`;

const NoteContent = styled.input`
    display:flex;
    width:90%;
    height:150px;
    margin-bottom:10px;
`;
const NoteSubmit = styled.input`
    display:flex;
    justify-content:center;
    width:15%;
    height:35px;
`;

const Title = styled.h2`
    display:flex;
    width:100%;
`;

class CreateNew extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note: {
                title:"",
                textBody:""
            }
        }
    };

    handleInput = event => {
        event.preventDefault();
        this.setState({ note: {...this.state.note, [event.target.name]: event.target.value}})
    }

    addNewNote = event => {
        event.preventDefault();
        this.props.newNote(this.state.note);
        this.props.history.push('/');
    }



    render(){
        return(
            <CreateNewContainer>
                <MenuContainer/>
                <FormContainter>
                    <Title>Create New Note: </Title>
                    <Form onSubmit={this.addNewNote}>
                        <NoteTitle type="text" name="title" placeholder="Note Title" onChange={this.handleInput}/>
                        <NoteContent type="text" name="textBody" placeholder="Note Content" onChange={this.handleInput}/>
                        <NoteSubmit type="submit" value="save" />
                    </Form>
                </FormContainter>
            </CreateNewContainer>
        )
    }
}

export default withRouter(CreateNew);