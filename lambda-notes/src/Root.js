import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Note from './components/Note';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';

const Root = props => {
    return(

<div>
<Route path='/' component={App} />
<Route path='/note' component={Note} />
<Route path='/new' component={NewNote} />
<Route path='/edit' component={EditNote} />
</div>
        
    )
}

export default Root;