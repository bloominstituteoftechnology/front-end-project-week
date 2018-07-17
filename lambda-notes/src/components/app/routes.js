import React from 'react' ;
import NotesList from '../notes/NotesList' ;
import Create from '../edit/Create' ;


const routes = [
    {
        path: '/',
        exact: true,
        title: () => <h2>Your Notes:</h2>,
        component: NotesList
    },
    {
        path: '/create',
        title: () => <h2>Create New Note:</h2>,
        component: Create
    }
];
export default routes ;