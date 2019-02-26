import React from 'react';

import { Link } from 'react-router-dom';

import ViewNotesButton from './viewButton';
import CreateNewButton from './createNewButton';
import SearchBar from './searchBar/searchbar';
import SortButtonView from './sortComponents/sortView';
import Logout from './logoutButton';


//props from app.js 
//{...props}  
//getUpdatedNotes={this.getUpdatedNotes} 
//notes={this.state.notes} 
//searchNotes={this.searchNotes}
//handleAscendingSort = {this.handleAscendingSort}
//handleDescendingSort = {this.handleDescendingSort}
//handleLogout={this.handleLogout}

const SidebarView = props => {
    return (
        <div className="sideBarWrap">
            <Link to="/notes">
                <h2 className="sbTitle">&#955; Lambda Notes</h2>
            </Link>
            
            <SearchBar notes={props.notes} searchNotes={props.searchNotes}/>
            <ViewNotesButton getUpdatedNotes={props.getUpdatedNotes}/>
            <CreateNewButton />
            <SortButtonView handleAscendingSort={props.handleAscendingSort} 
                            handleDescendingSort={props.handleDescendingSort} />
            <Logout handleLogout={props.handleLogout} />
        </div>
    )
}

export default SidebarView