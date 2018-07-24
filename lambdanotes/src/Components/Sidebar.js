import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background: #CDCCCD;
    width: 200px;
    height: 100%;
    border-right: 1px solid #BABABA;
`;

const Button = styled.button`
    width: 175px;
    height: 30px;
    background: #20AFB5;
    color: white;
    font: bold;
`;

const Sidebar = () => {
    return ( 
        <Container>
          <h1>Lambda Notes</h1>
            <Button>
                <Link to='/'>View Your Notes</Link>
            </Button>
            <Button>
                <Link to='/new-note'>+ Create New Note</Link>
            </Button>
        </Container>
     );
}
 
export default Sidebar;