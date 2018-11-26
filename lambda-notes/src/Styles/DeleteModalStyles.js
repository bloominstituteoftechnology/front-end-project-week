import styled from 'styled-components'

export const ModalDiv = styled.div `
display: flex;
justify-content: space-evenly;
`

export const ModalText = styled.p `
font-size: 100%;
color: #424242;
text-align: center;
font-weight: bold;
`

export const NoButton = styled.button `
  background: green;
  border: 1px solid #b7b7b7;
  padding: 12px;
  width: 43%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
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

export const DeleteButton = styled.button `
  background: red;
  border: 1px solid #b7b7b7;
  padding: 12px;
  width: 43%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`

export const DeleteButtonText = styled.p `
 color: white;
  font-size: 100%;
  margin: 0;
  
  ${DeleteButton}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
`