import React from 'react';
import Notelist from './Notelist';
import Createnote from './Createnote';
import { Route } from 'react-router-dom';
import Note from './Note'
import Notetry from './Notetry';

const Container = props => {
    return (
        <div className="container">
            <Route exact path='/'
            render={() => <Notelist notes={props.notes} />}
            />
            <Route exact path='/notes/:_id' 
            render={props => 
            <Notetry {...props}/>} />
            
        </div>
        
    )
}

export default Container