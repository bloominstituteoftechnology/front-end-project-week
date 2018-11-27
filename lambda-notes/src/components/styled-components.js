import styled from 'styled-components';


// ----------------->APP.JS STYLES <-----------------
export const MainAppContainer = styled.div `
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700');

    display: flex;
    max-width: 1200px; 
    width: 98%;
    margin: 15px auto;
    font-family: 'Ubuntu', sans-serif;
    font-size: 62.5%;
    border:4px solid #00BBBF;
    height: 96vh;
    color: #414141;
`
export const SideBar = styled.div `
    background: #D3D2D3;
    max-width: 800px; 
    width:30%;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
      margin: 0 auto;
    h1{
      font-size: 2.8rem; 
      margin: 20px auto;
      font-weight:bold;
    }
    h3{
      font-size: 1.8rem;
      margin-bottom:20px
    }
    a:link{
    color: #414141;
    text-decoration: none;
    }
    a:visited{
      color:#414141;
    }

`
export const Buttons = styled.div `
    background: #00BBBF;
    max-width: 210px;
    width: 15vw;
    height: 5vh;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #DCDBDC;
    p{
      font-size: 1.4rem;
      color: white;
      padding-top: 8px;
    }
`

export const Content = styled.div `
    width: 100%;
    padding-left: 20px;
    padding-right: 15px;
    background: #F2F1F2;
    max-height: vh
    overflow: hidden;
    overflow-y: scroll;
`

// ---------------->NotesList.JS Styles <-------------------
export const MappedNotes = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    padding-top: 10px
    height:100%;
    .list-header{
      font-size: 3rem;
      width: 100%;
      margin-top: 25px;
      padding-left: 15px;
    }

`
//------------------------> Notes.js Styles <-----------
export const NoteContainer = styled.div `
    max-width: 1000px;
    width: 100%;
    border: 2px solid #DCDBDC;
    display:flex;
    flex-direction: column;
    height: 180px;
    width: 28%;
    overflow: hidden;
    overflow-y: scroll;
    margin:20px;
    text-align: center;
    background-color:white;
     .header{
       h1{
        font-size:  1.8rem;
        font-weight: bolder;
       }
     text-align: left;
     padding: 8px;
    }
    .body{
      font-size: 1.2rem;
      text-align: left;
      padding: 10px;
    }
    .divider{
      height: 2px;
      margin: 0 15px 0 15px
      border-bottom:1px solid #DCDBDC;
    }
    a:link{
      color: #414141;
      text-decoration: none;
    }
    a:visited{
      color:#414141;
    }
`

//-------------->Single Notes<--------------------------

export const SoloStyle = styled.div `
    max-width:880px;
    width:90%;
    height: 95vh;
    p{
        font-size:1.6rem;
    }
    a:link{
    color: black;
    text-decoration: none;
    }
    a:visited{
      color:black;
    }
`
export const SoloLinks = styled.div `
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    a{
        font-size: 1.6rem;
        text-decoration: underline;
    }
    p{
        cursor: pointer;
        font-size: 1.6rem;
        text-decoration: underline;
        margin-right: 15px;
    }
`
export const SoloContent = styled.div `
    margin: 15px auto;
    margin-left: 18px;
      h1{
        margin-bottom: 20px;
      }
`
//---------->noteform.js<------------------

export const FormSteez = styled.div `

`