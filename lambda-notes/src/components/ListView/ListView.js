import React from 'react' 
import Item from './Item';
import { ListViews } from '../StyledComponents';

function ListView(props){
    return (
        <ListViews>
            {props.notes.map(note => <Item {...note}/>)}
        </ListViews>
    )
}

export default ListView