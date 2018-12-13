import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import styled from "styled-components";
const FormDiv = styled.div `
width: 1024px;
margin: 0 auto;
display: flex;
background-color: #D3D2D3;
box-sizing: border-box;
`
const InnerDiv= styled.div `
width: 75%;
display: flex;
flex-wrap: wrap;
background-color: #F2F1F2
padding: 4%;
justify-content: space-between;
`
const TextInput=styled.textarea `
width: 75%;
border-radius: 4px;
margin-bottom: 30px;
height: 300px;
`
const TitleInput= styled.input `
width: 50%;
border-radius: 4px;
margin-bottom: 30px;
height: 50px;
`
const StyledLink= styled(Link) `
width: 30%;
`
const Button =styled.button `
width: 100%;
color: white;
font-size: 16px;
padding: 15px;
background-color: #24B8BD;
font-weigth: bolder;
`
const Form = props => {
  console.log("form is working");
  return (
    <FormDiv>
      <NavBar />
      <InnerDiv>
        <TitleInput
          name="title"
          placeholder="Note Title"
          onChange={props.handleChanges}
        />

        <TextInput
          name="textBody"
          placeholder=" Note Content"
          onChange={props.handleChanges}
        />
        <StyledLink to="/">
          <Button
            onClick={() => {
              props.addNewNote();
              window.location.reload();
            }}
          >
            Save
          </Button>
        </StyledLink>
      </InnerDiv>
    </FormDiv>
  );
};
export default Form;
