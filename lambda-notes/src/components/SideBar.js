import React from 'react' 
import { H1, Button } from './StyledComponents';

function SideBar (props){
    return (
        <div>
            <H1>Lambda<br/>Notes</H1>
            <Button>View Your Notes</Button>
            <Button>+ Create New Note</Button>
        </div>
    )
}

export default SideBar