import styled from "styled-components";

export const AppContainer = styled.div`
   box-sizing: border-box;
   width: 100%;
   margin: 0 auto;
   max-width: 880px;
   display: flex;
   border: 1px solid #afafaf;
   height: 100%;
`;

export const HeaderContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: silver;
   width: 40%;
   min-width: 130px;
   padding-bottom: 50px;
`;

export const Buttons = styled.button `
   background-color: #24B8BD;
   color: white;
   font-weight: bold;
   font-size: 1.3rem;
   padding: 10px 25px;
   margin-bottom: 14px;
   margin-top: 20px;
   cursor: pointer;
   white-space: nowrap;
   width: 100%;
   max-width: 200px;
`;

export const DisplayContainer = styled.div`
   display: flex;
   flex-direction: column;
   background-color: whitesmoke;
   width: 100%;
   max-width: 700px;
   padding: 0px 30px;
   padding-top: 30px;
   padding-bottom: 20px;
   text-decoration: none;
   color: black;
`;

export const NoteListContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   text-decoration: none;
   color: black;
`;

export const Notes = styled.a`
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 6;
   white-space: pre-line;
   background-color: white;
   border: 1px solid grey;
   height: 285px;
   max-width: 260px;
   width: 100%;
   margin-top: 20px;
   margin-bottom: 30px;
   margin-left: 20px;
   text-decoration: none;

   :nth-child(3n-1){
      margin-left: 20px;
      margin-right: 1%;
   }
   h3 {
      color: black;
      margin-left: 7%;
      margin-right: 7%
      margin-bottom: 5px;
   }

   p {
      margin-left: 7%;
      overflow: auto;
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

export const Content =styled.div`
   h2 {
      margin-top: 15px;
      margin-bottom: 0px;
   }

   p {
      white-space: pre-line;
      margin-left: 0px;
   }
`

export const InputHeader = styled.input `
   display: flex;
   background-color: white;
   color: black;
   padding: 10px 5px;
   margin-top: 15px;
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
   resize: none;
`
