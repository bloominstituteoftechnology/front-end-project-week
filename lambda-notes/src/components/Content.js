import React from 'react';
// import NotesList from './NotesList';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';
import { Route } from 'react-router-dom';
import List from '../views/List';
import AddNote from '../views/AddNote';

const Div = styled.div`
    width: ${100 - styleVars.sideBarWidth}%;
    padding: 56px 0 0 32px;
    background: ${styleVars.mainContentBG};
    height: 100vh;
    overflow-y: auto;
`;

const Content = props => {
    console.log(props);
    //TODO this router is weird is that normal that I would have to use a different variable for routerProps and passed in props?
    return (
        <Div>
            <Route
                exact
                path="/"
                render={routeProps => (
                    <List {...routeProps} notes={props.notes} />
                )}
            />
            <Route
                exact
                path="/add"
                render={routeProps => (
                    <AddNote {...routeProps} post={props.post} />
                )}
            />
        </Div>
    );
};

export default Content;
