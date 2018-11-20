import styled from 'styled-components';


// ----------------->APP.JS STYLES <-----------------
export const MainAppContainer = styled.div `
  display: flex;
  max-width: 1200px; 
  width: 98%;
  margin: 0 auto;
  background: #B9B7C0;
`
export const SideBar = styled.div `
  max-width: 800px; 
  width:100%;
  height: 92vh;
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

// ---------------->NotesList.JS Styles <-------------------
export const MappedNotes = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    padding-top: 10px
    border: 1px solid aqua;
    background-color: #DDDCE1;
`
//------------------------> Notes.js Styles <-----------
export const NoteContainer = styled.div `
max-width: 4500px;
width: 90%;
border: 1px solid black;
display:flex;
flex-direction: column;
height: 100px;
width: 280px;
overflow: hidden;
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