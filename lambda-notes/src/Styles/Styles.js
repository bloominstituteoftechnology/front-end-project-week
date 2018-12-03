import styled from "styled-components"

export const AppContainer = styled.div`
    display: flex;
    margin: 0 auto;
    min-height: 800px;

    p, h2 form {
   margin-left: 1%;
}

form {
   display: flex;
   flex-direction: column;
}
`

export const HeaderContainer = styled.div`
    background-color: silver;
    display:flex;
    flex-direction: column;
    max-width: 200px;
    width: 30%;
`
export const Button = styled.button`
    background-color: #24B8BD;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px 25px;
    margin-bottom: 14px;
    cursor: pointer;
    white-space: nowrap;
    width: 95%;
    max-width: 200px;
`
export const DisplayContainer = styled.div`
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    width: 80%;
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
    display: flex;
    background-color: white;
    color: black;
    padding: 10px 5px;
    margin-bottom: 14px;
    max-width: 600px;
    width: 60%;
    border-radius: 5px;
`

export const InputBody = styled.textarea `
    background-color: white;
    color: black;
    vertical-align: top;
    padding: 10px 12px;
    max-width: 800px;
    width: 95%;
    margin-bottom: 14px;
    border-radius: 5px;
    height: 300px;
    resize: both;
    overflow: auto;
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
}
p {
   margin-left: 7%;
   width: 67%;
   overflow: hidden;
   text-overflow: ellipsis;
 }
`
export const LinkContainer = styled.span`
   display: flex;
   justify-content: flex-end;
   a {
      margin-right: 10px;
      font-size: 1.6rem;
      font-weight: bold;
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
       text-decoration: none;
   }
`
export const DeleteContainer = styled.div`
   position: absolute;
   text-align: center;
   background: rgb(211, 211, 211, 0.9);
   height: 100%;
   width: 100%;
   min-height: 800px;
`

export const DeleteBox = styled.div`
   position: fixed;
   left: 168px;
   top: 112px;
   background-color: white;
   width: 50%;
   margin: 50px auto;
   border: 1px solid black;
   padding: 40px;
   z-index: 6;
   p {
      margin-bottom: 20px;
      margin-left: 0;
   }
`