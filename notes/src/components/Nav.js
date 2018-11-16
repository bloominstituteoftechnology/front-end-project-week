import React from 'react';

import Nav from '../Styles/Nav';
import { Title, Button } from '../Styles/GeneralStyles';
import history from '../history';

export default () => (
    <Nav>
        <Title>Lambda Notes</Title>
        <Button onClick={() => history.push('/')}>View Your Notes</Button>
        <Button>+Create New Note</Button>
    </Nav>
);