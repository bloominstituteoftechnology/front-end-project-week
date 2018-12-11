import styled from 'styled-components'

export const AddTaskBtn = styled.button `
    background: #24b8bd;
    border: 1px solid #b7b7b7;
    padding: 0px;
    width: 100%;
    font-size: 100%;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    text-align: center;
    height: 30px;
    margin-top: 10px;
    outline: none;
`

export const AddTaskBtnText = styled.p `
 color: white;
  font-size: 100%;
  margin: 0;
  
  ${AddTaskBtn}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const TaskInput = styled.input `
height: 25px;
`


export const ClearTaskBtn = styled.button `
  background: #CA001A;
  border: 1px solid #b7b7b7;
  padding: 0px;
  width: 100%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  height: 30px;
  outline: none;
`

export const ClearTaskBtnText = styled.p `
 color: white;
  font-size: 100%;
  margin: 0;
  
  ${ClearTaskBtn}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
  `

export const TaskTitle = styled.h2 `
font-size: 100%;
color: #424242;
text-align: center;
font-weight: bold;
`