import styled from 'styled-components'

export const styles = theme => ({
 textField: {
  marginLeft: theme.spacing.unit + 1,
  marginRight: theme.spacing.unit + 1,
 },
 dense: {
  marginTop: 16,
 },
 menu: {
  width: 200
 }
})

export const CreateViewContainer = styled.div `
display: flex ;
flex-direction: column ;
margin: 0 auto ;
margin-top: 125px ;
`

export const CreateViewStyle = styled.div `
 display: flex;
 flex-direction: column;
`
export const CreateText = styled.span `
font-family: 'Archivo Black';
font-size: 2rem ;
margin-bottom: 15% ;
`