import styled from 'styled-components'

export const EditViewStyle = styled.div `
display: flex;
flex-direction: row;
${'' /* width: 75% ; */}
margin: 10px 10px 10px 10px;
`

export const InputStyles = styled.div `
display: flex;
flex-direction: column;
justify-content: center ;
width: 100% ;
${'' /* height: 200px ; */}
align-items: flex-start ;
`
export const styles = theme => ({
 textField: {
  marginLeft: theme.spacing.unit + 15,
  marginRight: theme.spacing.unit,
  width: 400 
 },
 dense: {
  marginTop: 16,
 },
 menu: {
  width: 200
 }
})