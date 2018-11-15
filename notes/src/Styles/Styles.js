import styled from "styled-components";

export const AppContainer = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
`

export const HeaderContainer = styled.div`
   background-color: silver;
   display: flex;
   flex-direction: column;
   max-width: 200px;
   width: 30%;
`

export const Button = styled.button `
   background-color: lightseagreen;
   color: white;
   text-align: center;
   font-weight: bold;
   padding: 5px 20px;
   cursor: pointer;
   width: 90%;
   max-width: 200px;
`

export const DisplayContainer = styled.div`
   background-color: whitesmoke;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   padding: 30px;
   width: 100%;
`

export const DisplayHeader = styled.h2`
   width: 93%;
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

export const InputHeader = styled.input `
   background-color: white;
   color: black;
   max-width: 600px;
   width: 80%;
   border-radius: 5px;
   padding: 5px 10px;
`

export const InputBody = styled.input `
   background-color: white;
   color: black;
   vertical-align: top;
   max-width: 800px;
   width: 100%;
   border-radius: 5px;
   padding: 5px 10px;
   height: 300px;
`