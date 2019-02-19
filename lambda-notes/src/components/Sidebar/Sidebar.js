import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H1, Div, ContainerStyle } from './styled-components/SidebarStyledComponents'

// const H1 = styled.h1 `
// font-size: 1.6rem ;
// font-family: 'Archivo Black' ;
// margin-bottom: 5px ;
// `

// const Div = styled.div `
//  margin-bottom: 3px ;
//  margin-left: 3px ;
// `

// const ContainerStyle = styled.div `
// border: 2px solid black ;
// max-width: 180px  ;
// width: 100% ;
// height: 800px ;
// background: gray ;
// display: flex;
// flex-direction: column ;
// `

const Sidebar = props => {
 return (
      <ContainerStyle>
       <H1>Lambda Notes</H1>
       <Link to="/">
       <Div>
       <Button color="info">
       
       View Your Notes.</Button></Div></Link>
       {' '}
       <Link to="/create"><Button color="info">
       <Div>
       Add Note +</Div></Button></Link>
      </ContainerStyle>
    )
}

export default Sidebar