import React from 'react'; 
import {NavLink} from 'react-router-dom'; 
import styled from 'styled-components';


const Container = styled.div`
background: #F0F0F0;
width: 917px;
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
background: #1E90FF;
color: white;
display: flex;
font-size: 1.5rem;
width: 200px;
padding: 1%;
text-align: center;
position: center;
flex-direction: column;
cursor: pointer;
textDecoration: none;
`;



 const EditView = props =>{
    const note = props.notes.find(note => `${note.id}` === props.match.params.id);
    if(!note ){
        return null
    }
    return(
        <Container>
        <h1>Edit Note</h1>
        
            <Title
            placeholder="Title"
            type="text"
            className="title-input"
            onChange={props.handleChange}
            defaultValue={props.titleEdit}
            name='titleEdit'
            />
            <Content 
            placeholder="Content"
            type="text"
            className="content-input"
            onChange={props.handleChange}
            defaultValue={props.contentEdit}
            name= 'contentEdit'
            />
            <NavLink onClick={()=>props.edited(props.match.params.id)} to='/'
            style={{'text-decoration': 'none'}}>
            <Button>Add New Note</Button>
            </NavLink>
        
        </Container>
    )
}
export default EditView; 