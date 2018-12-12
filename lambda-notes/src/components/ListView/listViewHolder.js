import React from 'react';
import SideBar from "../sidebar";
import ListView from './listView';


const ListViewHolder = props => {
  return (
    <div className={'container'}>
      <SideBar />
      <ListView {...props} notes={props.notes} filteredNotes={props.filteredNotes} searchPostsHandler={props.searchPostsHandler} exportCSV={props.exportCSV} />
    </div>
  )
};

export default ListViewHolder;
