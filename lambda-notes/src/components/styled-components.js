import styled from 'styled-components';


// ----------------->APP.JS STYLES <-----------------
export const MainAppContainer = styled.div `
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700');

  display: flex;
  max-width: 1200px; 
  width: 98%;
  margin: 15px auto;
  background: #B9B7C0;
  font-family: 'Ubuntu', sans-serif;
`
export const SideBar = styled.div `
  max-width: 800px; 
  width:25%;
  height: 95vh;
  display: flex; 
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
    margin: 10px 15px;
  h1{
    font-size: 2.8rem; 
    margin-bottom: 20px;
  }
  h3{
    font-size: 1.8rem;
    margin-bottom:20px
  }
`
export const Content = styled.div `
  width: 100%;
  padding-left: 20px;
  padding-right: 15px;
  overflow: hidden;
`

// ---------------->NotesList.JS Styles <-------------------
export const MappedNotes = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
    padding-top: 10px
    background-color: #DDDCE1;
    height:100%;
`
//------------------------> Notes.js Styles <-----------
export const NoteContainer = styled.div `
max-width: 1000px;
width: 100%;
border: 1px solid black;
display:flex;
flex-direction: column;
height: 100px;
width: 280px;
overflow: hidden;
overflow-y: scroll;
margin-top:20px;
text-align: center;
background-color:white;
 h1{
 font-size:  1.8rem;
 text-align: left;
 padding: 8px;
}
a:link{
  color: black;
  text-decoration: none;
}
a:visited{
  color:black;
}
`

const SoloNoteContainer = styled.div `
      display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
    padding-top: 10px
    background-color: #DDDCE1;
    height:100%;
`