import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: #f2f0f2;
  overflow-wrap: break-word;
  overflow-y: scroll;
  width: 100%;
`

export const PageHeader = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin: 30px 10px 20px;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Note = styled.div`
  width: 200px;
  border: 1px solid #434343;
  padding: 10px;
  margin: 10px;
  background: white;
  white-space: pre-wrap;
`

export const NoteTitle = styled.h2`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  max-width: 150px;
`

export const NoteBody = styled.p`
  font-size: 1.6rem;
`

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  margin-bottom: 10px;
`

export const Checkbox = styled.input`
  transform: scale(3);
  background-color: red;
`

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  padding-bottom: 25px;
  cursor: pointer;
`

export const HiddenDefault = styled.input`
  display: none;
`

export const StyledCheckbox = styled.span`
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:hover {
    background-color: #ccc;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 8px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: #2196f3;

      &:after {
        display: block;
      }
    `};
`


// -webkit-appearance: none;
// background-color: #fafafa;
// border: 1px solid #cacece;
// box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
//   inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
// padding: 9px;
// border-radius: 3px;
// display: inline-block;
// position: relative;

// &:active, &:checked:active {

//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
//     inset 0px 1px 3px rgba(0, 0, 0, 0.1);
// }

// $:checked {
//   background-color: #e9ecee;
//   border: 1px solid #adb8c0;
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
//     inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
//     inset 15px 10px -12px rgba(255, 255, 255, 0.1);
//   color: #99a1a7;
// }

// &:checked:after {
//   content: '\2714';
//   font-size: 14px;
//   position: absolute;
//   top: 0px;
//   left: 3px;
//   color: #99a1a7;
// }
