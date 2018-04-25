import React from 'react'
import Styled from 'styled-components'

const SidebarContainer = Styled.aside`
    position: sticky;
    height: 100vh;
    top: 0;
`

const Button = Styled.button``

/** @type React.StatelessComponent<{}> */
const Sidebar = props => (
  <SidebarContainer>
    <h2>Lambda Notes</h2>
    <Button>View your Notes</Button>
    <Button>+Create New Note</Button>
  </SidebarContainer>
)

export { Sidebar }
