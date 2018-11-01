import styled from 'styled-components'

export const ModalDiv = styled.div `
display: flex;
justify-content: space-evenly;
align-items: center;
height: 65%;
`

export const ModalText = styled.p `
font-size: 100%;
color: #424242;
text-align: center;
font-weight: bold;
margin: 0;
margin-bottom: 7px;
`

export const NoButton = styled.button `
  background: #CA001A;
  border: 1px solid #b7b7b7;
  padding: 6px;
  width: 43%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  height: 30px;
`

export const NoButtonText = styled.p `
 color: white;
  font-size: 100%;
  margin: 0;
  
  ${NoButton}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const YesButton = styled.button `
  background: #24b8bd;
  border: 1px solid #b7b7b7;
  padding: 6px;
  width: 43%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  height: 30px;
`

export const YesButtonText = styled.p `
 color: white;
  font-size: 100%;
  margin: 0;
  
  ${YesButton}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
`