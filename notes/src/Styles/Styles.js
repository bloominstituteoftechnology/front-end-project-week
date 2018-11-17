import styled from "styled-components";

export const AppContainer = styled.div`
   display: flex;
   margin: 0 auto;
   min-height: 800px;

   p, h2 {
      margin-left: 1%;
   }
`

export const HeaderContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: silver;
   width: 20%;
   min-width: 130px;
`

export const Button = styled.button `
   background-color: ${props => props.bgColor || "lightseagreen"};
   color: white;
   font-weight: bold;
   font-size: 1.3rem;
   padding: 10px 25px;
   margin-bottom: 10px;
   cursor: pointer;
   white-space: nowrap;
   width: ${props => props.width || "95%"};
   max-width: ${props => props.maxWidth || "200px"};
`

export const DisplayContainer = styled.div`
   display: flex;
   flex-direction: column;
   background-color: whitesmoke;
   width: 80%;
   padding: 0px 30px;
   padding-top: 30px;
`

export const NoteListContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
`

export const Notes = styled.a`
   display: -webkit-box !important;
   -webkit-box-orient: vertical !important;
   -webkit-line-clamp: 6 !important;
   overflow: hidden !important;
   background-color: white;
   border: 1px solid grey;
   height: 285px;
   max-width: 260px;
   width: 50%;
   margin-bottom: 30px;

   h3 {
      margin-left: 7%;
      margin-right: 7%
   }

   p {
      margin-left: 7%;
      width: 67%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
`
export const LinkContainer = styled.span`
   display: inline-flex;
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
export const FormContainer = styled.div`

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

export const InputBody = styled.textarea `
   background-color: white;
   color: black;
   vertical-align: top;
   max-width: 800px;
   width: 100%;
   border-radius: 5px;
   padding: 5px 0px;
   height: 300px;
`