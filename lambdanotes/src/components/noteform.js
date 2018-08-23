import React from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const FormContainer = styled.div`
    width: 75%;
    background: #F2F1F2;
    height: 100vh;
    border: 2px solid #56aaad; 
    border-left: 0;
`

const FormMessage = styled.h4`
    text-align: left;
    margin: 60px 30px 20px;
    color: #414141;
    font-weight: bold;
`

const TitleInput = styled.input`
    border-radius: 3px;
    border: 1px solid gray;
    font-size: 14px;
    height: 40px;
    padding-left: 10px;
    width: 50%;
    margin: 10px 30px;
`

const NoteInput = styled.textarea`
    border-radius: 3px;
    border: 1px solid gray;
    font-size: 14px;
    height: 400px;
    padding-left: 10px;
    width: 90%;
    margin: 10px 30px;
    padding-top: 5px;
`

const FormAttrib = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const FormButtonAttrib = styled.div`
    display: flex;
`

const FormButton = styled.button`
    color: white;
    background: #24b8bd;
    width: 25%;
    height: 50px;
    margin: 10px 30px;
    font-weight: bold;
    border: 2px solid #56aaad; 
`

const LinkButton = styled.button`
    color: white;
    background: #24b8bd;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    font-weight: bold;
    border: 2px solid #56aaad; 
`

const LinkContainer = styled.div`
    width: 25%;
`

const NoteForm = (props) => {
    return (  
        <React.Fragment>
            <FormContainer>
                <FormMessage>Create New Note:</FormMessage>
                {props.Redirect ? <Redirect to={'/'}/> : 
                <FormAttrib onSubmit={props.addHandler}>
                    <TitleInput type="text" placeholder="Note Title" onChange={props.handleNoteChange} value={props.notes.title} name="title" />
                    <NoteInput type="textarea" placeholder="Note Content" onChange={props.handleNoteChange} value={props.notes.note} name="note" />
                    <FormButtonAttrib>
                        <FormButton>Save</FormButton>
                        <LinkContainer>
                            <Link to={`/`}><LinkButton>Cancel</LinkButton></Link>
                        </LinkContainer> 
                    </FormButtonAttrib>                                       
                </FormAttrib>
                }
            </FormContainer>            
        </React.Fragment>        
    );
}
 
export default NoteForm;