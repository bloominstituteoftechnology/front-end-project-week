import styled from 'styled-components';

export const AppWrap = styled.div`
    margin: 20% auto;
    width: 880px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: left;
`
export const NoteHeading = styled.div`
    margin-bottom: 10px;
    border-bottom: 1px solid lightgrey;

`
export const NoteContent = styled.div`
    display: flex;
    height: 800px;
    overflow: scroll ;
    background-color: #f2f1f2;
`

export const BtnStyle = styled.button`
    background-color: #24b8bd;
    color: #ffffff;
    border: none;
    font-weight: 700;
    height: 40px;
    width: 200px;
    padding: 0;
        :hover {
          cursor: pointer;
          border: 1px solid white;
        }
`

export const HeadStyle = styled.div`
   border: 1px solid black;
   width: 200px;
   height: 760px;
   background-color: #d3d2d3 ;
   padding: 10px;
    h1 {
        margin: 0;
        color: #3e4042;
    }

    button {

        margin: 20px 0 0 0;
    }
`

export const LambdaNotes = styled.div`
    font-family: 'Fira Sans', sans-serif;
`
