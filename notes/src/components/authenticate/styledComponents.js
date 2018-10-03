import styled from 'styled-components';

const AuthenticationForm=styled.form`
    max-width: 394px;
    width: 100%;
    margin:0 auto;
    margin-top: 30px;
    border: 1px solid black;
    background-color: #E8E8EE;
    height: 260px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`
const AuthenticationHeading=styled.h2`
    color:#1c1c1c;
    margin-top:30px;
`
const AuthenticationInput=styled.input`
    width:60%;
    height:30px;
    margin-bottom:5px;
    border-radius:4px;
    border-color:transparent;
    border:1px solid #A9A9A9;
    outline:none;
}`
const AuthenticationButton=styled.button`
    width:60%;
    border-color:transparent;
    display: block;
    margin-top:5px;
    height:30px;
    border-radius:5px;
    background-color:#345678;
    color:#E8E8EE
    letter-spacing:1px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        opacity:0.85;
    }
    &:focus{
        outline:none;
    }
`
export {AuthenticationForm,AuthenticationHeading,AuthenticationInput,AuthenticationButton};