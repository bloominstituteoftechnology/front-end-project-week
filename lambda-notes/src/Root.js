import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Note from './components/Note';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';


const Root = props => {
    return(

<div>
<Route exact path='/' component={App} />
<Route path='/new' component={NewNote} />
{/*<Route path='/edit/:id' component={EditNote} />*/}
<Route path='/note/:id' render = {(props) => <Note {...props} />} />
</div>
        
    )
}

export default Root;