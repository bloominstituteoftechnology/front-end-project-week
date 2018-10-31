import React from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';


const TopBar = props => {
  return (
    <div className='top-bar'>
    <SearchBar handleInput={props.handleInput} search={props.search}/>
    <SortBar sortByTitleAsc={props.sortByTitleAsc} sortByTitleDes={props.sortByTitleDes} sortByLength={props.sortByLength}/>
    </div>
  )
}
export default TopBar;
