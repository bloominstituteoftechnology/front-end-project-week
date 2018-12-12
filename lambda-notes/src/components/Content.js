import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';
import { Route } from 'react-router-dom';
import List from '../views/List';
import AddNote from '../views/AddNote';
import NoteView from '../views/NoteView';
import DeleteModal from '../components/DeleteModal';

const Div = styled.div`
    width: ${100 - styleVars.sideBarWidth}%;
    padding: 0 0 0 32px;
    background: ${styleVars.mainContentBG};
    height: 100vh;
    overflow-y: auto;
`;

const Content = props => {
    console.log('content props:', props);
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
            <Route
                path="/notes/:_id"
                render={routeProps => <NoteView {...routeProps} />}
            />
            <Route
                path="/edit/:_id"
                render={routeProps => (
                    <AddNote {...routeProps} update={props.update} />
                )}
            />
            <Route
                path="/notes/:_id/delete"
                render={routeProps => <DeleteModal {...routeProps} />}
            />
        </Div>
    );
};

export default Content;
