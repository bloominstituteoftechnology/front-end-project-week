import React from 'react' 
import Item from './Item';
import { ListViews, H2, ListOptions, UnderLinedP, H3 } from '../StyledComponents';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function List(props){
    return (
        <ListViews>
            {props.notes.map(note => <Item onClick={event => onClick(note._id, props.history)} key={note._id} {...note}/>)}
        </ListViews>
    )
}

function onClick (id, history ){
    history.push(`notes/${id}`)
}



function ListView(props){
    return (
        <div className="appView">
            <ListOptions>
                <H3>Sort by </H3>
                <UnderLinedP onClick={() => props.sort('CHARACTERS') }>Characters</UnderLinedP>
                <UnderLinedP onClick={() => props.sort('CONTENT')}>Content Length</UnderLinedP>
            </ListOptions>
            <H2>Your Notes:</H2>
            <List {...props}/>
        </div>
    )
}

export default ListView