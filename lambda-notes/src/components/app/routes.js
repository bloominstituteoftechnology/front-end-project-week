import React from 'react' ;
import NotesList from '../notes/NotesList' ;
import Create from '../edit/Create' ;
import Note from '../notes/Note';


const routes = [
    {
        path: '/',
        exact: true,
        // title: () => <h2>Your Notes:</h2>,
        title: 'Your Notes:',
        component: NotesList,
        
    },
    {
        path: '/create',
        // title: () => <h2>Create New Note:</h2>,
        title: 'Create New Note:',
        component: Create,        
    },
    // {
    //     path: '/note/',
    //     component: Note
    // }
];
export default routes ;
