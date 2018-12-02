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
    text-decoration: none;
`
export const InputHeader = styled.input`
    background-color: white;
    text: black;
`
export const InputBody = styled.input`
    background-color: white;
    color: black;
    border-radius: 5px;
`

export const NoteListContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`
export const Notes = styled.a`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    white-space: pre-line;
    background-color: white;
    border: 1px solid grey;
    height: 285px;
    max-width: 260px;
    width: 50%;
    margin-bottom: 30px;

:nth-child(3n-1){
   margin-left: 1%;
   margin-right: 1%;
}
h3 {
   margin-left: 7%;
   margin-right: 7%
   margin-bottom: 5px;
   text-decoration: none;
}
p {
   margin-left: 7%;
   width: 67%;
   overflow: hidden;
   text-overflow: ellipsis;
   text-decoration: none;
 }
`
export const LinkContainer = styled.span`
   display: flex;
   justify-content: flex-end;
   a {
      margin-right: 10px;
      font-size: 1.6rem;
      font-weight: bold;
      text-decoration-line: underline;
   }
   p {
      margin-left: 2%
   }
`
export const Content = styled.div`
   h2 {
       margin-top: 0px;
       margin-bottom: 0px;
   }

   p {
       white-space: pre-line;
       margin-left: 0px;
   }
`