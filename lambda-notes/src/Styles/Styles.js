import styled from "styled-components"

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const HeaderContainer = styled.div`
    background-color: silver;
    display:flex;
    flex-direction: column;
    max-width: 200px;
    width: 30%;
`
export const Button = styled.button`
    background-color: lightblue;
    color: white;
    text-align: center;
    font-weight: bold;
    padding: 5px 20px;
    cursor: pointer;
    width: 90%;
`
export const DisplayContainer = styled.div`
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    width: 100%;
`
export const DisplayHeader = styled.h2`
    width: 100%;
`
export const NoteContainer = styled.div`
    background-color: white;
    border: 1px solid grey;
    width: 40%;
    height: 250px;
    max-width: 250px;
    padding: 10px;
    margin: 20px 10px;
`
export const InputHeader = styled.input`
    background-color: white;
    text: black;
`
export const InputBody = styled.input`
    background-color: white;
    text: black;
`

export const NoteListContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`