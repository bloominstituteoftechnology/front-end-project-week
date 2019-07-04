import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background: #CDCCCD;
    width: 200px;
    height: 100%;
    border-right: 1px solid #BABABA;
    padding-left: 15px;
`;

const Button = styled.button`
    width: 175px;
    height: 30px;
    background: #20AFB5;
    margin-bottom: 15px;
`;

const Sidebar = () => {
    return ( 
        <Container>
          <h1>Lambda Notes</h1>
            <Button>
                <Link to='/' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>View Your Notes</Link>
            </Button>
            <Button>
                <Link to='/new-note' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>+ Create New Note</Link>
            </Button>
        </Container>
     );
}
 
export default Sidebar;