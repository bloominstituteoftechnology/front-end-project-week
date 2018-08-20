import React from 'react' 
import Item from './Item';
import { ListViews, H2 } from '../StyledComponents';

function List(props){
    return (
        <ListViews>
            {props.notes.map(note => <Item {...note}/>)}
        </ListViews>
    )
}

function ListView(props){
    return (
        <div className="appView">
            <H2>Your Notes:</H2>
            <List {...props}/>
        </div>
    )
}

export default ListView