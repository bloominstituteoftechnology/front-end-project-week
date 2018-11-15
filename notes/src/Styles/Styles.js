import styled from "styled-components";

export const AppContainer = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   // background-color: whitesmoke;
`

export const HeaderContainer = styled.div`
   display: flex;
   background-color: silver;
   flex-wrap: wrap;
   flex-direction: column;
   max-width: 217px;
   width: 21%;
`

export const Button = styled.button `
   background-color: lightseagreen;
   color: white;
   text-align: center;
   font-weight: bold;
   padding: 10px 25px;
   cursor: pointer;
   width: 90%;
   max-width: 200px;
`

export const DisplayContainer = styled.div`
   background-color: whitesmoke;
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;
   width: 79%;
`

export const TestContainer = styled.div`
   // display: flex;
   // flex-direction: column
   // border: solid red;
   // width: 100%
   
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
   margin-bottom: 20px;
`

export const InputHeader = styled.input `
   display: flex;
   background-color: white;
   color: black;
   // max-width: 600px;
   width: 100%;
   border-radius: 5px;
   padding: 5px 0px;
`

export const InputBody = styled.input `
   background-color: white;
   color: black;
   vertical-align: top;
   max-width: 800px;
   width: 100%;
   border-radius: 5px;
   padding: 5px 0px;
   height: 300px;
`