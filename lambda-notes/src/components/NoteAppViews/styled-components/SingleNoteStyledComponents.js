import styled from 'styled-components'

export const SingleNoteContainer = styled.div `
margin-top: 180px ;
margin-left: 5px ;
display: flex;
flex-direction: column;
`

export const modalStyle = () => {
 function rand(){
  return Math.round(Math.random() * 20) - 10
 }
 const top = 10 + rand()
 const left = 50 + rand()

 return {
  top: top,
  left: left,
  transform: `translate(-${top}%, -${left}%)`
 }
}

export const SingleNoteTitle = styled.div `
font-family: 'Archivo Black';
font-size: 1.6rem ;
margin-bottom: 10px ;
`
export const SingleNoteBody = styled.div `
margin-bottom: 10px ;
`

export const styles = theme => ({
 paper: {
  width: theme.spacing.unit * 50,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[6],
  marginTop: 700,
  marginLeft: 500,
  padding: theme.spacing.unit * 4,
  // border: '1px solid black', 
  // margin: "0 auto",
  // display: 'flex',
  // justifyContent: 'center'
 },
})