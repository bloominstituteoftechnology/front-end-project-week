import React from 'react';

import { Link } from 'react-router-dom';

import ViewNotesButton from './viewButton';
import CreateNewButton from './createNewButton';
import SearchBar from './searchBar/searchbar';
import SortButtonView from './sortComponents/sortView';


//props from app.js 
//{...props}  
//getUpdatedNotes={this.getUpdatedNotes} 
//notes={this.state.notes} 
//searchNotes={this.searchNotes}
//handleAscendingSort = {this.handleAscendingSort}
//handleDescendingSort = {this.handleDescendingSort}

const SidebarView = props => {
    return (
        <div className="sideBarWrap">
            <Link to="/">
                <h2 className="sbTitle">Lambda Notes</h2>
            </Link>
            
            <SearchBar notes={props.notes} searchNotes={props.searchNotes}/>
            <ViewNotesButton getUpdatedNotes={props.getUpdatedNotes}/>
            <CreateNewButton />
            <SortButtonView handleAscendingSort={props.handleAscendingSort} 
                                      handleDescendingSort={props.handleDescendingSort} />
        </div>
    )
}

export default SidebarView