import React from 'react' 
import { H1, Button, SearchInput } from './StyledComponents';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

function SideBar (props){
    return (
        <div>
            <H1>Lambda<br/>Notes</H1>
            <NavLink to="/"><Button>View Your Notes</Button></NavLink>
            <NavLink to="/newNote"><Button>+ Create New Note</Button></NavLink>
            <SearchInput onChange={props.onSearchChange} type="text" name="search" placeholder="Search"/>
        </div>
    )
}

export default SideBar